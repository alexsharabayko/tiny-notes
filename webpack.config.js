const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcPathRelative = './src';
const srcPathAbsolute = path.join(__dirname, srcPathRelative);
const distPathRelative = `./dist`;
const distPathAbsolute = path.resolve(__dirname, distPathRelative);

module.exports = (env, argv) => {
	const { mode = 'production' } = argv;
	const port = 6001;

	const config = {
		mode,
		context: srcPathAbsolute,
		resolve: {
			extensions: ['.ts', '.tsx', '.jsx', '.js', '.scss'],
		},
		entry: {
			index: './index',
		},
		output: {
			filename: '[name].js',
			chunkFilename: '[name].js',
			path: distPathAbsolute,
		},
		module: {
			rules: [
				{
					test: /\.ts(x?)$/,
					exclude: /node_modules/,
					use: [
						{
							loader: 'ts-loader',
						},
					],
				},
				{
					test: /\.module\.(s[ac]ss|css)$/i,
					use: [
						'style-loader',
						{
							loader: 'css-loader',
							options: {
								url: true,
								modules: {
									localIdentName: '[local]___[hash:base64:8]',
									exportLocalsConvention: 'camelCase',
								},
							},
						},
						'postcss-loader',
						'sass-loader',
					],
				},
				{
					test: /\.(s[ac]ss|css)$/i,
					exclude: /\.module\.(s[ac]ss|css)$/i,
					use: [
						'style-loader',
						{
							loader: 'css-loader',
							options: {
								url: true,
							},
						},
						'postcss-loader',
						'sass-loader',
					],
				},
				{
					test: /\.(png|svg|jpg|gif)$/,
					loader: 'file-loader',
					options: {
						outputPath: 'assets',
						publicPath: `assets`,
						name: '[path][name].[ext]',
					},
				},
			],
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.join(__dirname, srcPathRelative, 'index.html')
			}),
		],
		devServer: {
			static: {
				directory: path.join(__dirname, distPathRelative),
			},
			port: port,
		},
	};

	return config;
};
