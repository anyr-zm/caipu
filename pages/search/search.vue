<template>
	<view class="search">
		<view v-show="hidden">
			<searchView :searchType='searchType' :inputValue='searchValue'></searchView>
			<view class="history-box" v-if="isShow">
				<view class="history">
					<view class="history-title">
						<view class="history-text">
							热门搜索
						</view>
					</view>
					<view class="history-list">
						<view class="history-item" @click="getData('红烧肉')">红烧肉</view>
						<view class="history-item" @click="getData('鸡肉')">鸡肉</view>
						<view class="history-item" @click="getData('红烧排骨')">红烧排骨</view>
						<view class="history-item" @click="getData('粥')">粥</view>
						<view class="history-item" @click="getData('减肥')">减肥</view>
						<view class="history-item" @click="getData('麻辣小龙虾')">麻辣小龙虾</view>
						<view class="history-item" @click="getData('卤肉')">卤肉</view>
						<view class="history-item" @click="getData('煎饼')">煎饼</view>
						<view class="history-item" @click="getData('烧烤')">烧烤</view>
					</view>
				</view>
			</view>
			<view class="list" v-else>
				 <block v-for="(item,index) in lists" :key="index">
				        <goodsItemView :items='item'></goodsItemView>
						<!-- #ifdef MP-TOUTIAO -->
						<template v-if="(index+1)%5==0">
							<ad type="lImg" scale="110"
								unit-id="9f4d45cl8h49prqdnd"
								@close="adcloseMore"
							></ad>
						</template>
						<!-- #endif -->
				 </block>
				<view class="cue-text" v-if="lists.length==0">
					- - 暂无相关数据 - -
				</view>
			</view>
			<shareView></shareView>
		</view>
		<!-- #ifdef MP-TOUTIAO -->
		<view v-show="!hidden" class="toutao-icon">
			<image :src="require('../../static/today-icon.gif')" mode="aspectFill"></image>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	import searchView from '@/components/search/search';
	import goodsItemView from '@/components/goods/item';
	import shareView from '@/components/share/share';
	export default {
		data() {
			return {
				searchValue: '',
				isShow: 0,
				hidden: 0,
				lists: [],
				classid: 0,
				searchType: 'input',
				start: 0
			}
		},
		components:{searchView,goodsItemView,shareView},
		onLoad(e) {
			if(e.classid){
				this.classid = e.classid;
				this.onReachBottomData();
			} else if(e.value) {
				this.searchValue = e.value;
				this.getData (e.value)
			} else {
				this.isShow = !0;
				this.hidden = !0;
			}
		},
		onReachBottom(e) {
			if(this.classid == '') return;
			this.start += 20;
			uni.showLoading({
				title: '加载中'
			});
			this.onReachBottomData();
		},	
		methods: {
			onReachBottomData (e) {
				const t = this;
				uni.request({
					url: t.$serverUrl + '/byclass',
					data: { 
						appkey: t.$appkey,
						classid: t.classid,
						start: t.start,
						num: 20
					},
					success: (ret) => {
						t.hidden = 1;
						const data = ret.data.result;
						uni.hideLoading();
						if(data !== '' && data.list.length > 0) {
							t.lists = t.lists.concat(data.list)
						} else if(data !== '' && t.lists.length == 0) {
							t.isShow = !0;
						};
					}
				});
			},
			getData (e) {
				uni.showLoading({
					title: '加载中'
				});
				var t = this;
				t.classid = '';
				uni.request({
					url: t.$serverUrl + '/search',
					data: { 
						appkey: t.$appkey,
						keyword: e,
						num: 60
					},
					success: (ret) => {
						const data = ret.data.result;
						uni.hideLoading();
						t.hidden = 1;
						if(data !=='' && data.list.length==0) {
							return t.isShow = !0;
						} else {
							t.isShow = !1
							t.lists = data.list;
						}
					}
				});
				
			},
		},
		onShareAppMessage(res) {
			if (res.from === 'button') { // 来自页面内分享按钮
				return {
					title: '美食秘籍',
					desc: "美食推荐 · 精选美食做法",
					success: res => {},
					fail: err => {}
				}
			}
			
			return {
				title: '美食秘籍',
				desc: "美食推荐 · 精选美食做法",
				success: res => {},
				fail: err => {}
			}
		}
	}
</script>

<style scoped lang="less">
	.history {
		.history-title {
			display: flex;
			justify-content: space-between;
			margin: 24rpx 24rpx 0;
			font-size: 28rpx;
			color: #666666;
		}
		.history-list {
			display: flex;
			flex-wrap: wrap;
			margin: 0 12rpx;
			.history-item {
				height: 56rpx;
				line-height: 56rpx;
				font-size: 26rpx;
				color: #999999;
				padding: 0 24rpx;
				margin: 24rpx 12rpx 0;
				border-radius: 30rpx;
				border: 1rpx solid #ccc;
			}
		}
	}

</style>
