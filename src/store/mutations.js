import {
  RECORD_ADDRESS,
  RECORD_SHOPDETAIL,
  RECORD_USERINFO,
  GET_USERINFO,
  SAVE_QUESTION,
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
  //保存所选问题标题和详情
	[SAVE_QUESTION](state, question) {
		state.question = {...question};
	},
  //修改用户名
  [RETSET_NAME](state, username) {
    state.userInfo = Object.assign({}, state.userInfo, {
      username
    })
  },
  //退出登录
  [OUT_LOGIN](state) {
    state.userInfo = {};
    state.login = false;
  }
}
