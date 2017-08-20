var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var extractPlugin = new ExtractTextPlugin({
	filename: "main.css"
});

module.exports = {
	entry: "./src/js/app.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: "/dist"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["es2015"]
						}
					}
				]
			},
			{
				test: /\.scss$/,
				use: extractPlugin.extract({
					// First compile the scss into css and then use the css loader so
					// that webpack knows what to with imported css/scss files
					use: ["css-loader", "sass-loader"]
				})
			}
		]
	},
	plugins: [
		extractPlugin
	]
};