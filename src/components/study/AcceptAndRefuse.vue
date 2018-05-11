<template>
<div>
  <input type="text" v-model="inputValue" @keypress.enter="enter">
    <p>{{message}}</p>
</div>
</template>

<script>
export default {
  data: function () {
    return {
      inputValue: ''  
    }
  },
  props:['message'],
  methods: {
    enter () {
      this.$emit("showCityName", this.inputValue) 
      //子组件发射自定义事件sendiptVal 并携带要传递给父组件的值，
      // 如果要传递给父组件很多值，这些值要作为参数依次列出 如 this.$emit('valueUp', this.inputValue, this.mesFather); 
    }
  }
}
</script>
