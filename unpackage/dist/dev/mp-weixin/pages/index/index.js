"use strict";
const common_vendor = require("../../common/vendor.js");
const navTab = () => "../../components/nav-bar/nav_tab.js";
const _sfc_main = {
  components: {
    navTab
  },
  data() {
    return {};
  },
  onLoad() {
  },
  methods: {
    gophoto() {
      common_vendor.index.navigateTo({
        url: "/pages/photo/photo"
      });
    },
    goquestion() {
      common_vendor.index.navigateTo({
        url: "/pages/question/question"
      });
    },
    gomap() {
      common_vendor.index.navigateTo({
        url: "/pages/math/math"
      });
    },
    goshoucang() {
      common_vendor.index.navigateTo({
        url: "/pages/me/me"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.goshoucang && $options.goshoucang(...args)),
    b: common_vendor.o((...args) => $options.gomap && $options.gomap(...args)),
    c: common_vendor.o((...args) => $options.goquestion && $options.goquestion(...args)),
    d: common_vendor.o((...args) => $options.gophoto && $options.gophoto(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/apple/Desktop/TsingCity/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
