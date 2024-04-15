"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  navTab();
}
const navTab = () => "../../components/nav-bar/nav_tab.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "me",
  setup(__props) {
    const onGetphonenumber = common_vendor.index.login({
      provider: "weixin",
      univerifyStyle: {
        fullScreen: true
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(onGetphonenumber) && common_vendor.unref(onGetphonenumber)(...args)
        )
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/apple/Desktop/TsingCity/pages/me/me.vue"]]);
wx.createPage(MiniProgramPage);
