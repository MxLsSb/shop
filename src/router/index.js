import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import Category from '../views/Category.vue'
// import Cart from '../views/Cart.vue'
// import Profile from '../views/Profile.vue'
import Ajax from '../views/Ajax.vue'
import Detail from '../views/Detail.vue'
import FooterBar from '../components/footer-bar.vue'
import Error from '../views/Error.vue'
Vue.use(VueRouter)


let Home = ()=>import ('../views/Home.vue');
let Category = ()=>import ('../views/Category.vue');
let Cart = ()=>import ('../views/Cart.vue');
let Profile = ()=>import ('../views/Profile.vue');
const routes = [
  {
    path: '/',
    name: 'home',
    //component: Home,
    components:{
      default:Home,
      'footer-bar':FooterBar
    },
    meta:{
      keepAlive:true
    }
  }, {
    path: '/category',
    name: 'category',
    //component: Category,
    components:{
      default:Category,
      'footer-bar':FooterBar
    },
    meta:{
      keepAlive:true
    }
  },
  {
    path: '/cart',
    name: 'cart',
    //component: Cart,
    components:{
      default:Cart,
      'footer-bar':FooterBar
    },
    meta:{
      keepAlive:true
    }
  },
  {
    path: '/profile',
    name: 'profile',
    //component: Profile,
    components:{
      default:Profile,
      'footer-bar':FooterBar
    },
    meta:{
      keepAlive:false
    }
  },
  {
    path: '/ajax',
    name: 'ajax',
    component: Ajax
  },
  {
    //path: '/detail', //1  2
    path: '/detail/:id', //3 
    name: 'detail',
    component: Detail
  },
  {
    //path: '/detail', //1  2
    path: '/*', //3 
    name: 'error',
    component: Error
  }
]

const router = new VueRouter({
  routes
})

export default router
