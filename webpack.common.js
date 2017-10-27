const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, './src'),
    resolve: {
        modules: ['node_modules', './src'],
        extensions: ['.js', '.jsx']
    },
    entry: './client.js',

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: 'index.ejs',
            title: 'Alexander Shchegol',
            favicon: 'images/favicon.ico'
        }),

        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
    ],

    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: ['env'],
                        plugins: ['transform-runtime']
                    }
                }
            },
            { test: /\.jsx?$/, exclude: [/node_modules/, /dist/], use: 'babel-loader' },
            { test: /\.json$/, use: 'json-loader' },
            { test: /\.(woff|woff2|ttf|eot)/, loader: 'url-loader?limit=1' },
            { test: /\.gif$/, use: 'url-loader?limit=10000&mimetype=image/gif' },
            { test: /\.jpg$/, use: 'url-loader?limit=10000&mimetype=image/jpg' },
            { test: /\.png$/, use: 'url-loader?limit=10000&mimetype=image/png' },
            { test: /\.svg/, use: 'url-loader?limit=26000&mimetype=image/svg+xml' },
        ]
    }
};