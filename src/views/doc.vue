<template>
  <div class="layout">
    <Topnav  :topnaVisable="true" class="nav" />
    <div class="content" >
      <aside  v-if="menuVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/install">安装</router-link>
          </li>
          <li>
            <router-link to="/getStarted">开始</router-link>
          </li>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";
import topnavVue from '../components/topnav.vue'

export default {
  components: { Topnav:topnavVue },
   
  setup() {
  
    const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
    return { menuVisible };
  },
};
 

</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0; 
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    // background: lightgreen;
  }
}
aside {
  z-index: 1;
  background: lightblue;
  width: 150px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li{
      >a {
    
        display: block;
       padding: 4px 0;
  
    }
    }
    
  }
}
main {
  overflow: auto;
}
.routerLink {
 
  display: block;
}
.routerLink:link {
 text-decoration: none;
}
 .router-link-active {
       background-color: white;
     }
</style>
