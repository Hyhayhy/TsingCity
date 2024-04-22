"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "nav_tab",
  setup(__props) {
    const gophoto = () => {
      common_vendor.index.navigateTo({
        url: "/pages/photo/photo"
      });
    };
    const goquestion = () => {
      common_vendor.index.navigateTo({
        url: "/pages/login/login"
      });
    };
    const gomap = () => {
      common_vendor.index.navigateTo({
        url: "/pages/math/math"
      });
    };
    const goshoucang = () => {
      common_vendor.index.navigateTo({
        url: "/pages/me/me"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(goshoucang),
        b: common_vendor.o(gomap),
        c: common_vendor.o(goquestion),
        d: common_vendor.o(gophoto)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a057aa17"], ["__file", "/Users/apple/Desktop/TsingCity/components/nav-bar/nav_tab.vue"]]);
wx.createComponent(Component);
