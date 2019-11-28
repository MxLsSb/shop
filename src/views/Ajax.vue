<template>
<div>
     <van-button type="primary" @click="getData">获取数据</van-button> 
     <van-button type="danger" @click="clearData">清空数据</van-button> 
     <ul>
         <li v-for="(item ,index) in list" :key="index">
            {{index+1}}:{{item.title}}
         </li>
     </ul>
</div>
</template>

<script>
export default {
    methods:{
        ajax(){
            //ajax原理
            let url="https://bird.ioliu.cn/v1?url=https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&sort=recommend&page_limit=20&page_start=0";
            let xmlhttp;
            //1创建XMLHttpRequest对象
            xmlhttp=new XMLHttpRequest()
            
            //2发送请求
            xmlhttp.open('GET',url,true);
            xmlhttp.send();

            //3服务器端的响应
            xmlhttp.addEventListener('readystatechange',()=>{
                //4 判断返回值并处理数据
                if(xmlhttp.readyState==4&&xmlhttp.status==200){
                    let obj = JSON.parse(xmlhttp.responseText);
                    console.log(obj);
                    this.list=obj.subjects
                }
            })

        },
        getData(){
            this.ajax();
        },
        clearData(){
            this.list=[];
        }
    },
    data(){
        return {
            list:[]
        }
    }
}
</script>

<style>

</style>