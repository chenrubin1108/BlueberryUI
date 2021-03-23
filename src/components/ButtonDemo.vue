<template>
    <div class="test">
            button.vue

        <button-com
        @click="clickEvent"
        @focus="clickEvent"
        @mouseover="clickEvent"
       
        >你好</button-com>
        <div>
            <h2>theme示例</h2>
            <button-com>默认</button-com>
        <button-com theme="button">你好</button-com>
        <button-com theme="link">你好</button-com>
        <button-com theme="text">你好</button-com>
        </div>
        <div>
            <h2>禁用示例</h2>
            <button-com disabled>你好</button-com>
            <button-com >你好</button-com>
         
        </div>
        <div>
            <h2>level示例</h2>
             <button-com >你好</button-com>
            <button-com level="main">你好</button-com>
            <button-com level="danger">你好啊</button-com>
        </div>
         <div>
            <h2>size示例</h2>
             <button-com size="big">你好</button-com>
             <button-com >你好</button-com>
            <button-com size="small">你好</button-com>
           
        </div>
          <div>
            <h2>loading示例</h2>
             <button-com loading>你好</button-com>
             <button-com >你好</button-com>
            
           
        </div>

    </div>
</template>

<script lang="ts">
import buttonVue from '../lib/button.vue'
export default {
    components: { buttonCom:buttonVue },
    setup () {
            const clickEvent=()=>{
                    console.log('hi')
            }

        return {clickEvent}
    }
}
</script>

<style lang="scss" scoped>
.test {
    border: 1px solid red;
}
</style>