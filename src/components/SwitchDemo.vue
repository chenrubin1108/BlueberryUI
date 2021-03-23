<template>
  <div>        
        <Demo :components="switchDemo1"></Demo>
        <Demo :components="switchDemo2"></Demo>
</div>
</template>

<script lang="ts">
import Button from '../lib/button.vue'
import switchDemo1 from './SwitchDemo1.vue'
import switchDemo2 from './SwitchDemo2.vue'
import Demo from './Demo.vue'
import   'prismjs';
import   '../../node_modules/prismjs/themes/prism.css';
const Prism = (window as any).Prism
console.log()
import {
  ref
} from 'vue'
export default {
    components: { 
        Button:Button,
        Demo:Demo
    },
    setup () {
        const bool=ref(false)
        return {bool,switchDemo1,switchDemo2,Prism}
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