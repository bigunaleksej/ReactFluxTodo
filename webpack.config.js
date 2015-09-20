var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path'),
    srcPath = path.join(__dirname, 'src');

module.exports = {
    target: 'web',
    cache: true,
    entry: {
        module: path.join(srcPath, 'module.js'),
        common: ['react', 'flux']
    },
    resolve: {
        root: srcPath,
        extensions: ['', '.js'],
        modulesDirectories: ['node_modules', 'src']
    },
    output: {
        path: path.join(__dirname, 'tmp'),
        publicPath: '',
        filename: '[name].js'
    },

    module: {
        loaders: [
            { test: /\.js?$/, exclude: /node_modules/, loader: 'babel?cacheDirectory' },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: 'src/index.html'
        })
    ],

    debug: true,
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './tmp'
    }
};