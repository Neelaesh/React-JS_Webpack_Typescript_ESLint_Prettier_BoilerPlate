/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.min.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'],
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [{ loader: 'ts-loader' }, { loader: 'eslint-loader' }],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
            },
            {
                test: /\.(png|svg|jpg|gif)$/i,
                exclude: /node_modules/,
                use: ['file-loader'],
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        contentBase: `${__dirname}./dist`,
        inline: true,
        port: 3003,
    },
};
