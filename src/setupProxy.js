const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){

  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://192.168.73.135:9002',
      changeOrigin: true
    })
  );

}