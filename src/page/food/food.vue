<template>
    <div class="food_container">
    	<head-top :head-title="headTitle" goBack="true"></head-top>
		  	<section class="sort_container">
    		<div class="sort_item">
    			<div class="sort_item_container">
    				<div class="sort_item_border">
						<span :class="{category_title : sortBy == 'food'}">{{foodTitle}}</span>
						<i class="icon iconfont icon-triangledownfill"></i>
    				</div>
    			</div>
    		</div>
			<div class="sort_item">
    			<div class="sort_item_container">
    				<div class="sort_item_border">
						<span :class="{category_title: sortBy == 'sort'}">排序</span>
						<i class="icon iconfont icon-triangledownfill"></i>
    				</div>
    			</div>
    		</div>
			<div class="sort_item">
    			<div class="sort_item_container">
    				<div class="sort_item_border">
						<span :class="{category_title: sortBy == 'activity'}">筛选</span>
						<i class="icon iconfont icon-triangledownfill"></i>
    				</div>
    			</div>
    		</div>
    	</section>
    	<section class="shop_list_container">
	    	<shop-list :geohash="geohash" :restaurantCategoryId="restaurant_category_id" :restaurantCategoryIds="restaurant_category_ids" :sortByType='sortByType' :deliveryMode="delivery_mode" :confirmSelect="confirmStatus" :supportIds="support_ids" v-if="latitude"></shop-list>
    	</section>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import headTop from "@/components/header/head";
