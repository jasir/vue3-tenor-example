import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router/router.js'
import { store } from './store/store.js'

import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

const app = createApp(App)


app.use(router)
app.use(store)


app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})
app.mount('#app')
