"use strict";
const common_vendor = require("../common/vendor.js");
const useStore = common_vendor.defineStore("counter", {
  state: () => {
    return {
      uid: "",
      loginState: false
    };
  },
  actions: {
    setUid(e) {
      this.uid = e;
    },
    setLogin(e) {
      this.loginState = e;
    }
  },
  // 开启数据持久化
  persist: {
    enabled: true
  }
});
exports.useStore = useStore;
