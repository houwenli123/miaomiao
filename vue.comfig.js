module.exports = {
    devServer: {
        proxy: {
            '': {
                target: 'http://115.47.127.181:3000',
                changeOrigin: true,
                ws: true,
            }
        }
    }
}