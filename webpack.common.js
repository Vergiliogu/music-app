const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
	entry: './src/index.tsx',
	output: {
		filename: 'bundle.[contenthash].js',
		path: path.resolve(__dirname, 'build'),
		clean: true,
	},
	target: "web",
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		// alias: {}
	},
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
		]
	},
	devServer: {
		devMiddleware: {
			writeToDisk: false
		},
		static: {
			directory: './build'
		},
		historyApiFallback: true,
		port: 8080
	},
	plugins: [
		new HtmlWebpackPlugin({template: './public/index.html'}),
		new ESLintPlugin(),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: './public/favicon.ico',
				}
			],
		})
	]
}
