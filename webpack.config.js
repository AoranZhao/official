const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, '/client/src/index.jsx'),

    output: {
        path: path.join(__dirname, '/client/dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [path.join(__dirname, '/client/src')],
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-proposal-class-properties']
                    }
                }
            }, {
                test: /\.s?css$/,
                include: [path.join(__dirname, '/client/src')],
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.(jpe?g|gif|png|svg|woff|ttf|ico|ttc|wav|mp3)$/,
                loader: "url-loader?limit=8192&name=images/[name]-[hash].[ext]"
            }
        ]
    },

    // watch: true
}