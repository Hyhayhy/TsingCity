<template>
	<view class="bg">
		<navTab></navTab>
		<view class="content">
			<view class="jx2"></view>
			<view class="txt1">单选题</view>
			<view class="hx"></view>
			<view class="main">
				<view class="title">{{ currentQuestion.content }}</view>
				<view class="choice1" @click="selectOption(currentQuestion.option1)">A.{{ currentQuestion.option1 }}
				</view>
				<view class="choice2" @click="selectOption(currentQuestion.option2)">B.{{ currentQuestion.option2 }}
				</view>
				<view class="choice3" @click="selectOption(currentQuestion.option3)">C.{{ currentQuestion.option3 }}
				</view>
				<view class="choice4" @click="selectOption(currentQuestion.option4)">D.{{ currentQuestion.option4 }}
				</view>
			</view>
			<view @click="subinfo(currentQuestion.qid)">
				<image src="../../static/3.Button__Big-Em_Grey.png" class="img"></image>
			</view>


			<view class="proup">
				<uni-popup ref="tipPopup" type="center" :is-mask-click="true">
					<view class="pop">
						<view class="title2">
							回答错误
						</view>
						<view class="tip-info">
							正确答案：{{yes_value}}
						</view>
						<view class="sure" @click="sure">
							确定
						</view>
					</view>
				</uni-popup>
			</view>

		</view>
	</view>
</template>

<script>
	import {
		onMounted,
		ref
	} from "vue";
	import {
		useStore
	} from '../../store/index'
	import {
		storeToRefs
	} from 'pinia';
	export default {
		data() {
			return {
				aid: null,
				questions: [],
				currentQuestionIndex: 0,
				currentQuestion: null,
				showNextButton: false,
				choice_value: '',
				store: useStore(),
				uid: storeToRefs(this.store),
				show: false,
				yes_value: ''
			};
		},
		onLoad: function(option) {
			this.aid = option.aid;
			this.get_ques();
		},
		methods: {
			get_ques() {
				uni.request({
					url: "http://101.42.249.157:9001/question/getQuestionList/1/30/" +
						this.aid,
					success: (res) => {
						this.questions = res.data.data.records;
						this.currentQuestion = this.questions[this.currentQuestionIndex];
					}
				});
			},
			selectOption(index) {
				// console.log(e);
				// 处理用户选择答案的逻辑
				// console.log("用户选择了答案：" + index);
				this.choice_value = index;

			},
			subinfo(e) {
				// console.log(e);
				// console.log(this.choice_value);
				// console.log(this.store.$state.uid);
				let _this = this
				uni.request({
					url: 'http://101.42.249.157:9001/question/pdQuestion?uid=' + this.store.$state.uid + '&qid=' +
						e + '&userAnswer=' + this.choice_value,
					method: "GET",
					success(res) {
						console.log(res.data.data);
						if (res.data.data.flag) {
							_this.nextQuestion()
						} else {
							_this.yes_value = res.data.data.trueAnswer
							_this.open()
						}
					}
				})
			},
			nextQuestion() {
				if (this.currentQuestionIndex < this.questions.length - 1) {
					this.currentQuestionIndex++;
					this.currentQuestion = this.questions[this.currentQuestionIndex];
				} else {
					console.log("已经是最后一题了");
					// 可以在这里处理答题完成后的逻辑
				}
			},
			open() {
				this.$refs.tipPopup.open()
			},
			sure() {
				this.$refs.tipPopup.close()
				this.nextQuestion()
			}
		}
	};
</script>


