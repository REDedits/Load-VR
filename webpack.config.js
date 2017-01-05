var path = require('path');
var webpack = require('webpack');
require('babel-polyfill');

module.exports = {
	entry: [
	'webpack-dev-server/client?http://localhost:8080',
	'webpack/hot/only-dev-server',
	'./src/index.jsx'
	],
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		noParse: [
      		/node_modules\/aframe\/dist\/aframe.js/,
    	],
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'react-hot!babel'
		},
		{
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
        },
        {
        	test: /\.json$/,
        	loader: 'json-loader'
      	}]
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.json'],
		fallback: path.join(__dirname, 'node_modules'),
    	modulesDirectories: [
      		'src/js',
      		'node_modules',
    	]
	},
	resolveLoader: {
    fallback: [path.join(__dirname, 'node_modules')]
  	}, 
	devServer: {
		contentBase: './dist',
		hot: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};