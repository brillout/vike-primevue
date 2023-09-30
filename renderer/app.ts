import { createSSRApp, defineComponent, h } from 'vue'
import PageShell from './PageShell.vue'
import { setPageContext } from './usePageContext'
import type { Component, PageContext, PageProps } from './types'
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css";

export { createApp }

function createApp(Page: Component, pageProps: PageProps | undefined, pageContext: PageContext) {
  const PageWithLayout = defineComponent({
    render() {
      return h(
        PageShell,
        {},
        {
          default() {
            return h(Page, pageProps || {})
          }
        }
      )
    }
  })

  const app = createSSRApp(PageWithLayout)

  app.use(PrimeVue);

  // Make pageContext available from any Vue component
  setPageContext(app, pageContext)

  return app
}
