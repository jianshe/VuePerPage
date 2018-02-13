<!-- prop双向绑定妥帖的解决方案-->
<template>
  <div id="example">
    <parent></parent>
  </div>
</template>
<script>
var childNode = {
  template: `
  <div class="child">
    <div>
      <span>子组件数据</span>
      <input v-model="temp">
    </div>
    <p>{{temp}}</p>
  </div>
  `,
  props:['childMsg'],
  data(){
    return{
      temp:this.childMsg
    }
  },
  watch:{
    childMsg(){
      this.temp = this.childMsg
    }
  }
};
var parentNode = {
  template: `
  <div class="parent">
    <div>
      <span>父组件数据</span>
      <input v-model="msg">
    </div>
    <p>{{msg}}</p>
    <child :child-msg="msg"></child>
  </div>
  `,
  components: {
    'child': childNode
  },
  data(){
    return {
      'msg':'match'
    }
  }
};
export default {
  components: {
    parent: parentNode
  }
};
</script>

<style lang="scss" scoped>

</style>