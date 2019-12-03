<template>
  <div>
    <van-nav-bar title="商品类型"></van-nav-bar>
    <div class="category">
      <van-col span="6" class="nav">
        <ul>
          <li
            v-for="(item, index) in types"
            :key="index"
            :class="{ active: active == index }"
            @click="selectCategory(item.typeId, index)"
          >
            {{ item.typeName }}
          </li>
        </ul>
      </van-col>
      <van-col span="18" class="container">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <van-list class="content" @load="onLoad" :finished="finished" v-model="isLoading">
            <div
              class="content-item"
              v-for="(item, index) in productList"
              :key="index" @click="goDetail(item._id)"
            >
              <img :src="item.img" alt="" />
              <p class="content-item-name">{{ item.name }}</p>
              <p>￥{{ item.price }}</p>
            </div>
          </van-list>
        </van-pull-refresh>
      </van-col>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/serve.config.js";
export default {
  data() {
    return {
      types: [],
      active: 0,
      productList: [],
      typeId: 1,
      start: 0,
      limit: 10,
      finished: false,
      isLoading:false
    };
  },
  created() {
    axios({
      url: url.getTypes
    })
      .then(res => {
        console.log(res);
        this.types = res.data;
        this.getProducList();
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    selectCategory(typeId, index) {
      this.active = index;
      this.typeId = typeId;
      this.productList = [];
      this.finished = false;

      this.getProducList();
    },
    getProducList() {
      this.isLoading=true
      axios({
        url: url.getProductsByType,
        method: "get",
        params: {
          typeId: this.typeId,
          start: this.productList.length,
          limit: this.limit
        }
      })
        .then(res => {
          
          //console.log(res);
          //this.productList.push(...res.data)
          if (res.data.length != 0) {
            this.productList = this.productList.concat(res.data);
          } else {
            this.finished = true;
          }
          this.isLoading=false;
        })
        .catch(err => {
          console.log(err);
        });
    },
    onLoad() {
      setTimeout(() => {
        this.getProducList();
      }, 500);
    },
    onRefresh(){
      this.productList = [];
      this.getProducList();
    },
    goDetail(id){
      //console.log(id);

      //1 与post相似
      // this.$router.push({
      //   name:'detail',
      //   params:{
      //     id:id
      //   }
      // })

      //2 与get相似
      // this.$router.push({
      //   path:'/detail',
      //   query:{
      //     id:id
      //   }
      // })

      //3 
      this.$router.push(`/detail/${id}`)
    }
  }
  
};
</script>

<style lang="scss" scoped>
.nav {
  background: #eee;
  li {
    height: 0.6rem;
    line-height: 0.6rem;
    border-bottom: 1px solid #fff;
    padding: 3px;
    text-align: center;
  }
  .active {
    background: #fff;
  }
}
.container {
  position: fixed;
  top: 0.6rem;
  bottom: 1rem;
  right: 0;
  overflow: scroll;
}
.content {
  display: flex;
  padding-bottom: 1rem;
  flex-wrap: wrap;
  &-item {
    width: 40%;
    padding: 0 10px;
    text-align: center;
    img {
      width: 2rem;
      height: 2rem;
    }
    &-name {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
