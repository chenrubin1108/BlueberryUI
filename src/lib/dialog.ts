import { createApp, h } from 'vue'
import dialog from './dialog.vue'

function lineCodeDialog(options) {
    const {title,content,ok,Overlayclose}=options
    const close=()=>{
        App.unmount()
        div.remove()
    }
    const App=createApp(
        {
            render() {
                return h(dialog, 
                {  visable:
                    {
                    type:Boolean,
                    default:true
                   },
                'onUpdate:visable':(value)=>{
                    if(value===false){
                        close()
                    }
                    
                },ok,Overlayclose
                }, {title,content})
        }
})
    let div=document.createElement("div")
    div.className="container"
    document.body.appendChild(div)
    App.mount(div)


}


export {lineCodeDialog}