<style scoped>
	.stored {
		background-color: aquamarine;
	}

	.bg {
		background-image: url('https://img-1310015893.cos.ap-beijing.myqcloud.com/bgimg.png');
		height: 100vh;
		background-size: 100% 100%;
		width: 100vw;
		position: fixed;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.content {
		/*矩形 1*/
		position: fixed;
		display: flex;
		left: 10vw;
		top: 15vh;
		width: 350px;
		height: 70vh;
		opacity: 1;
		border-radius: 10px;
		background: rgba(255, 255, 255, 1);

	}

	.jx2 {
		/*矩形 2*/
		position: fixed;
		display: flex;
		left: 15vw;
		top: 17vh;
		width: 7px;
		height: 18px;
		opacity: 1;
		background: rgba(107, 125, 125, 1);

	}

	.txt1 {
		/*文本 1*/
		position: fixed;
		display: flex;
		left: 19vw;
		top: 16.5vh;
		width: 48px;
		height: 24px;
		opacity: 1;
		/** 文本1 */
		font-size: 16px;
		font-weight: 700;
		letter-spacing: 0px;
		line-height: 23.17px;
		color: rgba(0, 0, 0, 1);
		text-align: left;
		vertical-align: top;

	}

	.hx {
		/*直线 1*/
		position: fixed;
		display: flex;
		left: 10vw;
		top: 22vh;
		width: 350px;
		height: 0px;
		opacity: 1;
		border: 1px solid rgba(191, 191, 191, 1);
	}

	.title {
		/*文本 1*/
		position: fixed;
		display: flex;
		left: 15vw;
		top: 25vh;
		width: 321px;
		height: 41px;
		opacity: 1;
		/** 文本1 */
		font-size: 14px;
		font-weight: 700;
		letter-spacing: 0px;
		line-height: 20.27px;
		color: rgba(0, 0, 0, 1);
		text-align: left;
		vertical-align: top;
	}

	.choice2 {
		/*矩形 3*/
		position: fixed;
		display: flex;
		left: 15vw;
		top: 39vh;
		width: 313px;
		height: 41px;
		opacity: 1;
		border-radius: 5px;
		background: rgba(242, 242, 242, 1);
		border: 1px solid rgba(222, 222, 222, 1);
	}

	.choice_txt2 {
		/*文本 1*/
		position: fixed;
		display: flex;
		left: 18vw;
		top: 40vh;
		height: 21px;
		opacity: 1;
		/** 文本1 */
		font-size: 14px;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 20.27px;
		color: rgba(102, 102, 102, 1);
		text-align: left;
		vertical-align: top;
	}

	.choice3 {
		/*矩形 3*/
		position: fixed;
		display: flex;
		left: 15vw;
		top: 47vh;
		width: 313px;
		height: 41px;
		opacity: 1;
		border-radius: 5px;
		background: rgba(242, 242, 242, 1);
		border: 1px solid rgba(222, 222, 222, 1);
	}

	.choice_txt3 {
		/*文本 1*/
		position: fixed;
		display: flex;
		left: 18vw;
		top: 48vh;
		height: 21px;
		opacity: 1;
		/** 文本1 */
		font-size: 14px;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 20.27px;
		color: rgba(102, 102, 102, 1);
		text-align: left;
		vertical-align: top;
	}

	.choice4 {
		/*矩形 3*/
		position: fixed;
		display: flex;
		left: 15vw;
		top: 55vh;
		width: 313px;
		height: 41px;
		opacity: 1;
		border-radius: 5px;
		background: rgba(242, 242, 242, 1);
		border: 1px solid rgba(222, 222, 222, 1);
	}

	.choice_txt4 {
		/*文本 1*/
		position: fixed;
		display: flex;
		left: 18vw;
		top: 56vh;
		height: 21px;
		opacity: 1;
		/** 文本1 */
		font-size: 14px;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 20.27px;
		color: rgba(102, 102, 102, 1);
		text-align: left;
		vertical-align: top;
	}

	.choice1 {
		/*矩形 3*/
		position: fixed;
		display: flex;
		left: 15vw;
		top: 31vh;
		width: 313px;
		height: 41px;
		opacity: 1;
		border-radius: 5px;
		background: rgba(242, 242, 242, 1);
		border: 1px solid rgba(222, 222, 222, 1);
	}

	.choice_txt1 {
		/*文本 1*/
		position: fixed;
		display: flex;
		left: 18vw;
		top: 32vh;
		height: 21px;
		opacity: 1;
		/** 文本1 */
		font-size: 14px;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 20.27px;
		color: rgba(102, 102, 102, 1);
		text-align: left;
		vertical-align: top;
	}

	.img {
		position: fixed;
		display: flex;
		left: 29vw;
		top: 67vh;
		width: 184px;
		height: 40px;
		opacity: 1;
	}





	.pop {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		background-color: #fff;
		border-radius: 16rpx;
		height: 576rpx;
		z-index: 99;
		width: 640rpx;
		padding: 30rpx 0;
	}

	.title2 {
		text-align: center;
		font-size: 34rpx;
		font-weight: 500;
		margin-top: 38rpx;
	}

	.tip-img {
		margin: 0 auto;
		width: 296rpx;
		height: 204rpx;
		margin-top: 64rpx;
	}

	.tip-info {
		padding: 0 30rpx;
		font-size: 34rpx;
		color: #666;
		margin-top: 32rpx;
		margin-bottom: 64rpx;
		text-align: center;
	}

	.sure {
		width: 100%;
		border-top: 1rpx solid #d1d1d1;
		height: 112rpx;
		text-align: center;
		line-height: 112rpx;
		color: #02A53C;
		font-size: 34rpx;
		font-weight: 500;
	}
</style>