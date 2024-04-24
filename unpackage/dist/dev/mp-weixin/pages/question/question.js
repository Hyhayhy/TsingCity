"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  _easycom_uni_data_select2();
}
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
if (!Math) {
  (navTab + _easycom_uni_data_select)();
}
const navTab = () => "../../components/nav-bar/nav_tab.js";
const _sfc_main = {
  __name: "question",
  setup(__props) {
    const aid = common_vendor.ref();
    const range = [
      {
        value: 0,
        text: "即墨区"
      },
      {
        value: 1,
        text: "城阳区"
      },
      {
        value: 2,
        text: "崂山区"
      },
      {
        value: 3,
        text: "市北区"
      },
      {
        value: 4,
        text: "市南区"
      },
      {
        value: 5,
        text: "平度市"
      },
      {
        value: 6,
        text: "新海岸新区"
      },
      {
        value: 7,
        text: "李沧区"
      },
      {
        value: 8,
        text: "胶州市"
      },
      {
        value: 9,
        text: "莱西市"
      }
    ];
    const change = (e) => {
      aid.value = e + 1;
    };
    const go_question = () => {
      console.log(aid.value);
      common_vendor.index.navigateTo({
        url: `ques_info?aid=` + aid.value
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(change),
        b: common_vendor.o(($event) => _ctx.value = $event),
        c: common_vendor.p({
          localdata: range,
          clear: false,
          modelValue: _ctx.value
        }),
        d: common_vendor.o(go_question)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a6df9a91"], ["__file", "D:/TsingCity/pages/question/question.vue"]]);
wx.createPage(MiniProgramPage);
