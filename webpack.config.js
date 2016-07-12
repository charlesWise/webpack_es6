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
            }
        ]
    }
}