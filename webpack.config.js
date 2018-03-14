const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const config = {
	entry: {
		'app': './src/app/app.module.js',
		'vendor': './src/app/vendor.module.js'
	},
	devtool: 'source-map',
	output: {
		filename: 'libs/[name].bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	resolve: {
    alias: {
      modules: __dirname + '/node_modules'
    }
  },
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: ['ng-annotate-loader', 'babel-loader']
			},
			{
				test: /\.(scss)$/,
				use: ExtractTextWebpackPlugin.extract({
					use: [
							{
								loader: "css-loader",
								options: {
									minimize: true
								}
							},
							{
								loader: "sass-loader",
                options: {
									sourceMap: true,
			            data: '@import "vars";',
			            includePaths: [
			              path.join(__dirname, 'src/app/styles/base')
			            ]
                }
							}
					]
				})
			},
			{
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
	    },
			// for fixing of loading bootstrap icon files
			{
				test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
				loader: 'url-loader?limit=10000',
				options: {
					name: './fonts/[name].[ext]'
				}
			},
			{
				test: /\.(eot|ttf)$/,
				loader: 'file-loader',
				options: {
					name: './fonts/[name].[ext]'
				}
			},
			{ test: /\.html$/, loader: 'html-loader' }
		]
	},
	plugins: [
		new CleanWebpackPlugin('build'),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new webpack.ProvidePlugin({
			jQuery: 'jquery',
			$: 'jquery',
			jquery: 'jquery'
		}),
		new ExtractTextWebpackPlugin('app/styles/styles.css')
	],
	devServer: {
		port: 3000,
		contentBase: './src/',
		historyApiFallback: true
	}
};

module.exports = (env = {}) => {
		// Use env.<YOUR VARIABLE> here:
  console.log('Production: ', env.production) // true

	if (env.production === true) {
		console.log('i will') // true
		config.plugins.push(...[
			new webpack.optimize.UglifyJsPlugin({
				comments: false,
				sourceMap: true,
			}),
			new webpack.optimize.CommonsChunkPlugin({
				name: 'vendor',
				filename: 'libs/[name].bundle.js'
			}),
			new OptimizeCssAssetsWebpackPlugin()
		])
	}

  return config;
}
