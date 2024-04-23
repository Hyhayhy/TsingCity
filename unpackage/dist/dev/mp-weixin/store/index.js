"use strict";
const common_vendor = require("../common/vendor.js");
const useStore = common_vendor.defineStore("counter", {
  state: () => {
    return {
      count: "",
      uid: "",
      loginState: false
    };
  },
  actions: {
    increment(e) {
      this.count = e;
    },
    decrement() {
      this.count--;
    },
    setUid(e) {
      this.uid = e;
    },
    setLogin(e) {
      this.loginState = e;
    }
  }
});
exports.useStore = useStore;
