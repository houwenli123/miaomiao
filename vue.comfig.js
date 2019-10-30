module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://115.47.127.181:3000',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
}