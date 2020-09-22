import Vue from 'vue'
import VueRouter from 'vue-router';
import { Icon as eleIcon, Button, Carousel, CarouselItem} from 'element-ui';
import { Icon, Divider } from 'ant-design-vue';
// import less from 'less'
import App from './App.vue'
import Alipay from './components/Alipay.vue'
import Element from './components/Element.vue'
import Douyin from './components/Douyin.vue'
import QQmusic from './components/QQmusic.vue'
import QQ from './components/QQ.vue'

Vue.config.productionTip = false

Vue.use(eleIcon)
Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)

Vue.use(Icon)
Vue.use(Divider)

// Vue.use(less)

Vue.use(VueRouter);

const routes = [
  { path: '/alipay', component: Alipay },
  { path: '/element', component: Element },
  { path: '/douyin', component: Douyin },
  { path: '/qqmusic', component: QQmusic },
  { path: '/qq', component: QQ },
  // { path: '*', redirect: '/alipay' }
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
