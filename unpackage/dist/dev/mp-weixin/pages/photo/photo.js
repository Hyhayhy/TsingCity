"use strict";
const common_vendor = require("../../common/vendor.js");
const store_index = require("../../store/index.js");
if (!Math) {
  navTab();
}
const navTab = () => "../../components/nav-bar/nav_tab.js";
const _sfc_main = {
  __name: "photo",
  setup(__props) {
    const store = store_index.useStore();
    common_vendor.storeToRefs(store);
    const comList = common_vendor.ref([]);
    const get_usr_list = () => {
      common_vendor.index.request({
        url: "http://101.42.249.157:9001/loadAllImage",
        success(res) {
          comList.value = res.data.data;
        }
      });
    };
    common_vendor.onMounted(() => {
      get_usr_list();
    });
    const toggleFavorite = (item) => {
      item.isFavorite = !item.isFavorite;
      if (item.isFavorite) {
        console.log("http://101.42.249.157:9001/favorites/add?uid=" + store.$state.uid + "&sid=" + item.ispot + "&iid=" + item.iid);
        common_vendor.index.request({
          url: "http://101.42.249.157:9001/favorites/add?uid=" + store.$state.uid + "&sid=" + item.ispot + "&iid=" + item.iid,
          method: "POST",
          success(res) {
          }
        });
      } else {
        console.log("取消收藏成功", item.name);
      }
    };
    const showFullscreen = (imageUrl) => {
      common_vendor.index.previewImage({
        urls: comList.value.map((item) => item.imag1),
        current: imageUrl,
        success: () => {
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(comList.value, (item, index, i0) => {
          return {
            a: item.iurl,
            b: common_vendor.o(($event) => showFullscreen(item.iurl), index),
            c: common_vendor.t(item.name),
            d: item.isFavorite ? "../../static/favorite-filled.png" : "../../static/favorite-empty.png",
            e: common_vendor.o(($event) => toggleFavorite(item), index),
            f: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5140b150"], ["__file", "D:/TsingCity/pages/photo/photo.vue"]]);
wx.createPage(MiniProgramPage);
