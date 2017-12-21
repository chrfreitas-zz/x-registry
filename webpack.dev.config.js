const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/js/App.js',
    output: {
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
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader:  'eslint-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './views/index.html'})
    ]
};

module.exports = config;
