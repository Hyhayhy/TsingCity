"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  navTab();
}
const navTab = () => "../../components/nav-bar/nav_tab.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.ref({});
    const isFocused = common_vendor.ref("landscape");
    const isFlipped = common_vendor.ref(false);
    const toggleFocus = (target) => {
      isFocused.value = target;
      isFlipped.value = false;
    };
    const get_info = () => {
      common_vendor.index.request({
        url: "http://hexpect.cn:9001/homepage/getInfo",
        // url: '/api/homepage/getInfo',
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
    const infos = [
      {
        id: "44",
        name: "五四广场",
        jianjie: "五四广场，位于山东省青岛市市南区东海西路，北依青岛市人民政府办公大楼，南临浮山湾，总占地面积10公顷。青岛市标志性建筑，为纪念由于青岛主权问题引发的五四运动而命名。截至2020年占地面积10万平方米。五四广场分南北两部分，分布于中轴线上的市人民政府办公大楼、隐式喷泉等。",
        dengji: "2A",
        suoshuqu: "5",
        jingdu: "120.38494",
        weidu: "36.06203",
        imag1: "https://tsingcity-1310015893.cos.ap-nanjing.myqcloud.com/qingcheng/市南区/五四广场/c637d6a44e4592155eb4cf0702b7455.png",
        dj: null
      },
      {
        id: "50",
        name: "栈桥",
        jianjie: "青岛栈桥是青岛海滨风景区的景点之一，是国务院于1982年首批公布的国家级风景名胜区，也是首批国家AAAA级旅游景区。青岛栈桥位于游人如织的青岛中山路南端，桥身从海岸探入如弯月般的青岛湾深处。",
        dengji: "4A",
        suoshuqu: "5",
        jingdu: "120.319859",
        weidu: "36.060231",
        imag1: "https://tsingcity-1310015893.cos.ap-nanjing.myqcloud.com/qingcheng/市南区/栈桥/3560c01ddd7b6070b52732654102c8f.png",
        dj: null
      },
      {
        id: "30",
        name: "崂山风景区",
        jianjie: "崂山古称牢山、劳山。坐落在山东半岛的东南，西靠青岛，东南两面濒临黄海。面积386平方公里，崂顶巨峰，海拔1，133米。既是中国道教名山，又是著名的避暑游览胜地。",
        dengji: "5A",
        suoshuqu: "3",
        jingdu: "120.583641",
        weidu: "36.211591",
        imag1: "https://tsingcity-1310015893.cos.ap-nanjing.myqcloud.com/qingcheng/崂山区/崂山风景区/20070719154113_7WXZZAMF.jpg",
        dj: null
      }
    ];
    let startX = 0;
    let translateX = common_vendor.ref(0);
    let currentIndex = 0;
    const currentInfo = common_vendor.ref(infos[currentIndex]);
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
      const newInfo = res;
      infos.push(newInfo);
    };
    common_vendor.onMounted(() => {
      get_info();
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
        g: currentInfo.value.imag1,
        h: common_vendor.t(currentInfo.value.name)
      } : {}, {
        i: isFocused.value === "story"
      }, isFocused.value === "story" ? {
        j: common_vendor.t(currentInfo.value.name),
        k: common_vendor.t(currentInfo.value.jianjie)
      } : {}, {
        l: common_vendor.o(touchStart),
        m: common_vendor.o(touchMove),
        n: common_vendor.o(touchEnd),
        o: `translateX(${common_vendor.unref(translateX)}px)`
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "/Users/apple/Desktop/TsingCity/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
