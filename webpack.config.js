const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // If mode is "production", the app is optimized.
    // If mode is "development", javascript files output with adding source map.
    mode: 'development',
    entry: __dirname + "/src/index.jsx", // トランスパイル対象
    plugins: [
        new ExtractTextPlugin('[name].css')
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
                            "browsers": ["last 2 versions", "safari >= 7"]
                        }
                    }]
                    ] // reactとes2015をトランスパイル対象とする
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
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
