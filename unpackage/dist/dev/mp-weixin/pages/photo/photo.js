"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  navTab();
}
const navTab = () => "../../components/nav-bar/nav_tab.js";
const _sfc_main = {
  __name: "photo",
  setup(__props) {
    const list_info = common_vendor.ref();
    const get_list = () => {
      common_vendor.index$1.request({
        url: "http://101.42.249.157:9001/imageArea/1",
        success(res) {
          console.log(res.data.data);
          list_info.value = res.data.data;
        },
        fail(err) {
          console.log("请求失败", err);
        },
        complete() {
          console.log("请求完成");
        }
      });
    };
    common_vendor.onMounted(() => {
      get_list();
    });
    const currentImage = common_vendor.ref("");
    const showModalFlag = common_vendor.ref(false);
    const showModal = (item) => {
      currentImage.value = item;
      showModalFlag.value = true;
    };
    const closeModal = () => {
      showModalFlag.value = false;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(list_info.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: item.imag1,
            c: common_vendor.o(($event) => showModal(item.imag1))
          };
        }),
        b: showModalFlag.value
      }, showModalFlag.value ? {
        c: common_vendor.o(closeModal),
        d: currentImage.value
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5140b150"], ["__file", "/Users/apple/Desktop/TsingCity/pages/photo/photo.vue"]]);
wx.createPage(MiniProgramPage);
