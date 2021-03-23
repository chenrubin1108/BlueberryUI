<template>
  <div class="topnav">
    <router-link to="/" class="logo">
  <svg class="icon" >
    <use xlink:href="#icon-blueberr"></use>
  </svg>
    </router-link>
    <ul class="menu">
        <router-link to="/doc">文档</router-link>   
    </ul>

    <svg style="z-index:20;" v-if="topnaVisable" @click="toggleMenu"  class="toggleAside" >
    <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>
<script lang="ts">
import { inject, Ref} from "vue";
export default {
   props:{
      topnaVisable:{
        type:Boolean,
        default:false
      }
    },


  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
    const toggleMenu = () => {
      const width = document.documentElement.clientWidth;
   
          if(width<=500){
                
      menuVisible.value = !menuVisible.value;
          }
    
    };
    return { toggleMenu};
  },
};
</script>
<style lang="scss" scoped>
.toggleAside svg{
  width: 32px;
  height: 32px;
}
.topnav {
  
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
      .icon{
        width: 32px;
        height: 32px;
      }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    width: 24px;
    height: 24px;
    position: absolute;
    z-index: 10;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>