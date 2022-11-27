import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'uno.css'
import '@unocss/reset/tailwind.css';
import { VueDraggableNext } from 'vue-draggable-next'

const app = createApp(App)

app
// component('draggable', VueDraggableNext)
.mount('#app')
