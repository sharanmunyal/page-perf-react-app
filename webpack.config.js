module.exports = {
	entry: "./app/components/Main.js",
	output: {
		path: __dirname,
		filename: "dist/bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel',
				exclude: /(node_modules|bower_components)/,
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
};