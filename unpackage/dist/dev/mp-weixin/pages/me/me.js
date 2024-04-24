"use strict";
const common_vendor = require("../../common/vendor.js");
const store_index = require("../../store/index.js");
if (!Math) {
  navTab();
}
const navTab = () => "../../components/nav-bar/nav_tab.js";
const _sfc_main = {
  __name: "me",
  setup(__props) {
    const store = store_index.useStore();
    common_vendor.storeToRefs(store);
    const comList = common_vendor.ref([]);
    const get_usr_list = () => {
      common_vendor.index.request({
        url: "http://101.42.249.157:9001/favorite/" + store.$state.uid,
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
      if (!item.isFavorite) {
        console.log("收藏成功");
      } else {
        console.log("取消收藏成功", item.name);
        common_vendor.index.request({
          url: "http://101.42.249.157:9001/favorites/uid=" + store.$state.uid + "/sid=" + item.ispot + "/iid=" + item.iid,
          method: "DELETE",
          success(res) {
          }
        });
      }
    };
    const showFullscreen = (imageUrl) => {
      console.log(imageUrl);
      common_vendor.index.previewImage({
        urls: [imageUrl],
        showmenu: true,
        success: () => {
        }
      });
    };
    common_vendor.onMounted(() => {
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(comList.value, (item, index, i0) => {
          return {
            a: item.iurl,
            b: common_vendor.o(($event) => showFullscreen(item.iurl), index),
            c: common_vendor.t(item.name),
            d: item.isFavorite ? "../../static/favorite-empty.png" : "../../static/favorite-filled.png",
            e: common_vendor.o(($event) => toggleFavorite(item), index),
            f: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-19c123a7"], ["__file", "D:/TsingCity/pages/me/me.vue"]]);
wx.createPage(MiniProgramPage);
