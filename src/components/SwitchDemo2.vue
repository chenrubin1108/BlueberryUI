<demo>
支持disabled
</demo>
<template>
  
       <switchCom disabled v-model:value="bool"  />
    
</template>

<script >
import switchComVue from '../lib/switch.vue'
import {ref} from 'vue'
export default {
    components: { 
        switchCom:switchComVue,
     
    },
    setup () {
        const bool=ref(false)
        return {bool}
    }
    
}
</script>