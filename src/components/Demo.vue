<template>
   <div class="demo">
    <h2>{{components.__sourceCodeTitle}}</h2>
    <div class="demo-component">
     <component  :is='components'></component>
     
    </div>
    <div class="demo-actions">
      <Button   @click="visibleCodeEvent" >查看代码</Button>
    </div>
    <div v-if="visibleCode" class="demo-code">
      <pre v-html="html" ></pre>
    </div>
  </div>
</template>

<script lang="ts">
import   'prismjs';
import   '../../node_modules/prismjs/themes/prism.css';
import button from '../lib/button.vue'
const Prism = (window as any).Prism
import {computed, ref} from 'vue'
export default {
    components:{
        Button:button
    },
    props:{
        components:{
            type:Object
        }
    },
    setup (props) {
        const visibleCode=ref(true)
        const html=computed(()=>{
                return Prism.highlight(props.components.__sourceCode,Prism.languages.javascript,'html')
        })
        const visibleCodeEvent=()=>{
            console.log("visibleCodeEvent")
                visibleCode.value=!visibleCode.value
        }
        return {Prism,html,visibleCodeEvent,visibleCode}
    }
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    >pre {
        text-align: start;
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
  
</style> 