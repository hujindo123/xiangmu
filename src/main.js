// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from './router';
import i18n from './common/lang/index';
Vue.config.productionTip = false;

Vue.use(ElementUI, {
  size: 'medium', // set element-ui default size
  i18n: ((key, value) => i18n.t(key, value))
});

//Vue.use(Element, { size: 'small', zIndex: 3000 }) /*设置弹窗的大小 z-index*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,  // 不要忘记
  components: {App},
  template: '<App/>'
});
