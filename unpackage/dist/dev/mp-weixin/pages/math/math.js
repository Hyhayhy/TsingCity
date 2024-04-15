"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "math",
  setup(__props) {
    const isFocused = common_vendor.ref("landscape");
    const isFlipped = common_vendor.ref(false);
    const toggleFocus = (target) => {
      isFocused.value = target;
      isFlipped.value = false;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(($event) => toggleFocus("landscape")),
        b: isFocused.value === "landscape" ? 1 : "",
        c: common_vendor.o(($event) => toggleFocus("story")),
        d: isFocused.value === "story" ? 1 : "",
        e: isFocused.value === "story" ? "50%" : "0",
        f: isFocused.value === "landscape"
      }, isFocused.value === "landscape" ? {} : {}, {
        g: isFocused.value === "story"
      }, isFocused.value === "story" ? {} : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ce9408c1"], ["__file", "/Users/apple/Desktop/TsingCity/pages/math/math.vue"]]);
wx.createPage(MiniProgramPage);
