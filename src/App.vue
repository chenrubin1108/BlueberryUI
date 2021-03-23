<template>
  
  <router-view />
</template>

<script>

import {ref,provide} from 'vue'


export default {
  name: 'App',
  data(){
  return {
    width:document.body.clientWidth
  }
},
watch: {
    width(val) {
      console.log(val)
      console.log('页面变化了宽度')
    }
},
 mounted () {
    // 监听窗口大小
    window.onresize = () => {
      return (() => {
       this.$router.go(0)
      })()
    }
  },
  setup(){
    const width = document.documentElement.clientWidth;
   
    const menuVisible = ref(width <= 500 ? false : true);
    provide("menuVisible",menuVisible)
  }
}
</script>
