import {createWebHashHistory, createRouter} from 'vue-router'
import home from './views/home.vue'
import Doc from './views/doc.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
const history = createWebHashHistory()
import TabsDemo from './components/TabsDemo.vue'
import select from './components/select.vue'
import Docdemo from './components/docDemo.vue'
import { h } from '@vue/runtime-core'
import Markdown from './components/Markdown.vue'
import intro from './markdown/intro.md'
import getStarted from './markdown/getStarted.md'
import install from './markdown/install.md'
const md=string=>h(Markdown,{content:string,key:string})
export const router = createRouter({
  history: history,
  routes: [
    {path: '', component:home},
    {path: '/doc', component: Doc,
      children:[
    {path:'/intro',component:md(intro)},
    {path:'/getStarted',component:md(getStarted)},
    {path:'/install',component:md(install)},
   {path:'/doc/Button',component:ButtonDemo},
   { path: "/doc/switch", component:SwitchDemo  },
   { path: "/doc/select", component:select  },
   { path: "/doc/dialog", component: DialogDemo },
   { path: "/doc/tabs", component: TabsDemo },]
  
  },
    
  ]
})