<template>
  <div id="app">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!--<Hi1>测试</Hi1>-->
    <command-system>测试</command-system>
  </div>
</template>

<script>
import Hi1 from '@/views/case-query/Hi1.vue'
import commandSystem from '@/views/command-system/commandSystem.vue'

export default {
  name: 'App',
  components: {
    commandSystem
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
