const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    resolve: {
        modules: ['./node_modules'],
        extensions: ['.js', '.jsx'],
    },
    entry: {
        "content-script": './src/modules/content-script/index.js',
        "service-worker": './src/modules/service-worker/index.js',
        popup: './src/modules/popup/index.js',
        options: './src/modules/options/index.js',
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist/chrome'),
        publicPath: '',
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/manifest.json',
                    to: 'manifest.json',
                }
            ],
        }),
        new HtmlWebpackPlugin({
            filename: 'options.html',
            inject: false,
            templateParameters: {
                name: 'Options',
                module: 'options'
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'popup.html',
            inject: false,
            templateParameters: {
                name: 'Popup',
                module: 'popup'
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' }
            }
        ]
    }
};
