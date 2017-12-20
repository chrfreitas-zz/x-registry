const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/js/App.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};

module.exports = config;
