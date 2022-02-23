const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const HtmlWebpackLiveReload = require('html-webpack-live-reload-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    // context: path.resolve(__dirname, 'src'),
    // entry: {
    //     home: './index.js',
    // },
    entry: {
        home: './src/pages/home/home.js',
        table: './src/pages/table/table.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name]/[name].js',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './src',
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                }
            },
            {
            test: /\.(scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../', // 指定公共路徑
                        },
                    },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS modules
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader', // compiles Sass to CSS
                        options: {
                            sourceMap: true
                        }
                },
            ]
            },
            {
                test: /\.html$/,
                loader: "raw-loader" // loaders: ['raw-loader']，這個方式也是可以被接受的。
            },
            {
                test: /\.ejs$/,
                use: [
                {
                    loader: 'ejs-loader',
                    options: {
                    esModule: false,
                    variable: 'data',
                    },
                },
                ],
            },
        ]
    },
    plugins: [//這邊以下是新增
        // new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/pages/home/home.html",
            filename: 'home.html',
            chunks: ['js','home'],
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/table/table.html",
            filename: 'table.html',
            chunks: ['js','table'] // 預設會將打包出的所有 js 插入 html。故需指明頁面需要的模組
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'//這邊以上是新增
        }),
        new MiniCssExtractPlugin({
            // path: path.resolve(__dirname, 'dist'),
            filename: 'css/[name].css'
        })
    ],
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //         // 打包業務中公共代碼
    //             common: {
    //                 name: "common",
    //                 chunks: "initial",
    //                 minSize: 1,
    //                 priority: 0,
    //                 minChunks: 2, // 同時引用了2次才打包
    //             },
    //             // 打包第三方庫的文件
    //             vendor: {
    //                 name: "vendor",
    //                 test: /[\\/]node_modules[\\/]/,
    //                 chunks: "initial",
    //                 priority: 10,
    //                 minChunks: 2, // 同時引用了2次才打包
    //             }
    //         }
    //     },
    //     runtimeChunk: "single" // 運行時代碼
    // }
}