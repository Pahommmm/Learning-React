const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        createProxyMiddleware('/api1',{ //遇见api1前缀的请求，就回出发该代理配置
            target:'http://localhost:5000', //请求转发给谁
            changeOrigin:true, //控制服务器收到的请求头头中Host字段的值
            pathRewrite:{'^/api1':''}
        })
    )
    app.use(
        createProxyMiddleware('/api2',{
            target:'http://localhost:5001',
            changeOrigin:true,
            pathRewrite:{'^/api2':''}
        })
    )
}