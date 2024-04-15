"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  navTab();
}
const navTab = () => "../../components/nav-bar/nav_tab.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const main_info = common_vendor.ref({});
    const isFocused = common_vendor.ref("landscape");
    const isFlipped = common_vendor.ref(false);
    const toggleFocus = (target) => {
      isFocused.value = target;
      isFlipped.value = false;
    };
    common_vendor.onMounted(() => {
      common_vendor.index.request({
        url: "http://hexpect.cn:9001/homepage/getInfo",
        success(res) {
          main_info.value = res.data.data;
        },
        fail(err) {
          console.log("请求失败", err);
        },
        complete() {
        }
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
      }, isFocused.value === "landscape" ? {
        g: main_info.value.imag1,
        h: common_vendor.t(main_info.value.name)
      } : {}, {
        i: isFocused.value === "story"
      }, isFocused.value === "story" ? {
        j: common_vendor.t(main_info.value.name),
        k: common_vendor.t(main_info.value.jianjie)
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "/Users/apple/Desktop/TsingCity/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
