"use strict";
const common_vendor = require("../../common/vendor.js");
const store_index = require("../../store/index.js");
const _sfc_main = {
  __name: "login",
  setup(__props) {
    const store = store_index.useStore();
    common_vendor.storeToRefs(store);
    const usr_info = common_vendor.ref();
    const logins = (e) => {
      common_vendor.index.login({
        "provider": "weixin",
        success: function(event) {
          console.log(event);
          common_vendor.index.request({
            url: "http://101.42.249.157:9001/userInfos/login",
            //仅为示例，并非真实接口地址。
            method: "POST",
            data: {
              code: event.code
            },
            success: (res) => {
              let str = res.data.data;
              let regex = /(\w+)\=([^\,]+)(?:\,|\))/g;
              let match;
              let jsonObj = {};
              while ((match = regex.exec(str)) !== null) {
                jsonObj[match[1]] = match[2];
              }
              usr_info.value = jsonObj;
              console.log(usr_info.value.uid);
              store.setUid(usr_info.value.uid);
              store.setLogin(true);
            }
          });
        },
        fail: function(err) {
        }
      });
    };
    function stare() {
      console.log(123);
      console.log(store.$state.uid);
      console.log(store.$state.loginState);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(logins),
        b: common_vendor.o(stare)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/TsingCity/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
