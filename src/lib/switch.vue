<template>
  
      <button  class="gulu-switch" :class="{afterChecked:value==true}" @click="checkStatus"><span class="cicrle-span"></span></button>
  
</template>

<script>
export default {
     props: {
         value:{
             type:Boolean           
         },
        
     },
    setup (props,{emit}) {

 
    const   checkStatus=()=>{
        console.log(props.value)
           emit('update:value',props.value=!props.value)
        
        }  
    
       
        return {checkStatus}
    },
   
}
</script>

<style lang="scss" >
$h: 22px;
  $h2: $h - 4px;
  .gulu-switch{
    height: $h;
    width: $h*2;
    border: none;
    background: grey;
    border-radius: $h/2;
    position: relative;
  &:focus{
      outline: none;
  }  
  }
  
  .cicrle-span{
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background:white;
    border-radius: $h2 / 2;
    transition: 250ms;
  } 
  .afterChecked{
      background: blue;
    .cicrle-span {
      left: calc(100% - #{$h2} - 2px);
  }
  }
 
</style>