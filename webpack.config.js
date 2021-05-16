const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
const patch = require('path');
module.exports = {
    output: {
        path: patch.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
        publicPath: '/'
    },
    performance:{
        hints:false
    },

    devServer: {
        port: 8000,
        watchContentBase: true,
        historyApiFallback:true,
        open:true,
        contentBase:'./dist',
        // hot:true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: {
                    loader: 'babel-loader',

                }
            },
            {
                test: /\.(css|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader']
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|)$/i,
                type: 'asset/resource',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin()
    ]
};