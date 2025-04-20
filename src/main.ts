import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import './style.css'
import "@/assets/reset.css";
import App from './App.vue'
import router from './router'
// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// App.use(router)
createApp(App)
  .use(router)
  // .use(ElementPlus)
  .mount('#app')
// const app = createApp(App)

// app.use(createPinia())
// app.use(router)
// app.mount('#app')
