module.exports = {
    type: 'react-app',
    devServer: {
        proxy: {
            "/api": {
                target: "http://localhost:80",
                pathRewrite: {"^/api": ""},
                changeOrigin: true,
                secure: false
            }
        }
    }
}
