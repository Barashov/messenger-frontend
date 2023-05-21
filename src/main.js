import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ui from './ui'
import './assets/main.css'
const app = createApp(App)

for (let element of ui) {
    app.component(element.name, element)
}

app.use(router)
app.use(store)
app.mount('#app')
