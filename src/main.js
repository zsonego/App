// 入口文件
import Vue from 'vue'

//按需导入 Mint-UI 中的组件
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)

//导入mui
import './lib/mui/css/mui.css'

//导入App 根组件
import app from './app.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app)
})