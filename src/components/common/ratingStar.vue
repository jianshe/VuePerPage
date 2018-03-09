 <template>
	<div class="rating_container">
        <section class="star_container">
            <i class="grey_fill icon iconfont icon-favor" v-for="num in 5" :key="num"></i>
        </section>
        <div :style="'width:' + rating*2/5 + 'rem'" class="star_overflow">
          <section class="star_container" >
            <i class="orange_fill icon iconfont icon-star" v-for="num in 5" :key="num"></i>
          </section>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  props: ["rating"]
};
</script>

<style lang="scss" scoped>
@import "../../style/mixin";
.rating_container {
  position: relative;
  top: 0.2rem;
  @include wh(2rem, 0.4rem);
  .star_overflow {
    overflow: hidden;
    position: relative;
    height: 100%;
  }
  .star_container {
    position: absolute;
    display: flex;
    width: 2rem;
    height: 0.4rem;
    top: -0.02rem;
    left: -0.02rem;
    .grey_fill {
      fill: #d1d1d1;
    }
    .iconfont{
      font-size: 0.4rem;
    }
    .orange_fill {
      fill: #ff9a0d;
    }
  }
}
</style>
