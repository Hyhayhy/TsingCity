"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "me",
  setup(__props) {
    const comList = [
      {
        img: "https://img2.baidu.com/it/u=3853345508,384760633&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1689958800&t=210689b7eb06d7c78958d7063151cba6",
        name: "商品的名称，可以很长很长..."
      },
      {
        img: "https://img2.baidu.com/it/u=1814268193,3619863984&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1689958800&t=d6764859a9740bb4aead7703daa61876",
        name: "商品名称会在超出两行时候自动折叠"
      },
      {
        img: "https://img0.baidu.com/it/u=1604010673,2427861166&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1689958800&t=2e255208580c0570167a800344d3aa59",
        name: "只有一行标题时高度为39",
        commdityPrice: 100
      },
      {
        img: "https://img0.baidu.com/it/u=2627496060,1933351908&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1689958800&t=fd7a89ad586d338543b6916df7083e4f",
        name: "具体样式您可以自定义"
      },
      {
        img: "https://img2.baidu.com/it/u=3853345508,384760633&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1689958800&t=210689b7eb06d7c78958d7063151cba6",
        name: "vue的H5页面也是如此使用"
      }
    ];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(comList, (item, index, i0) => {
          return {
            a: item.img,
            b: common_vendor.t(item.name),
            c: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-19c123a7"], ["__file", "/Users/apple/Desktop/TsingCity/pages/me/me.vue"]]);
wx.createPage(MiniProgramPage);
