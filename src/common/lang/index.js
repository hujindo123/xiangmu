import Vue from 'vue';
import VueI18n from 'vue-i18n'; // 多语言切换
import Cookies from 'js-cookie';

import enLocale from './en';
import zhLocale from './zh';
import elementZhLocale  from 'element-ui/lib/locale/lang/zh-CN';
import elementEnLocale  from 'element-ui/lib/locale/lang/en';

Vue.use(VueI18n);
//从localStorage中拿到用户的语言选择，如果没有，那默认中文。
const i18n = new VueI18n({
  locale: localStorage.lang || 'zh',
  messages: {
    en: {
      ...enLocale,
      ...elementEnLocale,
    },
    zh: {
      ...zhLocale,
      ...elementZhLocale,
    }

  }
});
export default i18n;
