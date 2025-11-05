import { withMermaid } from "vitepress-plugin-mermaid"
import { withSidebar } from "vitepress-sidebar"
import { vitepressPythonEditor } from "vitepress-python-editor/vite-plugin"
import { defineConfig } from "vitepress"

const sidebarOptions = [
  {
    documentRootPath: "docs",
    scanStartPath: "docs",
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
      // ✅ Must be at the top level
      ignoreDeadLinks: true,
      cleanUrls: true,
      lastUpdated: true,

      title: "BCA Notes",
      description: "Notes and resources for BCA students",

      themeConfig: {
        nav: [
          { text: "Home", link: "/" },
          { text: "Syllabus", link: "/bca-syllabus" }
        ],
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
      mermaidPlugin: { class: "mermaid my-class" }
    }),
    sidebarOptions
  )
)
