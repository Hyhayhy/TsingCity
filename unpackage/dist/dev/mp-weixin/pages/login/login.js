"use strict";
const common_vendor = require("../../common/vendor.js");
const services_login = require("../../services/login.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "login",
  setup(__props) {
    let code = "";
    common_vendor.onLoad(async () => {
      const res = await common_vendor.wx$1.login();
      code = res.code;
    });
    const onGetphonenumber = async (ev) => {
      console.log(12);
      const {
        encryptedData,
        iv
      } = ev.detail;
      const res = await services_login.postLoginWxMinAPI({
        code,
        encryptedData,
        iv
      });
      console.log(res);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onGetphonenumber)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/apple/Desktop/TsingCity/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
