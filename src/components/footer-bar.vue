<template>
  <van-tabbar v-model="active" @change="change">
      <van-tabbar-item icon="wap-home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="records" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="cart" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/profile">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script>
export default {
  data(){
    return{
      active:0
    }
  },
  created(){
    this.active = parseInt(localStorage.getItem('active')) 
  },
  methods:{
    change(active){
      console.log(active);
      localStorage.setItem('active',active)
    }
  }
}
</script>

<style  lang="scss"  scoped>
 .footer-bar{
    display: flex;
    background: #eee;
    position: fixed;
    bottom:0;
    width:100%;
    height: 1rem;
    line-height: 1rem;
    &-item{
      flex-grow: 1;
      text-align: center;
    }
  }
</style>