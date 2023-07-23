import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import elementPlus from './plugins/element-plus'
import "element-plus/dist/index.css";
import App from './App.vue'
import router from './router'
import { auth } from './firebase/firebase.js';

const app = createApp(App)
app.config.globalProperties.$auth = auth;
app.use(createPinia())
app.use(router)
app.use(elementPlus)
app.mount('#app')
