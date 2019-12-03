<template>
  <div>
    <van-tabs>
      <van-tab title="登录">
        <van-cell-group>
          <van-field label="用户名" placeholder="请输入用户名" v-model="loginUserName" required clearable></van-field>
          <van-field label="密码" placeholder="请输入密码" v-model="loginPassword" required clearable type="password"></van-field>
        </van-cell-group>
        <div>
          <van-button type="primary" size="large" @click="loginHandler">登录</van-button>
        </div>
      </van-tab>
      <van-tab title="注册">
         <van-cell-group>
          <van-field label="用户名" placeholder="请输入用户名" v-model="registUserName" required clearable></van-field>
          <van-field label="密码" placeholder="请输入密码" v-model="registPassword" required clearable  type="password"></van-field>
        </van-cell-group>
        <div>
          <van-button type="primary" size="large" @click="registHandler">注册</van-button>
        </div>
      </van-tab>
    </van-tabs>   
  </div>
</template>

<script>
import axios from "axios";
import url from "@/serve.config.js";
import {mapActions} from "vuex";
export default {
  data(){
    return{
      loginUserName:'',
      loginPassword:'',
      registUserName:'',
      registPassword:''
    }
  },
  methods:{
    ...mapActions(['loginAction']),
    //注册的处理方法
    registHandler(){
      axios({
        url:url.registUser,
        method:'post',
        data:{
          userName:this.registUserName,
          password:this.registPassword
        }
      }).then(res=>{
        if (res.data.code == 200) {
          this.$toast.success('注册成功');
          this.registUserName='';
          this.registPassword=''
        }else{
          this.$toast.fail('注册失败')
        }
      }).catch(err=>{
        console.log(err)
        this.$toast.fail('注册失败')
      })
    },
    //登录的处理方法
    loginHandler(){
      axios({
        url:url.loginUser,
        method:'post',
        data:{
          userName:this.loginUserName,
          password:this.loginPassword
        }
      }).then((res)=>{
        console.log(res);
        if (res.data.code==200) {
          
          new Promise((resolve)=>{
            setTimeout(()=>{
              resolve()
            },1000)
          }).then(()=>{
            this.$toast.success('登录成功');
            this.loginAction(res.data.userInfo);
            this.$router.go(-1);
          })
        }
      }).catch((err)=>{
        console.log(err)
        this.$toast.fail('保存登录状态失败')
      })
    }
  }
}
</script>

<style lang="scss"  scoped>

</style>