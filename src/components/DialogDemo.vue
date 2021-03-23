<template>
    <div>
     
        <button-com  @click="toggle" >toggle</button-com>
        <DialogCom  :ok="okclick"  v-model:visable="visable">
           <template v-slot:title>
                <strong>加粗的标题</strong>
           </template>
           <template v-slot:content>
                <p>内容</p>
                <h3>hh</h3>
           </template>
        </DialogCom>
        <div>
            <h2>示例2 一行代码引入</h2>
            <button-com @click="ImpDialog">toggle</button-com>
        </div>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import buttonVue from '../lib/button.vue'
import dialogVue from '../lib/dialog.vue'
import {lineCodeDialog}  from '../lib/dialog'
export default {
    components:{
        DialogCom:dialogVue,
        buttonCom:buttonVue
    },
setup () {
        const visable=ref(false)
        const toggle=()=>{
            visable.value=!visable.value
        }
       const okclick=()=>{
           return false
       }
       const ImpDialog=()=>{
           lineCodeDialog({title:'nihao',content:'fuck',ok(){
               console.log('ok')
           },Overlayclose:true})
       }
        return {ImpDialog,toggle,visable,okclick}
    }
}
</script>

<style lang="scss" scoped>

</style>