const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

module.exports ={
    mode: 'development',
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test:/\.html$/,
                use:[{
                    loader:'html-loader',
                    options:{minimize:true}
                }]
            }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template:'./index.html',
            filename:'./index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        contentBase:path.join(__dirname),
 
        port:8033,
        host:'127.0.0.1',
        hot:true
    }
};