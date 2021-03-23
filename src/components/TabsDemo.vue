<template>
    <div>
        TabsDemo
        <!-- v-model:selected="x" -->    
        <tabs  :selected="x" @update:selected="x=$event" >
         
            <tab title="标题1234">
                <p>组件1 </p>
            </tab>
            <tab title="标题2">组件2</tab>
        </tabs>
        
    </div>
</template>

<script lang="ts">
import tabVue from '../lib/tab.vue'
import TabsVue from '../lib/Tabs.vue'
import {onUpdated, ref} from 'vue'
    export default {
    components:{
        Tabs:TabsVue,
        tab:tabVue
    } ,      
    setup() {
        // 不能写死 只能是title中的一个
        let x=ref('标题1234')
   
    onUpdated(()=>{
        console.log(x,'h111ah')
    })
    return{x}

   },
   
    }
</script>

<style lang="scss" scoped>

</style>