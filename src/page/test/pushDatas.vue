<!-- prop双向绑定妥帖的解决方案-->
<template>
  <div id="example">
    {{checkboxData}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkboxData: []
    };
  },
  mounted: function() {
    let arrs = ["111", "222", "333"];
    for (let i in arrs) {
      let data = {
        id: 1,
        value: arrs[i]
      };
      this.checkboxData.push(data);
    }
  }
};
</script>

<style lang="scss" scoped>

</style>