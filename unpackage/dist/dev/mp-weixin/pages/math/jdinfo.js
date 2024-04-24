"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      jd_info: null
    };
  },
  onLoad: function(option) {
    jd_info = option;
    console.log(jd_info);
  }
};
const jd_info = common_vendor.ref();
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-54df7d77"], ["__file", "/Users/apple/Desktop/TsingCity/pages/math/jdinfo.vue"]]);
wx.createPage(MiniProgramPage);
