const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        index: '/index.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
            {
                from: path.resolve(__dirname, 'src/favicon.ico'),
                to: path.resolve(__dirname, 'dist')
            }]
        }),
        new HtmlWebpackPlugin({
          template: '/index.html'
        }),
      ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.ttf/,
                use: ['file-loader']
            },
            {
                test: /\.js$/,
                exlude: /node_modules/,
                loader:{
                    loader: 'babel-loader',
                    options: {
                        presets:[
                            '@babel/preset-react'
                        ]
                    }
                }
            }
        ]
    },
    devServer:{
        port: 4200
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    }
} 