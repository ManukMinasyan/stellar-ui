import DefaultTheme from 'vitepress/theme'
import DemoContainer from '../components/DemoContainer.vue'
import Placeholder from '../components/Placeholder.vue'
import MyLib from 'stellar-ui'

import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(MyLib)
    app.component('DemoContainer', DemoContainer)
    app.component('Placeholder', Placeholder)
  }
}
