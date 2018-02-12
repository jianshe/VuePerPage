import {
  RECORD_ADDRESS,
  RECORD_SHOPDETAIL,
  RECORD_USERINFO,
  GET_USERINFO,
  SAVE_GEOHASH,
  RETSET_NAME,
  OUT_LOGIN
} from './mutation-types.js'

import {
  setStore,
  getStore
} from '../config/mUtils'

export default {
  // 记录当前经度纬度
  [RECORD_ADDRESS](state, {
    latitude,
    longitude
  }) {
    state.latitude = latitude;
    state.longitude = longitude;
  },

  [RECORD_SHOPDETAIL](state, detail) {
    state.shopDetail = detail;
  },
  // 记录用户信息
  [RECORD_USERINFO](state, info) {
    state.userInfo = info;
    state.login = true;
    setStore('user_id', info.user_id);
  },
  //获取用户信息存入vuex
  [GET_USERINFO](state, info) {
    if (state.userInfo && (state.userInfo.username !== info.username)) {
      return;
    };
    if (!state.login) {
      return
    }
    if (!info.message) {
      state.userInfo = { ...info
      };
      state.userName = state.userInfo.username;
    } else {
      state.userInfo = null;
      state.userName = '';
    }
  },
  //保存geohash
  [SAVE_GEOHASH](state, geohash) {
    state.geohash = geohash;
  },
  //重置用户名
  [RETSET_NAME](state, username) {
    //修改用户名
    state.userInfo = Object.assign({}, state.userInfo, {
      username
<<<<<<< HEAD
	})
=======
    })
    state.userName = state.userInfo.username
>>>>>>> 2675a0b64f5c988d75e7900f807b87ab27c37e3a
  },
  //退出登录
  [OUT_LOGIN](state) {
    state.userInfo = {};
    state.login = false;
  }
}
