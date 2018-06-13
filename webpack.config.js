'use strict';

const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname + '/app',
    entry: {
        app: __dirname + '/app/js/app'
    },
    output: {
        path: __dirname + '/build',
        filename: '[name].js'
    },
    resolve: {
        alias: {
            'vue': __dirname + '/node_modules/vue/dist/vue.common.js'
        }
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.vue$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader'
                        }),
                        scss: ExtractTextPlugin.extract({
                            use: 'css-loader!sass-loader',
                            fallback: 'vue-style-loader'
                        }),
                        sass: ExtractTextPlugin.extract({
                            use: 'css-loader!sass-loader?indentedSyntax',
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'file-loader',
                options: {
                    publicPath: '/build'
                }
            },
            {
                test: /\.svg$/,
                loader: 'vue-svg-loader'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })
            }
        ]
    },
    resolveLoader: {
        alias: {
            'scss-loader': 'sass-loader',
        },
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new CleanWebpackPlugin(['build'], {
            root: __dirname + '/public',
            verbose: false,
            dry: false,
        })
    ],
    stats: {
        assets: true,
        children: false
    }
};