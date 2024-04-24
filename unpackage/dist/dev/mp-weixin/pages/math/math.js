"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_uni_section2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (navTab + _easycom_uni_list_item + _easycom_uni_list + _easycom_uni_section)();
}
const navTab = () => "../../components/nav-bar/nav_tab.js";
const _sfc_main = {
  __name: "math",
  setup(__props) {
    const list_info = common_vendor.ref();
    const get_list = () => {
      common_vendor.index$1.request({
        url: "http://hexpect.cn:9001/att/getAllSpot",
        // url: '/api/att/getAllSpot',
        success(res) {
          list_info.value = res.data.data;
        },
        fail(err) {
          console.log("请求失败", err);
        },
        complete() {
        }
      });
    };
    common_vendor.onMounted(() => {
      get_list();
    });
    const go_info = (item) => {
      let jsonObj = JSON.stringify(item);
      common_vendor.index$1.navigateTo({
        url: `jdinfo?item=${jsonObj}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(list_info.value, (item, k0, i0) => {
          return {
            a: common_vendor.o(($event) => go_info(item)),
            b: "0f22edd3-3-" + i0 + "," + ("0f22edd3-2-" + i0),
            c: common_vendor.p({
              title: item.name,
              note: item.dengji,
              showArrow: true,
              thumb: item.imag1,
              ["thumb-size"]: "lg",
              rightText: "详细",
              link: true
            }),
            d: "0f22edd3-2-" + i0 + ",0f22edd3-1"
          };
        }),
        b: common_vendor.p({
          title: "景点列表",
          type: "line"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/apple/Desktop/TsingCity/pages/math/math.vue"]]);
wx.createPage(MiniProgramPage);
