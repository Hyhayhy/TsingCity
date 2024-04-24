"use strict";
const common_vendor = require("../../common/vendor.js");
const store_index = require("../../store/index.js");
const _sfc_main = {
  data() {
    return {
      aid: null,
      questions: [],
      currentQuestionIndex: 0,
      currentQuestion: null,
      showNextButton: false,
      choice_value: "",
      store: store_index.useStore(),
      uid: common_vendor.storeToRefs(this.store),
      show: false,
      yes_value: ""
    };
  },
  onLoad: function(option) {
    this.aid = option.aid;
    this.get_ques();
  },
  methods: {
    get_ques() {
      common_vendor.index.request({
        url: "http://101.42.249.157:9001/question/getQuestionList/1/30/" + this.aid,
        success: (res) => {
          this.questions = res.data.data.records;
          this.currentQuestion = this.questions[this.currentQuestionIndex];
        }
      });
    },
    selectOption(index) {
      this.choice_value = index;
    },
    subinfo(e) {
      let _this = this;
      common_vendor.index.request({
        url: "http://101.42.249.157:9001/question/pdQuestion?uid=" + this.store.$state.uid + "&qid=" + e + "&userAnswer=" + this.choice_value,
        method: "GET",
        success(res) {
          console.log(res.data.data);
          if (res.data.data.flag) {
            _this.nextQuestion();
          } else {
            _this.yes_value = res.data.data.trueAnswer;
            _this.open();
          }
        }
      });
    },
    nextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
        this.currentQuestion = this.questions[this.currentQuestionIndex];
      } else {
        console.log("已经是最后一题了");
      }
    },
    open() {
      this.$refs.tipPopup.open();
    },
    sure() {
      this.$refs.tipPopup.close();
      this.nextQuestion();
    }
  }
};
if (!Array) {
  const _component_navTab = common_vendor.resolveComponent("navTab");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_component_navTab + _easycom_uni_popup2)();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.currentQuestion.content),
    b: common_vendor.t($data.currentQuestion.option1),
    c: common_vendor.o(($event) => $options.selectOption($data.currentQuestion.option1)),
    d: common_vendor.t($data.currentQuestion.option2),
    e: common_vendor.o(($event) => $options.selectOption($data.currentQuestion.option2)),
    f: common_vendor.t($data.currentQuestion.option3),
    g: common_vendor.o(($event) => $options.selectOption($data.currentQuestion.option3)),
    h: common_vendor.t($data.currentQuestion.option4),
    i: common_vendor.o(($event) => $options.selectOption($data.currentQuestion.option4)),
    j: common_vendor.o(($event) => $options.subinfo($data.currentQuestion.qid)),
    k: common_vendor.t($data.yes_value),
    l: common_vendor.o((...args) => $options.sure && $options.sure(...args)),
    m: common_vendor.sr("tipPopup", "e5c2c806-1"),
    n: common_vendor.p({
      type: "center",
      ["is-mask-click"]: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e5c2c806"], ["__file", "D:/TsingCity/pages/question/ques_info.vue"]]);
wx.createPage(MiniProgramPage);
