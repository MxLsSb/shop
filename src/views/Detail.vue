<template>
<div>
    <van-nav-bar title="商品详情" left-text="返回" @click-left="$router.go(-1)"></van-nav-bar>
    <img :src="detail.img" alt="" class="detail-img"/>
    <div class="detail">
        <p class="detail-name">{{detail.name}}</p>
        <p class="detail-price">￥{{detail.price}}</p>
        <p>公司：{{detail.company}}</p>
        <p>产地：{{detail.city}}</p>
    </div>
    <div class="toolbar">
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服"/>
            <van-goods-action-icon icon="cart-o" text="购物车"/>
            <van-goods-action-button type="warning" text="加入购物车" @click="addcart()"/>
            <van-goods-action-button type="danger" text="立即购买"/>
        </van-goods-action>
    </div>
</div>
</template>

<script>
import axios from "axios";
import url from "@/serve.config.js"
import {mapState} from 'vuex'
export default {
    data(){
        return{
            detail:{}
        }
    } , 
    computed:{
        ...mapState(['userInfo'])
    } ,
    created(){
        console.log(this.$route.params.id);
        // console.log(this.$route.query.id);
        axios({
            url:url.getDetail,
            method:'get',
            params:{
                id:this.$route.params.id
            }
        }).then(res=>{
            console.log(res)
            this.detail=res.data
        }).catch(err=>{
            console.log(err)
        })
    },
    methods:{
        addcart(){
            //检查用户是否登录  使vuex保存的登录状态
            //如果想用后端保存   使用kos-session   redis
            if (JSON.stringify(this.userInfo) === '{}') {
                this.$toast.fail('请先登录');
                setTimeout(()=>{
                   this.$router.push("/profile") 
                },1000)
                
            }else{
                //插入购物车
                axios({
                   url:url.addCart ,
                   method:'post',
                   data:{
                       productId:this.detail._id,
                       userId:this.userInfo._id
                   }
                }
                    
                ).then((res)=>{
                    console.log(res);
                    if(res.data.code==200){
                        this.$toast.success(res.data.message)
                    }else{
                        this.$toast.fail(res.data.message)
                    }
                }).catch((err)=>{
                    console.log(err)
                })
                
            }
        }
    }
}
</script>

<style lang="scss" scoped >
    .detail{
        padding: 0.2rem;
        &-img{
            width: 100%;
            height: 5rem;
        }
        &-name{
            color:#333;
            font-weight: bolder
        }
        &-price{
            color:#ff7360;
            font-size: 0.4rem;
        }
    }
</style>