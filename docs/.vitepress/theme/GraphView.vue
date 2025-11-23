<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vitepress'

interface Node {
  id: string
  title: string
  path: string
  x: number
  y: number
  vx: number
  vy: number
}

interface Link {
  source: string
  target: string
}

const canvas = ref<HTMLCanvasElement | null>(null)
const container = ref<HTMLDivElement | null>(null)
let ctx: CanvasRenderingContext2D | null = null
const router = useRouter()

// Sample graph data - customize this with your actual pages
const nodes: Node[] = [
  { id: '1', title: 'Home', path: '/', x: 400, y: 300, vx: 0, vy: 0 },
  { id: '2', title: 'Computer Sci', path: '/computer-sci/', x: 300, y: 200, vx: 0, vy: 0 },
  { id: '3', title: 'English', path: '/english/', x: 500, y: 200, vx: 0, vy: 0 },
  { id: '4', title: 'Comm Skills', path: '/communication-skills/', x: 300, y: 400, vx: 0, vy: 0 },
  { id: '5', title: 'AI', path: '/AI/', x: 500, y: 400, vx: 0, vy: 0 }
]

const links: Link[] = [
  { source: '1', target: '2' },
  { source: '1', target: '3' },
  { source: '1', target: '4' },
  { source: '1', target: '5' }
]

const colors: Record<string, string> = {
  default: '#5b6cf9',
  hover: '#8b96ff'
}

let hoveredNode: Node | null = null
let draggedNode: Node | null = null
let isDragging = false

function drawGraph() {
  if (!canvas.value || !ctx) return
  
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
  
  // Draw links
  ctx.strokeStyle = getComputedStyle(document.documentElement)
    .getPropertyValue('--vp-c-divider') || '#e2e2e3'
  ctx.lineWidth = 2
  
  links.forEach(link => {
    const source = nodes.find(n => n.id === link.source)
    const target = nodes.find(n => n.id === link.target)
    if (source && target) {
      ctx!.beginPath()
      ctx!.moveTo(source.x, source.y)
      ctx!.lineTo(target.x, target.y)
      ctx!.stroke()
    }
  })
  
  // Draw nodes
  nodes.forEach(node => {
    const isHovered = hoveredNode?.id === node.id
    const radius = isHovered ? 12 : 10
    
    ctx!.fillStyle = isHovered ? colors.hover : colors.default
    ctx!.beginPath()
    ctx!.arc(node.x, node.y, radius, 0, Math.PI * 2)
    ctx!.fill()
    
    ctx!.strokeStyle = getComputedStyle(document.documentElement)
      .getPropertyValue('--vp-c-bg') || '#ffffff'
    ctx!.lineWidth = 2
    ctx!.stroke()
    
    // Draw labels
    ctx!.fillStyle = getComputedStyle(document.documentElement)
      .getPropertyValue('--vp-c-text-1') || '#213547'
    ctx!.font = '12px sans-serif'
    ctx!.textAlign = 'center'
    ctx!.fillText(node.title, node.x, node.y + 25)
  })
}

function simulate() {
  // Simple force simulation
  const centerX = canvas.value!.width / 2
  const centerY = canvas.value!.height / 2
  
  nodes.forEach(node => {
    if (node === draggedNode) return
    
    // Center force
    node.vx += (centerX - node.x) * 0.001
    node.vy += (centerY - node.y) * 0.001
    
    // Repulsion between nodes
    nodes.forEach(other => {
      if (node === other) return
      const dx = node.x - other.x
      const dy = node.y - other.y
      const dist = Math.sqrt(dx * dx + dy * dy) || 1
      const force = 100 / (dist * dist)
      node.vx += dx * force
      node.vy += dy * force
    })
    
    // Link attraction
    links.forEach(link => {
      if (link.source === node.id) {
        const target = nodes.find(n => n.id === link.target)
        if (target) {
          node.vx += (target.x - node.x) * 0.01
          node.vy += (target.y - node.y) * 0.01
        }
      }
      if (link.target === node.id) {
        const source = nodes.find(n => n.id === link.source)
        if (source) {
          node.vx += (source.x - node.x) * 0.01
          node.vy += (source.y - node.y) * 0.01
        }
      }
    })
    
    // Apply velocity with damping
    node.vx *= 0.9
    node.vy *= 0.9
    node.x += node.vx
    node.y += node.vy
    
    // Boundary
    node.x = Math.max(50, Math.min(canvas.value!.width - 50, node.x))
    node.y = Math.max(50, Math.min(canvas.value!.height - 50, node.y))
  })
  
  drawGraph()
  requestAnimationFrame(simulate)
}

function getNodeAtPosition(x: number, y: number): Node | null {
  return nodes.find(node => {
    const dx = node.x - x
    const dy = node.y - y
    return Math.sqrt(dx * dx + dy * dy) < 15
  }) || null
}

function handleMouseMove(e: MouseEvent) {
  const rect = canvas.value!.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  
  if (isDragging && draggedNode) {
    draggedNode.x = x
    draggedNode.y = y
    draggedNode.vx = 0
    draggedNode.vy = 0
    return
  }
  
  const node = getNodeAtPosition(x, y)
  hoveredNode = node
  canvas.value!.style.cursor = node ? 'pointer' : 'default'
}

function handleMouseDown(e: MouseEvent) {
  const rect = canvas.value!.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  
  const node = getNodeAtPosition(x, y)
  if (node) {
    draggedNode = node
    isDragging = true
  }
}

function handleMouseUp() {
  if (draggedNode && !isDragging) {
    router.go(draggedNode.path)
  }
  draggedNode = null
  isDragging = false
}

function handleClick(e: MouseEvent) {
  const rect = canvas.value!.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.y
  
  const node = getNodeAtPosition(x, y)
  if (node && !isDragging) {
    router.go(node.path)
  }
}

function resizeCanvas() {
  if (!canvas.value || !container.value) return
  canvas.value.width = container.value.clientWidth
  canvas.value.height = 500
  drawGraph()
}

onMounted(() => {
  if (canvas.value) {
    ctx = canvas.value.getContext('2d')
    resizeCanvas()
    simulate()
    
    canvas.value.addEventListener('mousemove', handleMouseMove)
    canvas.value.addEventListener('mousedown', handleMouseDown)
    canvas.value.addEventListener('mouseup', handleMouseUp)
    canvas.value.addEventListener('click', handleClick)
    window.addEventListener('resize', resizeCanvas)
  }
})

onUnmounted(() => {
  if (canvas.value) {
    canvas.value.removeEventListener('mousemove', handleMouseMove)
    canvas.value.removeEventListener('mousedown', handleMouseDown)
    canvas.value.removeEventListener('mouseup', handleMouseUp)
    canvas.value.removeEventListener('click', handleClick)
  }
  window.removeEventListener('resize', resizeCanvas)
})
</script>

<template>
  <div ref="container" class="graph-wrapper">
    <div class="graph-info">
      <p>Interactive knowledge graph - drag nodes to rearrange, click to navigate</p>
    </div>
    <canvas ref="canvas" class="graph-canvas"></canvas>
  </div>
</template>

<style scoped>
.graph-wrapper {
  width: 100%;
  margin: 24px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
}

.graph-info {
  padding: 12px 16px;
  background: var(--vp-c-bg);
  border-bottom: 1px solid var(--vp-c-divider);
}

.graph-info p {
  margin: 0;
  font-size: 14px;
  color: var(--vp-c-text-2);
}

.graph-canvas {
  display: block;
  width: 100%;
  height: 500px;
}
</style>