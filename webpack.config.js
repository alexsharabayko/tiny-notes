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
			index: './index.tsx',
		},
		output: {
			filename: '[name].js',
			chunkFilename: '[name].js',
			path: distPathAbsolute,
			assetModuleFilename: 'assets/[name][ext][query]'
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
						{
							loader: 'sass-loader',
							options: {
								sassOptions: {
									indentWidth: 4,
									includePaths: [path.join(__dirname, './src/styles')],
								},
							},
						}
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
						{
							loader: 'sass-loader',
							options: {
								sassOptions: {
									indentWidth: 4,
									includePaths: [path.join(__dirname, './src/styles')],
								},
							},
						},
					],
				},
				{
					test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
					type: "asset",
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
			historyApiFallback: true,
			port: port,
		},
	};

	return config;
};
