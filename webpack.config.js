const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
     },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        clean: true,
        assetModuleFilename: 'images/[name][ext]',
    },
    devtool: 'inline-source-map',
    devServer: {
        // contentBase: path.resolve(__dirname, 'dist'), {{unncomment and run npm build to see the right server options}}
        port: 6969, //default 8080
        open: true,//serve the application on your default web browser 
        hot: true,//hot module reloading 
        compress: true, 
        historyApiFallback: true,
        watchFiles: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/, 
                use: ['style-loader', 'css-loader'],
        
            }, 

            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
              //asset resource loader give us the image as module which we import
              {test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/,
              type:'asset/resource'},
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack 5',
            filename: 'index.html',
            h1: 'Please log in',
            template: path.resolve(__dirname, 'src/temp.html')
        })
    ]
}   