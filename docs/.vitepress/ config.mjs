import markdownItContainer from "markdown-it-container"
import markdownItAnchor from "markdown-it-anchor"

const callouts = [
  { type: "NOTE", icon: "mdi:note-text", color: "#409eff" },
  { type: "TIP", icon: "mdi:lightbulb-on-outline", color: "#67c23a" },
  { type: "INFO", icon: "mdi:information-outline", color: "#268bd2" },
  { type: "SUCCESS", icon: "mdi:check-circle-outline", color: "#28a745" },
  { type: "WARNING", icon: "mdi:alert-outline", color: "#e6a23c" },
  { type: "DANGER", icon: "mdi:alert-octagon-outline", color: "#f56c6c" },
  { type: "ERROR", icon: "mdi:close-octagon-outline", color: "#d32f2f" },
  { type: "IMPORTANT", icon: "mdi:alert-decagram", color: "#ff5722" },
  { type: "FAQ", icon: "mdi:help-circle-outline", color: "#1e90ff" },
  { type: "QUOTE", icon: "mdi:format-quote-open", color: "#999999" },
  { type: "CITE", icon: "mdi:format-quote-close", color: "#6a5acd" },
  { type: "ABSTRACT", icon: "mdi:clipboard-text-outline", color: "#9b59b6" },
  { type: "TLDR", icon: "mdi:book-open-page-variant", color: "#00bfa5" },
  { type: "EXAMPLE", icon: "mdi:test-tube", color: "#00acc1" },
  { type: "FUN", icon: "mdi:party-popper", color: "#ff69b4" },
  { type: "HINT", icon: "mdi:flashlight", color: "#42b983" },
]

export default {
  markdown: {
    anchor: { permalink: markdownItAnchor.permalink.headerLink() },
    toc: { level: [1, 2, 3] },
    config: (md) => {
      // 1️⃣ Disable VitePress default callouts
      md.block.ruler.disable([
        "container_note",
        "container_tip",
        "container_warning",
        "container_danger",
        "container_info",
        "container_success"
      ])

      // 2️⃣ Register custom ones
      callouts.forEach(({ type, icon, color }) => {
        const key = type.toLowerCase()
        md.use(markdownItContainer, key, {
          render(tokens, idx) {
            const token = tokens[idx]
            if (token.nesting === 1) {
              return `
                <div class="vp-callout ${key}" style="--callout-color:${color}">
                  <i class="iconify callout-icon" data-icon="${icon}"></i>
                  <div class="callout-body">
                    <div class="callout-title">${type}</div>
              `
            } else {
              return "</div></div>\n"
            }
          },
        })
      })

      // 3️⃣ Highlight syntax ==like this==
      const highlightRE = /==(.*?)==/g
      const origRender = md.renderer.rules.text || ((tokens, idx) => tokens[idx].content)
      md.renderer.rules.text = (tokens, idx, options, env, self) => {
        let text = tokens[idx].content
        if (highlightRE.test(text)) {
          text = text.replace(highlightRE, "<mark>$1</mark>")
        }
        return origRender({ ...tokens, [idx]: { content: text } }, idx, options, env, self)
      }
    },
  },
}
