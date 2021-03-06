import Vue from 'vue'
import App from './App'
import './common/iconfont.css';
Vue.config.productionTip = false

Vue.prototype.$serverUrl = 'https://api.binstd.com/recipe/';
Vue.prototype.$appkey = '5f78a900d9b94766';
Vue.prototype.random = (lower, upper) =>{
						return Math.floor(Math.random() * (upper - lower)) + lower;
					};

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()