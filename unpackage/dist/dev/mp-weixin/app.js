"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/math/math.js";
  "./pages/me/me.js";
  "./pages/photo/photo.js";
  "./pages/question/question.js";
  "./pages/question/ques_info.js";
  "./pages/login/login.js";
  "./pages/math/jdinfo.js";
}
const _sfc_main = {};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/TsingCity/App.vue"]]);
const pinia = common_vendor.createPinia();
pinia.use(common_vendor.index$1);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(pinia);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
