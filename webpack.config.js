const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // If mode is "production", the app is optimized.
    // If mode is "development", javascript files output with adding source map.
    mode: 'development',
    entry: __dirname + "/src/index.jsx", // トランスパイル対象
    plugins: [
        new HTMLWebpackPlugin({
            // title: 'Code Splitting',
            template: './src/index.html'
        }),
        new ExtractTextPlugin('style.css'),
        new webpack.LoaderOptionsPlugin({ options: {} })
    ],
    output: {
        path: __dirname + '/dist', // 出力先ディレクトリ
        filename: 'bundle.js' // 入力されたファイルをまとめて出力するときのファイル名
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: "babel-loader", // Babelをwebpackで利用できるようにする
                options: {
                    presets: ['react', ["env", {
                        "targets": {
                            "browsers": [
                                "last 2 versions",
                                "safari >= 7"
                            ]
                        }
                    }]] // reactとes6をトランスパイル対象とする
                }
            },
            {
                test: /\.(scss|css)$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                // enforce: 'pre'を指定することによって
                // enforce: 'pre'がついていないローダーより早く処理が実行される
                // babel-loaderで変換する前にコードを検証したいため、指定が必要
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),   // distディレクトリのファイルを確認する
        port: 9999,                                     // 3000ポートを利用
        progress        : true,                         // Show progress on console.
        inline          : true,                         // The mode of inline.
        clientLogLevel  : 'info',                       // The log level(none, error, warning, info)
        publicPath      : '/dist/',                     // Temporary path on virtual memory
        hot             : true,                         // use HMR
        watchOptions    : {
            poll            : true                      // ファイルの更新が正しく検知されない場合に利用
        }
    },
    resolve: {
        extensions: ['.js', '.jsx'] // jsファイル, jsxファイルを対象とする
    }
};
