import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import markdownItMark from "markdown-it-mark";
import markdownItIns from "markdown-it-ins";

// -----------------------------------------------------
// Obsidian Callouts
// -----------------------------------------------------
function obsidianCallouts(md) {
  const regex = /^\[!(\w+)\]([+-])?\s*(.*)$/;

  const MAP = {
    hint: "tip",
    important: "tip",
    check: "success",
    done: "success",
    help: "question",
    faq: "question",
    caution: "warning",
    attention: "warning",
    error: "danger",
    fail: "failure",
    missing: "failure",
    cite: "quote"
  };

  md.block.ruler.before("blockquote", "obs-callout", function (state, startLine, endLine, silent) {
    const start = state.bMarks[startLine] + state.tShift[startLine];
    const max = state.eMarks[startLine];
    if (state.src.charCodeAt(start) !== 0x3e) return false;

    const inner = state.src.slice(start + 1, max).trim();
    const match = inner.match(regex);
    if (!match) return false;
    if (silent) return true;

    let type = match[1].toLowerCase();
    const foldable = match[2];
    const title = match[3] || type.charAt(0).toUpperCase() + type.slice(1);

    if (MAP[type]) type = MAP[type];

    const isFoldable = foldable === "+" || foldable === "-";
    const isCollapsed = foldable === "-";

    const open = state.push("html_block", "", 0);
    open.content = `
<div class="callout callout-${type}${isFoldable ? " is-collapsible" : ""}${isCollapsed ? " is-collapsed" : ""}" data-callout="${type}">
  <div class="callout-title">
    <div class="callout-icon"></div>
    <div class="callout-title-inner">${title}</div>
    ${isFoldable ? '<div class="callout-fold"></div>' : ""}
  </div>
  <div class="callout-content">`;

    let next = startLine + 1;
    while (next < endLine) {
      const s = state.bMarks[next] + state.tShift[next];
      const e = state.eMarks[next];
      if (state.src.charCodeAt(s) !== 0x3e) break;
      open.content += state.src.slice(s + 1, e) + "\n";
      next++;
    }

    const close = state.push("html_block", "", 0);
    close.content = "</div></div>";

    state.line = next;
    return true;
  });
}

// -----------------------------------------------------
// EXPORT CONFIG WITH MERMAID
// -----------------------------------------------------
export default withMermaid(
  defineConfig({
    title: "BCA Notes",
    description: "Bachelor of Computer Application Notes",

    head: [
      ["script", { src: "https://code.iconify.design/3/3.1.0/iconify.min.js" }]
    ],

    markdown: {
      config(md) {
        md.use(markdownItMark);
        md.use(markdownItIns);
        md.use(obsidianCallouts);
      }
    },

    mermaid: {
      theme: "default"
    },

    themeConfig: {
      siteTitle: "BCA Notes",

      nav: [
        { text: "Home", link: "/" },
        { text: "Syllabus", link: "/bca-syllabus" }
      ],

      socialLinks: [
        { icon: "github", link: "https://github.com/pingforhelp/BCA" },
        { icon: "linkedin", link: "https://linkedin.com/in/tamimtasira" },
        { icon: "twitter", link: "https://x.com/Tamim_056" }
  

  ]

      search: { provider: "local" },

      footer: {
        message: "© 2025-2026 Notes.Tamim’s.Space / BCA.tamimtasira.in"
      }
    }
  })
);

// To Do

