const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');



module.exports = {
    entry: {
        jamboUI: './frontend/jambo-ui/index.js',
    },
    output: {
        path: path.resolve(__dirname, '../public/'),
        filename: '[name]/[name].min.js'
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {presets: ['es2015']},
                exclude: /node_modules/
            },
            {
                test: /\.(ttf|eot|woff|woff2|svg)$/,
                loader: 'file-loader',
                options: {
                    name: './fonts/[name].[ext]',
                    publicPath:'../',
                    outputPath:'./'
                },
            }
        ]
    },
    plugins: [
        new uglify(),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name]/[name].min.css"
        }),
        new OptimizeCSSAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            // cssProcessorOptions: cssnanoOptions,
            cssProcessorPluginOptions: {
                preset: ['default', {
                    discardComments: {
                        removeAll: true,
                    },
                    normalizeUnicode: false
                }]
            },
            canPrint: true
        })
    ]
}
