"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "photo",
  setup(__props) {
    const infos = [
      {
        name: "九上沟风景区",
        jianjie: "九上沟风景区位于铁橛山下的铁山街道办事处上沟村，占地面积约9平方公里，是胶南市抗日战争和解放战争时期的“红色根据地”，也称“杨家山里”。"
      },
      {
        name: "九上沟风景区2",
        jianjie: "九上沟风景区位于铁橛山下的铁山街道办事处上沟村，占地面积约9平方公里，是胶南市抗日战争和解放战争时期的“红色根据地”，也称“杨家山里”。"
      }
    ];
    let startX = 0;
    let translateX = common_vendor.ref(0);
    let currentIndex = 0;
    const currentInfo = common_vendor.ref(infos[currentIndex]);
    const get_info = () => {
      common_vendor.index.request({
        // url: 'http://hexpect.cn:9001/homepage/getInfo',
        url: "/api/homepage/getInfo",
        success(res) {
          addNewInfo(res.data.data);
        },
        fail(err) {
          console.log("请求失败", err);
        },
        complete() {
        }
      });
    };
    const touchStart = (e) => {
      startX = e.touches[0].clientX;
    };
    const touchMove = (e) => {
      const diffX = startX - e.touches[0].clientX;
      translateX.value = -diffX;
    };
    const touchEnd = (e) => {
      const diffX = startX - e.changedTouches[0].clientX;
      if (diffX < -50 && currentIndex > 0) {
        currentIndex--;
      } else if (diffX > 50 && currentIndex < infos.length - 1) {
        currentIndex++;
        if (currentIndex === infos.length - 1) {
          get_info();
        }
      }
      translateX.value = 0;
      currentInfo.value = infos[currentIndex];
    };
    const addNewInfo = (res) => {
      console.log(res);
      const newInfo = res;
      infos.push(newInfo);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(currentInfo.value.name),
        b: common_vendor.t(currentInfo.value.jianjie),
        c: common_vendor.o(touchStart),
        d: common_vendor.o(touchMove),
        e: common_vendor.o(touchEnd),
        f: `translateX(${common_vendor.unref(translateX)}px)`
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5140b150"], ["__file", "/Users/apple/Desktop/TsingCity/pages/photo/photo.vue"]]);
wx.createPage(MiniProgramPage);
