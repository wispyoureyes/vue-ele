// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import axios from 'axios';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

// 忽略掉eslint对vue实例化后必须要赋值给一个对象的规则
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  created () {
    this.$http.get('/api/seller').then(response => {
      console.log(response);
    }).catch(response => {
      console.log(response);
    });
  }
});
