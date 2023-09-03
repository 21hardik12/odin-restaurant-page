const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contentHash].js',
        clean: true,
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        }, 
        port:3000,
        hot: true,   
        compress: true,     
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'odin-restaurant-page',
            filename: 'index.html',
            template: './src/template.html',
        })
    ]
}