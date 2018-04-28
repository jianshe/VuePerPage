 <template>
   <div>
        <section v-if="!showLoading" class="shop_container">


            <nav class="goback" @click="goback">
                <i class="icon iconfont white icon-back"></i>
            </nav>
              <header class="shop_detail_header" ref="shopheader" :style="{zIndex: showActivities? '14':'10'}">
                <img :src="imgBaseUrl + shopDetailData.image_path" class="header_cover_img">
                <section class="description_header">
                    <div class="description_top">
                        <section class="description_left">
                            <img :src="imgBaseUrl + shopDetailData.image_path">
                        </section>
                        <section class="description_right">
                            <h4 class="description_title ellipsis">{{shopDetailData.name}}</h4>
                            <p class="description_text">商家配送／{{shopDetailData.float_delivery_fee}}分钟送达／配送费¥{{shopDetailData.float_delivery_fee}}</p>
                        </section>
                    </div>

                </section>
            </header>
               <section class="change_show_type" ref="chooseType">
                <div>
                    <span :class='{activity_show: changeShowType =="food"}' @click="changeShowType='food'">商品</span>
                </div>
                <div>
                    <span :class='{activity_show: changeShowType =="rating"}' @click="changeShowType='rating'">评价</span>
                </div>
            </section>





            
        </section>

         <loading v-show="showLoading || loadRatings"></loading>
   </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import {
  msiteAddress,
  shopDetails,
  foodMenu,
  getRatingList,
  ratingScores,
  ratingTags
} from "@/service/getData";
import loading from "@/components/common/loading";
import buyCart from "@/components/common/buyCart";
import ratingStar from "@/components/common/ratingStar";
import { loadMore, getImgPath } from "@/components/common/mixin";
import { imgBaseUrl } from "@/config/env";
import BScroll from "better-scroll";

export default {
  data() {
    return {
      geohash: "", //geohash位置信息
      shopId: null, //商店id值
      showLoading: true, //显示加载动画
      changeShowType: "food", //切换显示商品或者评价
      shopDetailData: null, //商铺详情
      showActivities: false, //是否显示活动详情
      menuList: [], //食品列表
      menuIndex: 0, //已选菜单索引值，默认为0
      menuIndexChange: true, //解决选中index时，scroll监听事件重复判断设置index的bug
      shopListTop: [], //商品列表的高度集合
      TitleDetailIndex: null, //点击展示列表头部详情
      categoryNum: [], //商品类型右上角已加入购物车的数量
      totalPrice: 0, //总共价格
      cartFoodList: [], //购物车商品列表
      showCartList: false, //显示购物车列表
      receiveInCart: false, //购物车组件下落的圆点是否到达目标位置
      ratingList: null, //评价列表
      ratingOffset: 0, //评价获取数据offset值
      ratingScoresData: null, //评价总体分数
      ratingTagsList: null, //评价分类列表
      ratingTageIndex: 0, //评价分类索引
      preventRepeatRequest: false, // 防止多次触发数据请求
      ratingTagName: "", //评论的类型
      loadRatings: false, //加载更多评论是显示加载组件
      foodScroll: null, //食品列表scroll
      showSpecs: false, //控制显示食品规格
      specsIndex: 0, //当前选中的规格索引值
      choosedFoods: null, //当前选中视频数据
      showDeleteTip: false, //多规格商品点击减按钮，弹出提示框
      showMoveDot: [], //控制下落的小圆点显示隐藏
      windowHeight: null, //屏幕的高度
      elLeft: 0, //当前点击加按钮在网页中的绝对top值
      elBottom: 0, //当前点击加按钮在网页中的绝对left值
      ratingScroll: null, //评论页Scroll
      imgBaseUrl
    };
  },
  created() {
    this.geohash = this.$route.query.geohash;
    this.shopId = this.$route.query.id;
    this.INIT_BUYCART();
  },
  mounted() {
    this.initData();
    this.windowHeight = window.innerHeight;
  },
  beforeDestroy() {},
  mixins: [loadMore, getImgPath],
  components: {
    loading,
    ratingStar,
    buyCart
  },
  computed: {
    ...mapState(["latitude", "longitude", "cartList"])
  },
  methods: {
    ...mapMutations([
      "RECORD_ADDRESS",
      "ADD_CART",
      "REDUCE_CART",
      "INIT_BUYCART",
      "CLEAR_CART",
      "RECORD_SHOPDETAIL"
    ]),
    //初始化时获取基本数据
    async initData() {
      if (!this.latitude) {
        //获取位置信息
        let res = await msiteAddress(this.geohash);
        // 记录当前经度纬度进入vuex
        this.RECORD_ADDRESS(res);
      }
      //获取商铺信息
      this.shopDetailData = await shopDetails(
        this.shopId,
        this.latitude,
        this.longitude
      );
      //获取商铺食品列表
      this.menuList = await foodMenu(this.shopId);
      //隐藏加载动画
      this.hideLoading();
    },
    //隐藏动画
    hideLoading() {
      this.showLoading = false;
    },
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "src/style/mixin";
.shop_container {
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  left: 0;
  height: 100%;
}
.goback {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 2rem;
  z-index: 11;
  padding-top: 0.2rem;
  padding-left: 0.2rem;
  .icon-back {
    position: absolute;
    top: 1.5rem;
    color: #ffffff;
  }
}
.shop_detail_header {
  overflow: hidden;
  position: relative;
  .header_cover_img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
    filter: blur(10px);
  }
  .description_header {
    position: relative;
    z-index: 10;
    background-color: rgba(119, 103, 137, 0.43);
    padding: 0.4rem 0 0.4rem 0.4rem;
    width: 100%;
    overflow: hidden;
    .description_top {
      display: flex;
      .description_left {
        margin-right: 0.3rem;
        img {
          @include wh(2.9rem, 2.9rem);
          display: block;
          border-radius: 0.15rem;
        }
      }
      .description_right {
        flex: 1;
        .description_title {
          @include sc(0.8rem, #fff);
          font-weight: bold;
          width: 100%;
          margin-bottom: 0.3rem;
        }
        .description_text {
          @include sc(0.5rem, #fff);
          margin-bottom: 0.3rem;
        }
        .description_promotion {
          @include sc(0.5rem, #fff);
          width: 11.5rem;
        }
      }
      .description_arrow {
        @include ct;
        right: 0.3rem;
        z-index: 11;
      }
    }
    .description_footer {
      @include fj;
      margin-top: 0.5rem;
      padding-right: 1rem;
      p {
        @include sc(0.5rem, #fff);
        span {
          color: #fff;
        }
        .tip_icon {
          padding: 0 0.04rem;
          border: 0.025rem solid #fff;
          border-radius: 0.1rem;
          font-size: 0.4rem;
          display: inline-block;
        }
      }
      .ellipsis {
        width: 84%;
      }
      .footer_arrow {
        @include wh(0.45rem, 0.45rem);
        position: absolute;
        right: 0.3rem;
      }
    }
  }
}
.change_show_type {
  display: flex;
  background-color: #fff;
  padding: 0.3rem 0 0.6rem;
  border-bottom: 1px solid #ebebeb;
  div {
    flex: 1;
    text-align: center;
    span {
      @include sc(0.65rem, #666);
      padding: 0.2rem 0.1rem;
      border-bottom: 0.12rem solid #fff;
    }
    .activity_show {
      color: #3190e8;
      border-color: #3190e8;
    }
  }
}
</style>
