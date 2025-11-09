import DefaultTheme from 'vitepress/theme'
import './custom.css'
import '@iconify/iconify'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // optional: leave empty for now
  }
}
