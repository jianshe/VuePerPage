<template>
    <section id='foot_guide'>
        <a @click = "gotoAddress({path: '/msite'})"  :class="$route.path.indexOf('msite') !== -1? 'guide_item active' : 'guide_item'">
            <i :class="$route.path.indexOf('msite') !== -1? 'icon iconfont icon-homefill' : 'icon iconfont icon-home'"></i>
            <span>主页</span>
        </a>
        <a @click = "gotoAddress({path: '/good'})"  :class="$route.path.indexOf('good') !== -1? 'guide_item active' : 'guide_item'">
        	<i :class="$route.path.indexOf('good') !== -1? 'icon iconfont icon-goodsnewfill' : 'icon iconfont icon-goodsnew'"></i>
            <span>商品</span>
        </a>
        <a @click = "gotoAddress({path: '/upstage'})"  :class="$route.path.indexOf('upstage') !== -1? 'guide_item active' : 'guide_item'">
        	<i :class="$route.path.indexOf('upstage') !== -1? 'icon iconfont icon-upstagefill' : 'icon iconfont icon-upstage'"></i>
            <span>口碑</span>
        </a>
        <a @click = "gotoAddress({path: '/profile'})"  :class="$route.path.indexOf('profile') !== -1? 'guide_item active' : 'guide_item'">
        	<i :class="$route.path.indexOf('profile') !== -1? 'icon iconfont icon-friendaddfill' : 'icon iconfont icon-friendadd'"></i>
            <span>用户</span>
        </a>
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
  .active{
    span{
      color: rgb(63, 58, 58);
    }
  }
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
</style>
