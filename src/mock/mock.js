import Mock from "mockjs";
import data from './data.json';
Mock.mock("http://www.mxl.com/getlist",{data:data.list});
Mock.mock("http://www.mxl.com/getuser",{
    "name|2":"马",
    "age|18-35":24
})
Mock.mock("http://www.mxl.com/Reg",{
    "reg":/[a-z][A-Z][0-9]/,
    "reg1":/\d{5,10}/
})
Mock.mock("http://www.mxl.com/list",{
    "info||10-20":[
        {
            "index|+1":1,
            "name":'@first @last',
            "id":'@integer(1,999)',
            "date":'@datetime',
            "img":'@image("200*200")',
            "text":'@sentence(100,200)'
        }
    ]
});
let Random = Mock.Random;
let data1= () =>{
    let datalist=[];
    for (let i = 0; i < 100; i++) {
        let a={
            name:Random.ctitle(5,20),
            imgSrc:Random.dataImage('125x125',"商品"+Random.integer(1,100)),
            price:Random.integer(100,1000),
            ownwe:Random.cname()
        }
        datalist.push(a)
    }
    return datalist
}
Mock.mock("http://www.mxl.com/Random",data1)