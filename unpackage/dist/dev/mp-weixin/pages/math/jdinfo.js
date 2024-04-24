"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      jd_info: {}
    };
  },
  onLoad: function(option) {
    this.jd_info = JSON.parse(option.item);
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.jd_info.name),
    b: common_vendor.t($data.jd_info.jianjie),
    c: $data.jd_info.imag1
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-54df7d77"], ["__file", "D:/TsingCity/pages/math/jdinfo.vue"]]);
wx.createPage(MiniProgramPage);
