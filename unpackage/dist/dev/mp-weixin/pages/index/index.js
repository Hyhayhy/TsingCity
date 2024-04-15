"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  navTab();
}
const navTab = () => "../../components/nav-bar/nav_tab.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const isFocused = common_vendor.ref("landscape");
    const isFlipped = common_vendor.ref(false);
    const toggleFocus = (target) => {
      isFocused.value = target;
      isFlipped.value = false;
    };
    common_vendor.onMounted(() => {
      common_vendor.axios.get("http://101.42.249.157:9001/homepage/getInfo").then((res) => {
        console.log(res.data);
      });
    });
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "/Users/apple/Desktop/TsingCity/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
