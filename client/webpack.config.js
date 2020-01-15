const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve( __dirname, './dist' ),
        filename: '[name].[hash].js'
    },
    module: {
      rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader', options: {} }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    { loader: 'css-loader', options: {} },
                    { 
                        loader: 'postcss-loader', 
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')({
                                    'browsers': ['> 1%', 'last 2 versions']
                                }),
                            ]
                        }
                    },
                    { loader: 'sass-loader', options: {} },
                ]
            }
        ]
    },
    devServer: {
        port: 5100,
        contentBase: ['./src', './dist'],
        writeToDisk: false,
        inline: true,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'JavaScript To-do List',
            template: './src/index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'style.[chunkhash].css'
        }),
        new CleanWebpackPlugin(),
    ],
    optimization: {   
        minimizer: [     
            new TerserPlugin(),     
            new OptimizeCSSAssetsPlugin()   
        ] 
    }
};