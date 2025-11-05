
import { withMermaid } from "vitepress-plugin-mermaid"
import { withSidebar } from "vitepress-sidebar"
import { vitepressPythonEditor } from "vitepress-python-editor/vite-plugin"
import { defineConfig } from "vite"

const basePaths = ["docs"]

function genSidebarConfig(doc) {
  return {
    documentRootPath: "docs",
    scanStartPath: doc,
    resolvePath: `/${doc}/`,
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
}

const vitePressSidebarOptions = basePaths.map(path => genSidebarConfig(path))

const mermaidConfig = withSidebar({
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
  },
  markdown: {
    math: true
  },
  mermaid: {},
  mermaidPlugin: {
    class: "mermaid my-class"
  }
})

export default withMermaid(mermaidConfig)
