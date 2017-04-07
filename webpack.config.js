const path = require('path')

module.exports = {
	entry: [
		'./src/index.js'
	],
	output: {
		filename: 'bundle.js',
		path: __dirname
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devServer: {
		contentBase: __dirname,
		historyApiFallback: true,
		port: 8080
	}
}
