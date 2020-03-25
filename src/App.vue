<template>
  <div id="app">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Hi1>测试</Hi1>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Hi1 from '@/views/case-query/Hi1.vue'

export default {
  name: 'App',
  components: {
    Hi1
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
