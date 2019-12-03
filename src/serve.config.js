const MOCKURL ="http://www.mxl.com/";

const SERVERURL = "http://localhost:3000/";//正式url

const URL = {
    getRandom : MOCKURL+"Random",
    getlist: MOCKURL+"list",
    registUser:SERVERURL+"user/registUser",
    loginUser:SERVERURL+"user/loginUser",
    getTypes:SERVERURL+"type/getTypes",
    getProductsByType:SERVERURL+"product/getProductsByType",
    getDetail:SERVERURL+"product/getDetail",
    addCart:SERVERURL+"cart/addCart",
    getCart:SERVERURL+"cart/getCart"
}

export default URL;