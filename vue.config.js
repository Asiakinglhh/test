const webpack = require('webpack')

module.exports = {
    // 基本路径 baseURL已经过时
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    // 输出文件目录：在npm run build时，生成文件的目录名称 
    outputDir: 'dist',
    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 
    // assetsDir: "assets",
    // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 
    productionSourceMap: false,
    // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变)
    filenameHashing: false,
    // 代码保存时进行eslint检测
    lintOnSave: false,
    // webpack-dev-server 相关配置
    devServer: {
        // 自动打开浏览器
        open: true,
        host: 'localhost',
        // 端口
        port: 9090,
        // https
        https: false,
        // 热更新
        hotOnly: false,
        // 使用代理
        proxy: {
            '/api': {
                // 目标代理服务器地址
                target: 'http://172.26.18.240',
                // 开启代理，本地创建一个虚拟服务器 允许跨域
                changeOrigin: true, 
                //请求的时候使用这个api就可以
                pathRewrite: {
                    '^/api': ''
                }
            },
        },
    },
    // webpack配置(链式操作/高级)
    // chainWebpack: config => {
    //     config.plugin('provide').use(webpack.ProvidePlugin, [{
    //         $: 'jquery',
    //         jquery: 'jquery',
    //         jQuery: 'jquery',
    //         'window.jQuery': 'jquery'
    //     }])
    // },
    // 简单的配置方式
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jquery: 'jquery',
                jQuery: "jquery",
                "windows.jQuery": "jquery"
            })
        ]
    }
}