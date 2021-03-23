import './index.css'
import  './lib/gulubase.scss'
import './index.scss'

import { createApp } from 'vue'
import App from './App.vue'
import   'github-markdown-css'
import Markdown from './components/Markdown.vue'
const app=createApp(App)

import {router} from './router'

app.component('Markdown',Markdown)
app.use(router)
app.mount("#app")