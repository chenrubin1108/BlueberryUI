<demo>
常规用法
</demo>
<template>
<switchCom v-model:value="bool"  />
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