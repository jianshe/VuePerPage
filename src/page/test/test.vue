<template>

</template>
 
<script>
import { hi } from "@/components/common/mixin";
export default {
  mixins: [hi],
  mounted() {
    console.log("this Vue instance!");
  }
};
</script>
<style lang="scss" scoped>

</style>