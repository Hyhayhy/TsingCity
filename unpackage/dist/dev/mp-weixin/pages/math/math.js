"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  navTab();
}
const navTab = () => "../../components/nav-bar/nav_tab.js";
const _sfc_main = {
  __name: "math",
  setup(__props) {
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/apple/Desktop/TsingCity/pages/math/math.vue"]]);
wx.createPage(MiniProgramPage);
