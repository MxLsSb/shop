import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import "@/assets/css/reset.css"
import "@/assets/js/rem.js"
// vant完全引用
// import Vant from 'vant';
// import 'vant/lib/index.css';

// Vue.use(Vant);

import {SubmitBar, Card,GoodsAction,GoodsActionIcon,GoodsActionButton, PullRefresh ,List, Row ,  Col , Toast , Button ,Icon , NavBar , Tabbar , TabbarItem , Swipe, SwipeItem ,Lazyload,  Tab, Tabs , CellGroup , Field} from 'vant';
Vue.use(SubmitBar).use(Card).use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton).use(PullRefresh).use(List).use(Row).use(Col).use(Button).use(Icon).use(NavBar).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload).use(Tab).use(Tabs).use(CellGroup).use(Field).use(Toast);
import "@/mock/mock.js";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
