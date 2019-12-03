const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin")
module.exports = {
    // 选项...
    productionSourceMap:false,
    configureWebpack: config =>{
        if(process.env.NODE_ENV==='production'){
            return [
                new CompressionPlugin({
                    test:/\.js$|\.css$|\.html$/,
                    threshold:10240,
                    deleteOriginalAssets:false
                })
            ]
        }
    },
    publicPath: './'
}