const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = merge(common, {
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new UglifyJSPlugin(),
        // new BrotliPlugin({
        //     asset: '[path].br[query]',
        //     test: /\.(js|css|html|svg)$/,
        //     threshold: 10240,
        //     minRatio: 0.8
        // }),
        // new CompressionPlugin({
        //     asset: '[path].gz[query]',
        //     algorithm: 'gzip', // zopfli
        //     test: /\.(js|css|html|svg)$/,
        //     threshold: 10240,
        //     minRatio: 0.8
        // })
    ]
});
