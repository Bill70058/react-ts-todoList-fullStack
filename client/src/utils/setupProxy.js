const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/api',
        proxy({
            target : 'http:/127.0.0.1:5000/api',
            changeOrigin : true,  // 设置跨域请求
            PathRewrite : {
                '^/api' : '' // 将/api/v1 变为 ''
            }
        })
    );
};