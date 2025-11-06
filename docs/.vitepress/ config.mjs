import { defineConfig } from "bca" // vitepress if breaks then type in `vitepress`
import { withSidebar } from "vitepress-sidebar"
import { withMermaid } from "vitepress-plugin-mermaid"
import { vitepressPythonEditor } from "vitepress-python-editor/vite-plugin"

export default withMermaid(
  withSidebar(
    defineConfig({
      title: "BCA Notes",
      description: "Notes and resources for BCA students",

      // ✅ this line ensures dead links never stop the build
      ignoreDeadLinks: true,

      cleanUrls: true,
      lastUpdated: true,

      themeConfig: {
        nav: [
          { text: "Home", link: "/" },
          { text: "Syllabus", link: "/bca-syllabus" },
          { text: "Communication Skills", link: "/communication-skills/everyday_phrases" },
          { text: "Computer Science", link: "/computer-sci/c/u-1c" },
          { text: "English", link: "/english/chapter-01" }
        ],
        socialLinks: [
          { icon: "github", link: "https://github.com/pingforhelp/BCA" }
        ]
      },

      vite: {
        plugins: [
          vitepressPythonEditor({ assetsDir: "docs/.vitepress/dist/assets" })
        ]
      }
    }),
    [
      {
        documentRootPath: "docs",
        scanStartPath: "docs",
        resolvePath: "/",
        collapsed: true
      }
    ]
  )
)
