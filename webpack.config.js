const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackLiveReload = require('html-webpack-live-reload-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: './index.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.bundle.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './src',
        hot: true,
    },
    // 決定我可以載入什麼檔案格式
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
            use: [{
                loader: 'style-loader', // inject CSS to page
            }, {
                loader: 'css-loader', // translates CSS into CommonJS modules
            }, {
                loader: 'postcss-loader', // Run post css actions
                options: {
                    postcssOptions: {
                        // postcss plugins, can be exported to postcss.config.js
                        plugins: function () {
                        return [
                            require('autoprefixer')
                        ];
                        }
                    }
                }
            }, {
                loader: 'sass-loader' // compiles Sass to CSS
                },
            ]
            },
            {
                test: /\.html$/,
                loader: "raw-loader" // loaders: ['raw-loader']，這個方式也是可以被接受的。
            }
        ]
    },
    plugins: [//這邊以下是新增
        // new webpack.HotModuleReplacementPlugin(),
        // new HtmlWebpackPlugin({
        //     template:"./index.html"
        // }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'//這邊以上是新增
        })
    ]
}