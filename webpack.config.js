const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    resolve: {
        modules: ['./node_modules'],
        extensions: ['.js', '.jsx'],
    },
    entry: {
        main_content_script: './src/modules/content_scripts/main/index.js',
        service_worker: './src/modules/service_worker/index.js',
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
                },
                {
                    from: 'src/modules/popup/index.html',
                    to: 'popup.html',
                },
                {
                    from: 'src/modules/options/index.html',
                    to: 'options.html',
                },
            ],
        }),
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
