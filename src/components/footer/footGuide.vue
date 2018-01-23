<template>
    <section id='foot_guide'>
        <section @click = "gotoAddress({path: '/home'})"  class="guide_item">
            <i :class="$route.path.indexOf('home') !== -1? 'icon iconfont icon-homefill' : 'icon iconfont icon-home'"></i>
            <span>主页</span>
        </section>
        <section @click = "gotoAddress({path: '/good'})"  class="guide_item">
        	<i :class="$route.path.indexOf('good') !== -1? 'icon iconfont icon-goodsnewfill' : 'icon iconfont icon-goodsnew'"></i>
            <span>商品</span>
        </section>
        <section @click = "gotoAddress({path: '/upstage'})"  class="guide_item">
        	<i :class="$route.path.indexOf('upstage') !== -1? 'icon iconfont icon-upstagefill' : 'icon iconfont icon-upstage'"></i>
            <span>口碑</span>
        </section>
        <section @click = "gotoAddress({path: '/friend'})"  class="guide_item">
        	<i :class="$route.path.indexOf('friend') !== -1? 'icon iconfont icon-friendaddfill' : 'icon iconfont icon-friendadd'"></i>
            <span>用户</span>
        </section>
    </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {
    gotoAddress(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/mixin";

#foot_guide {
  background-color: #fff;
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  @include wh(100%, 1.95rem);
  display: flex;
  box-shadow: 0 -0.026667rem 0.053333rem rgba(0, 0, 0, 0.1);
  padding-top: 0.2rem;
}
.guide_item {
  flex: 1;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  .icon_style {
    @include wh(0.8rem, 0.8rem);
    margin-top: 0.3rem;
    fill: #ccc;
  }
  span {
    @include sc(0.45rem, #666);
  }
}
.iconfont {
  font-size: 1rem;
}
</style>