import shopList from "@/components/common/shoplist";
import { getImgPath } from "@/components/common/mixin";
import { msiteAddress } from "@/service/getData";
export default {
  data() {
    return {
      geohash: "", //city页面传递过来的地址geohash
      headTitle: "", //msite页面头部标题
      foodTitle: "", //排序左侧头部标题
      restaurant_category_id: "", //食品类型id值
      restaurant_category_ids: "", //筛选类型的id
      sortBy: "", //筛选条件
      category: null, //category分类左侧数据
      categoryDetail: null, //category分类右侧的详细数据
      sortByType: null, //根据何种方式排序
      Delivery: null, //配送方式数据
      Activity: null, //商家支持活动数据
      delivery_mode: null, //选中的配送方式
      support_ids: [], //选中的商铺活动列表
      filterNum: 0, //所选中的所有样式的集合
      confirmStatus: false //确认选择
    };
  },
  created() {
    this.initData();
  },
  mixins: [getImgPath],
  components: {
    headTop,
    shopList
  },
  computed: {
    ...mapState(["latitude", "longitude"])
  },
  methods: {
    ...mapMutations(["RECORD_ADDRESS"]),
    //初始化获取数据
    async initData() {
      //获取从msite页面传递过来的参数
      this.geohash = this.$route.query.geohash;
      this.headTitle = this.$route.query.title;
      this.foodTitle = this.headTitle;
      this.restaurant_category_id = this.$route.query.restaurant_category_id;
      //防止刷新页面时，vuex状态丢失，经度纬度需要重新获取，并存入vuex
      if (!this.latitude) {
        //获取位置信息
        let res = await msiteAddress(this.geohash);
        //记录当前经度纬度进入vuex
        this.RECORD_ADDRESS(res);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "src/style/mixin";
.food_container {
  padding-top: 3.6rem;
}
.iconfont{
	font-size: 0.05rem;
}
.sort_container {
  background-color: #fff;
  border-bottom: 0.025rem solid #f1f1f1;
  position: fixed;
  top: 1.95rem;
  right: 0;
  width: 100%;
  display: flex;
  z-index: 13;
  box-sizing: border-box;
  .sort_item {
    @include sc(0.55rem, #444);
    @include wh(33.3%, 1.6rem);
    text-align: center;
    line-height: 1rem;
    .sort_item_container {
      @include wh(100%, 100%);
      position: relative;
      z-index: 14;
      background-color: #fff;
      box-sizing: border-box;
      padding-top: 0.3rem;
      .sort_item_border {
        height: 1rem;
        border-right: 0.025rem solid $bc;
      }
    }
    .sort_icon {
      vertical-align: middle;
      transition: all 0.3s;
      fill: #666;
    }
  }
  .choose_type {
    .sort_item_container {
      .category_title {
        color: $blue;
      }
      .sort_icon {
        transform: rotate(180deg);
        fill: $blue;
      }
    }
  }
  .showlist-enter-active,
  .showlist-leave-active {
    transition: all 0.3s;
    transform: translateY(0);
  }
  .showlist-enter,
  .showlist-leave-active {
    opacity: 0;
    transform: translateY(-100%);
  }
  .sort_detail_type {
    width: 100%;
    position: absolute;
    display: flex;
    top: 1.6rem;
    left: 0;
    border-top: 0.025rem solid $bc;
    background-color: #fff;
  }
  .category_container {
    .category_left {
      flex: 1;
      background-color: #f1f1f1;
      height: 16rem;
      overflow-y: auto;
      span {
        @include sc(0.5rem, #666);
        line-height: 1.8rem;
      }
      .category_left_li {
        @include fj;
        padding: 0 0.5rem;
        .category_icon {
          @include wh(0.8rem, 0.8rem);
          vertical-align: middle;
          margin-right: 0.2rem;
        }
        .category_count {
          background-color: #ccc;
          @include sc(0.4rem, #fff);
          padding: 0 0.1rem;
          border: 0.025rem solid #ccc;
          border-radius: 0.8rem;
          vertical-align: middle;
          margin-right: 0.25rem;
        }
        .category_arrow {
          vertical-align: middle;
        }
      }
      .category_active {
        background-color: #fff;
      }
    }
    .category_right {
      flex: 1;
      background-color: #fff;
      padding-left: 0.5rem;
      height: 16rem;
      overflow-y: auto;
      .category_right_li {
        @include fj;
        height: 1.8rem;
        line-height: 1.8rem;
        padding-right: 0.5rem;
        border-bottom: 0.025rem solid $bc;
        span {
          color: #666;
        }
      }
      .category_right_choosed {
        span {
          color: $blue;
        }
      }
    }
  }
  .sort_list_container {
    width: 100%;
    .sort_list_li {
      height: 2.5rem;
      display: flex;
      align-items: center;
      svg {
        @include wh(0.7rem, 0.7rem);
        margin: 0 0.3rem 0 0.8rem;
      }
      p {
        line-height: 2.5rem;
        flex: auto;
        text-align: left;
        text-indent: 0.25rem;
        border-bottom: 0.025rem solid $bc;
        @include fj;
        align-items: center;
        span {
          color: #666;
        }
      }
      .sort_select {
        span {
          color: $blue;
        }
      }
    }
  }
  .filter_container {
    flex-direction: column;
    align-items: flex-start;
    min-height: 10.6rem;
    background-color: #f1f1f1;
    .filter_header_style {
      @include sc(0.4rem, #333);
      line-height: 1.5rem;
      height: 1.5rem;
      text-align: left;
      padding-left: 0.5rem;
      background-color: #fff;
    }
    .filter_ul {
      display: flex;
      flex-wrap: wrap;
      padding: 0 0.5rem;
      background-color: #fff;
      .filter_li {
        display: flex;
        align-items: center;
        border: 0.025rem solid #eee;
        @include wh(4.7rem, 1.4rem);
        margin-right: 0.25rem;
        border-radius: 0.125rem;
        padding: 0 0.25rem;
        margin-bottom: 0.25rem;
        svg {
          @include wh(0.8rem, 0.8rem);
          margin-right: 0.125rem;
        }
        span {
          @include sc(0.4rem, #333);
        }
        .filter_icon {
          @include wh(0.8rem, 0.8rem);
          font-size: 0.5rem;
          border: 0.025rem solid $bc;
          border-radius: 0.15rem;
          margin-right: 0.25rem;
          line-height: 0.8rem;
          text-align: center;
        }
        .activity_svg {
          margin-right: 0.25rem;
        }
        .selected_filter {
          color: $blue;
        }
      }
    }
    .confirm_filter {
      display: flex;
      background-color: #f1f1f1;
      width: 100%;
      padding: 0.3rem 0.2rem;
      .filter_button_style {
        @include wh(50%, 1.8rem);
        font-size: 0.8rem;
        line-height: 1.8rem;
        border-radius: 0.2rem;
      }
      .clear_all {
        background-color: #fff;
        margin-right: 0.5rem;
        border: 0.025rem solid #fff;
      }
      .confirm_select {
        background-color: #56d176;
        color: #fff;
        border: 0.025rem solid #56d176;
        span {
          color: #fff;
        }
      }
    }
  }
}
.showcover-enter-active,
.showcover-leave-active {
  transition: opacity 0.3s;
}
.showcover-enter,
.showcover-leave-active {
  opacity: 0;
}
.back_cover {
  position: fixed;
  @include wh(100%, 100%);
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
