var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/icons_list.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'icons_list.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'icons_list.html',
            template: './src/icons_list.html'
        })
    ]
}