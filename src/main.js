// import router from "@/router/router.js";

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from "@/router/router.js";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import Carousel from '@kagol/vue-carousel'
import '@kagol/vue-carousel/dist/style.css'

const pinia = createPinia()
const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.use(Carousel)

app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
