<template>
    <div class="profile_page">
        <head-top go-back='true' :head-title="profiletitle"></head-top>
        <section>
            <section class="profile-number">
                <router-link :to="userInfo&&userInfo.user_id? '/profile/info' : '/login'" class="profile-link">
                    <img :src="imgBaseUrl + userInfo.avatar" class="privateImage" v-if="userInfo&&userInfo.user_id">
                    <span class="privateImage" v-else>
                       
                    </span>
                    <div class="user-info">
                        <p>{{userName}}</p>
                        <p>
                            <span class="user-icon">
                                <i class="icon iconfont iconuserfont icon-mobile"></i>
                            </span>
                            <span class="icon-mobile-number">{{mobile}}</span>
                        </p>
                    </div>
                    <span class="arrow">
                       <i class="icon iconfont iconuserfont icon-right"></i>
                    </span>
                </router-link>
            </section>
            <section class="info-data">
                <ul class="clear">
                    <router-link to="/balance" tag="li" class="info-data-link">
                        <span class="info-data-top"><b>{{parseInt(balance).toFixed(2)}}</b>元</span>
                        <span class="info-data-bottom">我的余额</span>
                    </router-link>
                    <router-link to="/benefit" tag="li" class="info-data-link">
                        <span class="info-data-top"><b>{{count}}</b>个</span>
                        <span class="info-data-bottom">我的优惠</span>
                    </router-link>
                    <router-link to="/points" tag="li" class="info-data-link">
                        <span class="info-data-top"><b>{{pointNumber}}</b>分</span>
                        <span class="info-data-bottom">我的积分</span>
                    </router-link>
                </ul>
            </section>
            <section class="profile-1reTe">
                <!-- 服务中心 -->
                <router-link to='/service' class="myorder">
                    <aside>
                       <router-link to="/service"><i class="icon iconfont iconuserfont icon-service" ></i></router-link>
                    </aside>
                    <div class="myorder-div">
                        <span>服务中心</span>
                        <span class="myorder-divsvg">
                            <i class="icon iconfont iconuserfont icon-right"></i>
                        </span>
                    </div>
                </router-link>
                <!-- 下载饿了么APP -->
                <router-link to='/download' class="myorder">
                    <aside>
                        <router-link to="/download"><i class="icon iconfont iconuserfont icon-down" ></i></router-link>
                    </aside>
                    <div class="myorder-div" style="border-bottom:0;">
                        <span>下载饿了么APP</span>
                        <span class="myorder-divsvg">
                           <i class="icon iconfont iconuserfont icon-right"></i>
                        </span>
                    </div>
                </router-link>
            </section>
        </section>
        <foot-guide></foot-guide>
        <transition name="router-slid" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import headTop from "@/components/header/head";
import footGuide from "@/components/footer/footGuide";
import { mapState, mapMutations } from "vuex";
import { imgBaseUrl } from "@/config/env";
import { getImgPath } from "@/components/common/mixin";

