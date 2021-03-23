<template>
    <div class="gulu-tabs">
    <div class="gulu-tabs-nav" ref="container">
    <div class="gulu-tabs-nav-item" 
      v-for="(t,index) in titles"
     :key="index"
     @click="selectEvent(t)"
     :class="{selected:t===selected}"
     :ref="el => {  if(selected===t) selectedItems= el }"
     >{{t}}
   
     </div>
     <div ref="indicator" class="gulu-tabs-nav-indicator"></div>
  </div>

  <div class="gulu-tabs-content">
   
    <component class="gulu-tabs-content-item" 
    
     :is="current" 
     :key="current.props.title"
    
      />
   
  </div>
      
    </div>
</template>

<script lang="ts">
    import tab from './tab.vue'
    import {onUpdated,onMounted, ref,  watchEffect,computed} from 'vue'
export default {
    props:{
        title:{
            type:String,
          
        },
        selected:{
            type:String,

        }
    },
    setup (props,context) {
        const result=context.slots.default()
        // 忘了 怎么设置泛型
        const indicator=ref<HTMLDivElement>(null)
        const container=ref<HTMLDivElement>(null)
        const selectedItems=ref<HTMLDivElement>(null)
        function  selectEvent(t){
            
            context.emit('update:selected',t)
          
        }
        result.forEach((item)=>{
            if(item.type!==tab)
            throw new Error('类型错误,请使用tab组件')
        })
        const current=computed(()=>{
            return  result.find(tag=>tag.props.title===props.selected)
        })
        const titles=result.map((item)=>{
             return   item.props.title
        })
       const tabstoggle=()=>{

        const width=selectedItems.value.getBoundingClientRect().width
        indicator.value.style.width=width+'px'
        const {left:left1}=container.value.getBoundingClientRect()
        const {left:left2}=selectedItems.value.getBoundingClientRect()
  
        const left=left2-left1
        console.log('我是left2',left2)
        console.log('我是left1',left1)
        indicator.value.style.left=left+'px'
        }
      onMounted(()=>{
       tabstoggle()
      });
      onUpdated(()=>{
        tabstoggle()
      })
     
          // 只在第一次渲染的时候执行
      
       
        return {onMounted,tabstoggle,onUpdated,current,container,indicator,selectEvent,result,titles,selectedItems}
    },
   
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gulu-tabs {
  &-nav {
    display: flex;
   
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
     
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
    }
  }
  &-content {
    padding: 8px 0;
  }
}

</style>