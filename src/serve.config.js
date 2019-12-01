const MOCKURL ="http://www.mxl.com/";

const SERVERURL = "http://localhost:3000/";//正式url

const URL = {
    getRandom : MOCKURL+"Random",
    getlist: MOCKURL+"list",
    registUser:SERVERURL+"user/registUser",
    loginUser:SERVERURL+"user/loginUser",
}

export default URL;