export default {
  data() {
    return {
      profiletitle: "我的",
      resetname: "",
      mobile: "暂无绑定手机号", //电话号码
      balance: 0, //我的余额
      count: 0, //优惠券个数
      pointNumber: 0, //积分数
      avatar: "", //头像地址
      imgBaseUrl
    };
  },
  mounted() {
    this.initData();
  },
  mixins: [getImgPath],
  components: {
    headTop,
    footGuide
  },

  computed: {
    ...mapState(["userInfo", "userName"]),
    //后台会返回两种头像地址格式，分别处理
    imgpath: function() {
      let path;
      if (this.avatar.indexOf("/") !== -1) {
        path = imgBaseUrl + this.avatar;
      } else {
        path = this.getImgPath(this.avatar);
      }
      this.SAVE_AVANDER(path);
      return path;
    }
  },

  methods: {
    ...mapMutations(["SAVE_AVANDER"]),
    initData() {
      if (this.userInfo && this.userInfo.user_id) {
        this.avatar = this.userInfo.avatar;
        this.username = this.userInfo.username;
        this.mobile = this.userInfo.mobile || "暂无绑定手机号";
        this.balance = this.userInfo.balance;
        this.count = this.userInfo.gift_amount;
        this.pointNumber = this.userInfo.point;
      } else {
        this.username = "登录/注册";
        this.mobile = "暂无绑定手机号";
      }
    }
  },
  watch: {
    userInfo: function(value) {
      this.initData();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "src/style/mixin";

.profile_page {
  p,
  span {
    font-family: Helvetica Neue, Tahoma, Arial;
  }
}
.profile-number {
  padding-top: 1.95rem;
  .profile-link {
    display: block;
    display: flex;
    box-align: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: $blue;
    padding: 0.666667rem 0.6rem;
    .privateImage {
      display: inline-block;
      @include wh(2.5rem,2.5rem);
      border-radius: 50%;
      vertical-align: middle;
      .privateImage-svg {
        background: $fc;
        border-radius: 50%;
        @include wh(2.5rem,2.5rem);
      }
    }
    .user-info {
      margin-left: 0.48rem;
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      p {
        font-weight: 700;
        @include sc(0.8rem,$fc);
        .user-icon {
          @include wh(0.5rem,0.75rem);
          display: inline-block;
          vertical-align: middle;
          line-height: 0.75rem;
          .icon-mobile {
            @include wh(100%,100%);
          }
        }
        .icon-mobile-number {
          display: inline-block;
          @include sc(0.57333rem,$fc);
        }
      }
    }
    .arrow {
      @include wh(0.46667rem,0.98rem);
      display: inline-block;
      svg {
        @include wh(100%,100%);
      }
    }
  }
}
.info-data {
  width: 100%;
  background: $fc;
  box-sizing: border-box;
  ul {
    .info-data-link {
      float: left;
      width: 33.33%;
      display: inline-block;
      border-right: 1px solid #f1f1f1;
      span {
        display: block;
        width: 100%;
        text-align: center;
      }
      .info-data-top {
        @include sc(0.55rem,#333);
        padding: 0.853333rem 0 0.453333rem;
        b {
          display: inline-block;
          @include sc(1.2rem,#f90);
          font-weight: 700;
          line-height: 1rem;
          font-family: Helvetica Neue, Tahoma;
        }
      }
      .info-data-bottom {
        @include sc(0.57333rem,#666);
        font-weight: 400;
        padding-bottom: 0.453333rem;
      }
    }
    .info-data-link:nth-of-type(2) {
      .info-data-top {
        b {
          color: #ff5f3e;
        }
      }
    }
    .info-data-link:nth-of-type(3) {
      border: 0;
      .info-data-top {
        b {
          color: #6ac20b;
        }
      }
    }
  }
}
.profile-1reTe {
  margin-top: 0.4rem;
  background: $fc;
  .myorder {
    padding-left: 1.6rem;
    display: flex;
    align-items: center;
    aside {
      @include wh(0.7rem,0.7rem);
      margin-left: -0.866667rem;
      margin-right: 0.266667rem;
      display: flex;
      align-items: center;
      svg {
        @include wh(100%,100%);
      }
    }
    .myorder-div {
      width: 100%;
      border-bottom: 1px solid #f1f1f1;
      padding: 0.433333rem 0.266667rem 0.433333rem 0;
      @include sc(0.7rem,#333);
      display: flex;
      justify-content: space-between;
      span {
        display: block;
      }
      .myorder-divsvg {
        @include wh(0.46667rem,0.466667rem);
        svg {
          @include wh(100%,100%);
        }
      }
    }
  }
  .myorder:nth-of-type(3) .myorder-div {
    border: 0;
  }
}
.router-slid-enter-active,
.router-slid-leave-active {
  transition: all 0.4s;
}
.router-slid-enter,
.router-slid-leave-active {
  transform: translate3d(2rem, 0, 0);
  opacity: 0;
}
</style>
