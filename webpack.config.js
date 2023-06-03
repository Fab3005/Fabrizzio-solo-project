const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './frontend/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './frontend/index.html',

        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules\/(?!react-router-dom)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        sourceMap: false,
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.svg$/,
                use: ['file-loader'],
            }
        ]
    },
    devServer: {
        static: {
          directory: path.resolve(__dirname, 'client/components/public'),
          publicPath: 'bundle.js',
        },
        proxy: {//why does is start with 'api' here?
          '/api/**': 'http://localhost:3001',
        },
      
    }
}