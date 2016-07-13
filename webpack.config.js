/**
 * Created by chenrs on 2016/7/12.
 */
'use strict';
var webpack = require('webpack');
module.exports = {
    entry: {
        app: './src/js/app.js'
    },
    output: {
        publicPath: '/build/', //服务器根路径
        path: './build/', //编译到当前目录
        filename: '[name].js' //编译后的文件名字
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel?presets[]=es2015,presets[]=stage-0'
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css', 'autoprefixer']
            },
            {
                test: /\.less/,
                loaders: ['style', 'css', 'autoprefixer', 'less'],
            },
            {
                test: /\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/,
                loader: 'file-loader?name=[hash].[ext]'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=12000&name=[hash].[ext]'  //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
            },
            {
                test: /\.jsx$/,
                loaders: ['jsx', 'babel?presets[]=es2015,presets[]=stage-0,presets[]=react']
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js') //将公用模块，打包进common.js
    ],
    resolve: {
        extensions: ['', '.js', '.jsx'] //后缀名自动补全
    }
}