<template>
  <div id="app">
    <child msg-father="dad无可奉告"></child>
  </div>
</template>

<script>
  import child from  '@/components/study/child'
  export default {
    name: 'app',
    components:{
      child
    }
  }
</script>
<!-- styling for the component -->
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>