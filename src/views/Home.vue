<template>
  <div class="container">
    <!-- 标题 -->
    <van-nav-bar title="首页" class="nav-title">
      <van-Icon name="search" slot="left"></van-Icon>
      <van-Icon name="cart" slot="right"></van-Icon>
    </van-nav-bar>
    <!-- 轮播图 -->
    <div class="carousel">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item,index) in carouselItem" :key="index" class="carousel-item">
          <img v-lazy="item.imgSrc" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 热门商品 -->
    <div class="hot">
      <p class="hot-title">热门商品</p>
      <swiper class="hot-swiper" :options="swiperOption">
        <swiper-slide v-for="(item,index) in carouselItem" :key="index">
          <div class="hot-swiper-content">
            <img v-lazy="item.imgSrc" alt="">
            <div>{{item.name}}</div>
            <!-- <div>￥{{item.price}}</div> -->
          </div>
        </swiper-slide>
      </swiper>
    </div>
    
    <!-- 推荐商品 -->
    <div class="variety">
      <p>推荐商品</p>
      <ul>
        <li v-for="(item ,index) in varietyItem" :key="index" class="variety-item">
          <img :src="item.imgSrc" alt="">
          <p>{{item.name}}</p>
          <div>￥{{item.price}}</div>
        </li>
      </ul>
    </div>
    
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css';
 
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import axios from 'axios';
import URL from "@/serve.config.js";
export default {
  data(){
    return{
      carouselItem:[//轮播图
        {
          name:'img1',
          imgSrc:"http://img4.imgtn.bdimg.com/it/u=2846442650,1599236454&fm=26&gp=0.jpg"
        },
        {
          name:'img2',
          imgSrc:"http://img2.imgtn.bdimg.com/it/u=2597324388,4151724402&fm=26&gp=0.jpg"
        },
        {
          name:'img3',
          imgSrc:"http://img4.imgtn.bdimg.com/it/u=1525497158,1651929206&fm=26&gp=0.jpg"
        },
         {
          name:'img1',
          imgSrc:"http://img4.imgtn.bdimg.com/it/u=2846442650,1599236454&fm=26&gp=0.jpg"
        },
        {
          name:'img2',
          imgSrc:"http://img2.imgtn.bdimg.com/it/u=2597324388,4151724402&fm=26&gp=0.jpg"
        },
        {
          name:'img3',
          imgSrc:"http://img4.imgtn.bdimg.com/it/u=1525497158,1651929206&fm=26&gp=0.jpg"
        }
      ],
      varietyItem:[],
      swiperOption: {
          slidesPerView: 3,
        }
      }
  },
  components:{
    swiper, swiperSlide
  },
  created(){
    // axios.get('https://bird.ioliu.cn/v1?url=https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&sort=recommend&page_limit=20&page_start=0').then((res)=>{
    //   console.log(res)
    // })
    // axios.get('http://www.mxl.com/getlist').then((res)=>{
    //   console.log(res)
    // })
    // axios.get('http://www.mxl.com/getuser').then((res)=>{
    //   console.log(res)
    // })
    //  axios.get('http://www.mxl.com/Reg').then((res)=>{
    //   console.log(res)
    // })
    //  axios.get('http://www.mxl.com/list').then((res)=>{
    //   console.log(res)
    // })
     axios.get(URL.getRandom).then((res)=>{
      console.log(res);
      this.varietyItem=res.data
    })
  }
};
</script>
<style lang="scss">
  .container{
    background: #eee;
    padding:1rem 0; 
  }
  .nav-title{
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 1rem;
    z-index: 99 !important;
  }
  .carousel{
    height: 3rem;
    &-item img{
      width: 100%;
      height: 3rem;
    }
  }
  .hot{
    margin-top: 0.2rem;
    background: #fff;
    &-title{
      width: 100%;
      height: 0.5rem;
      padding-left:0.2rem;
      line-height: 0.5rem;
      box-sizing: border-box;
    }
    &-swiper-content{
      padding: 0.1rem;
      text-align: center;
      box-sizing: border-box;
      img{
        width: 100%;
        height: 3rem;
      }
    }
  }
  .variety{
    margin-top: 0.2rem;
    padding: 0.2rem 0;
    background: #fff;
    text-align: center;
    ul{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    &-item{
      flex-basis: 45%;
    }
    img{
      width: 3rem;
      height: 2rem;
    }
  }
</style>
