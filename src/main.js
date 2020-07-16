// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import router from './router'
import store from './store'

// import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/base.css';

// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'
Vue.use(dataV)
// 表单验证
import FormValidate from "./verify/verify_manage";
Vue.prototype.$FormValidate = FormValidate;

Vue.config.productionTip = false

Vue.use(ElementUI);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,     //相当于store: store, 注册后， 子组件中可以使用this.$store访问
  components: { App },
  template: '<App/>'
})
