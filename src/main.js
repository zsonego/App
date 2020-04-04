// 入口文件
import Vue from 'vue'

//导入路由的包
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//按需导入 Mint-UI 中的组件
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)


//导入mui
import './lib/mui/css/mui.css'

import './lib/mui/css/icons-extra.css'

//导入路由模块
import router from './router.js'


//导入App 根组件
import app from './app.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})