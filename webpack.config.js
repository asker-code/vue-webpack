// webpack.config.js WEBPACK 配置文件

//声明基础依赖
const path = require('path');
const webpack = require('webpack');

//引入插件 webpack下loader插件 webpack下html插件
const VueLoaderPlugin= require('vue-loader/lib/plugin');
const HTMLPlugin= require('html-webpack-plugin');

//解决跨平台设置NODE_ENV, process.env属性返回一个包含用户环境信息的对象。
const isDev= process.env.NODE_ENV === 'development';

const config = {
    target: 'web',
    entry: path.join(__dirname , '/src/index.js'), //入口
    output: { //出口
        filename: 'build.js',
        path: path.join(__dirname, 'dist')
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: { //加载器
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    // Customize to your liking
                    js: 'babel-loader',
                    scss: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                }
            }
            
        }, {
            test: /\.css$/,
            use: ["vue-style-loader", "css-loader"]  
        },{
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS
            ]
        }, {
            test: /\.styl/,
            use: [
                'style-loader',
                'css-loader',
                {
                loader: 'postcss-loader',
                options: {
                    sourceMap: true
                }
                },
                'stylus-loader'
            ]
        }, {
            test: /\.(jpg|png|gif|svg)$/,
            use: [{
            loader: 'url-loader',
            options: {
                limit: 1024, 
                name: 'img-[name].[ext]' //ext 文件扩展名
            }
            }]
        }]
    },
    plugins: [ //插件
        new webpack.DefinePlugin({ //webpack 编译打包判断环境
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new VueLoaderPlugin(),  //vue-loader@15.x 以上
        new HTMLPlugin()
    ]
}

// 开发环境配置
if(isDev){
    config.devtool = '#cheap-module-eval-source-map'; //代码映射方便调试
    config.devServer= {
        port: 8080,
        host: '0.0.0.0',
        overlay: { //错误提示
            errors: true
        },
        hot: true //热加载
    }
};
//插件
config.plugins.push( 
    new webpack.HotModuleReplacementPlugin(), //启动 HotModule
    new webpack.NoEmitOnErrorsPlugin()  //不现实不必要的报错
);

//启动配置
module.exports = config;