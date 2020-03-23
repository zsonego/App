const path = require('path')

const webpack = require('webpack')

//导入安装的html-webpack-plugin
const htmlWebpackPlugin = require('html-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'none',
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: { //配置webpack-dev-server的参数
        open: true,
        port: 8080,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader']},
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=44310&name=[hash:8]-[name].[ext]'},
            { test: /\.(eot|svg|ttf|woff|woff2)$/, use: 'url-loader'},
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
            { test: /\.vue$/, use: 'vue-loader'}
        ]
    },
    resolve: {
        alias: {
            // 'vue$': "vue/dist/vue.js"
        }
    }
}