<template>
  <div class="hello">
      <p>{{msgFather}}</p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
    }
  },
  props:['msgFather']
}
</script>

<style scoped>

</style>