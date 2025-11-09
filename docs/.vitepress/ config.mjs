// .vitepress/config.mjs

import { defineConfig } from "bca" // change to "vitepress" if it breaks
import { withSidebar } from "vitepress-sidebar"
import { withMermaid } from "vitepress-plugin-mermaid"
import { vitepressPythonEditor } from "vitepress-python-editor/vite-plugin"
import markdownItContainer from "markdown-it-container"
import markdownItAnchor from "markdown-it-anchor"

const calloutTypes = [
  { type: "NOTE", icon: "mdi:note-text", color: "#409eff" },
  { type: "TIP", icon: "mdi:lightbulb-on-outline", color: "#67c23a" },
  { type: "HINT", icon: "mdi:flashlight", color: "#42b983" },
  { type: "TLDR", icon: "mdi:book-open-page-variant", color: "#00bfa5" },
  { type: "ABSTRACT", icon: "mdi:clipboard-text-outline", color: "#9b59b6" },
  { type: "INFO", icon: "mdi:information-outline", color: "#268bd2" },
  { type: "SUCCESS", icon: "mdi:check-circle-outline", color: "#28a745" },
  { type: "WARNING", icon: "mdi:alert-outline", color: "#e6a23c" },
  { type: "DANGER", icon: "mdi:alert-octagon-outline", color: "#f56c6c" },
  { type: "ERROR", icon: "mdi:close-octagon-outline", color: "#d32f2f" },
  { type: "QUOTE", icon: "mdi:format-quote-open", color: "#999999" },
  { type: "CITE", icon: "mdi:format-quote-close", color: "#6a5acd" },
  { type: "FUN", icon: "mdi:party-popper", color: "#ff69b4" },
  { type: "EXAMPLE", icon: "mdi:test-tube", color: "#00acc1" },
  { type: "IMPORTANT", icon: "mdi:alert-decagram", color: "#ff5722" },
  { type: "FAQ", icon: "mdi:help-circle-outline", color: "#1e90ff" },
]

export default withMermaid(
  withSidebar(
    defineConfig({
      title: "BCA Notes",
      description: "Notes and resources for BCA students",
      ignoreDeadLinks: true,
      cleanUrls: true,
      lastUpdated: true,

      themeConfig: {
        nav: [
          { text: "Home", link: "/" },
          { text: "Syllabus", link: "/bca-syllabus" },
          { text: "Communication Skills", link: "/communication-skills/everyday_phrases" },
          { text: "Computer Science", link: "/computer-sci/c/u-1c" },
          { text: "English", link: "/english/chapter-01" },
        ],
        socialLinks: [
          { icon: "github", link: "https://github.com/pingforhelp/BCA" },
        ],
      },

      markdown: {
        anchor: { permalink: markdownItAnchor.permalink.headerLink() },
        toc: { level: [1, 2, 3] },

        config: (md) => {
          // 1️⃣ Callouts
          calloutTypes.forEach(({ type, icon, color }) => {
            md.use(markdownItContainer, type, {
              render(tokens, idx) {
                const token = tokens[idx]
                const info = token.info.trim().slice(type.length).trim()
                const title = info ? `<div class='callout-title'>${info}</div>` : ""
                if (token.nesting === 1) {
                  return `
                    <div class='vp-callout ${type}' style='--callout-color:${color}'>
                      <i class='iconify callout-icon' data-icon='${icon}'></i>
                      <div class='callout-body'>
                        ${title}
                  `
                } else {
                  return "</div></div>\n"
                }
              },
            })
          })

          // 2️⃣ Obsidian-style [!NOTE]
          md.core.ruler.after("inline", "obsidian-callouts", (state) => {
            state.tokens.forEach((token, i) => {
              if (
                token.type === "paragraph_open" &&
                state.tokens[i + 1] &&
                state.tokens[i + 1].content.startsWith("[!")
              ) {
                const match = state.tokens[i + 1].content.match(/\[!([A-Z0-9_-]+)\](.*)?/)
                if (match) {
                  const type = match[1].toUpperCase()
                  const title = match[2]?.trim()
                  state.tokens[i + 1].content = state.tokens[i + 1].content.replace(/\[![^\]]+\].*/, "")
                  token.tag = "div"
                  token.attrSet("class", `vp-callout ${type}`)
                  if (title) token.attrJoin("data-title", title)
                }
              }
            })
          })

          // 3️⃣ Highlight ==text==
          const highlightRE = /==(.*?)==/g
          const originalRender = md.renderer.rules.text || ((tokens, idx) => tokens[idx].content)
          md.renderer.rules.text = (tokens, idx, options, env, self) => {
            let text = tokens[idx].content
            if (highlightRE.test(text)) {
              text = text.replace(highlightRE, '<mark>$1</mark>')
            }
            return originalRender({ ...tokens, [idx]: { content: text } }, idx, options, env, self)
          }
        },
      },

      vite: {
        plugins: [
          vitepressPythonEditor(),
        ],
      },
    }),
    [
      {
        documentRootPath: "docs",
        scanStartPath: "docs",
        resolvePath: "/",
        collapsed: true,
      },
    ]
  )
)
