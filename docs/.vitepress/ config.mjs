import { withMermaid } from "vitepress-plugin-mermaid"
import { withSidebar } from "vitepress-sidebar"
import { vitepressPythonEditor } from "vitepress-python-editor/vite-plugin"
import { defineConfig } from "vitepress"

const vitePressSidebarOptions = [
  {
    documentRootPath: "docs",
    scanStartPath: "docs", // 🔥 auto-scans all subfolders
    resolvePath: "/",
    collapsed: true,
    hyphenToSpace: true,
    capitalizeEachWords: true,
    underscoreToSpace: true,
    includeEmptyFolder: false,
    excludeFilesByFrontmatterFieldName: "exclude",
    sortMenusByFrontmatterOrder: true,
    includeFolderIndexFile: true,
    useTitleFromFrontmatter: true
  }
]

export default withMermaid(
  withSidebar(
    defineConfig({
      title: "BCA Notes",
      description: "Notes and resources for BCA students",
      ignoreDeadLinks: true, // ✅ prevents build errors on Cloudflare
      cleanUrls: true,
      lastUpdated: true,

      themeConfig: {
        nav: [
          { text: "Home", link: "/" },
          { text: "Syllabus", link: "/bca-syllabus" }
        ],
        sidebar: vitePressSidebarOptions, // ← optional override
        socialLinks: [
          { icon: "github", link: "https://github.com/pingforhelp/BCA" }
        ]
      },

      vite: {
        plugins: [
          vitepressPythonEditor({ assetsDir: "docs/.vitepress/dist/assets" })
        ]
      },

      markdown: {
        math: true
      },

      mermaid: {},
      mermaidPlugin: {
        class: "mermaid my-class"
      }
    }),
    vitePressSidebarOptions
  )
)
