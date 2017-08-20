
var path = require("path");
var webpack = require("webpack");
/*
Remember in package.json we used to have parameters at the end of webpack and webpack-dev-server :

"scripts": {
	"build": "webpack-dev-server --entry ./src/js/app.js --output-filename ./dist/bundle.js",
	"build:prod": "webpack-dev-server --entry ./src/js/app.js --output-filename ./dist/bundle.js -p"
},

Well if you create a webpack.config.js file you don't need those clunky parameters there becuase
it reads from the config file instead :

"scripts": {
	"build": "webpack-dev-server --entry ./src/js/app.js --output-filename ./dist/bundle.js",
	"build:prod": "webpack --entry ./src/js/app.js --output-filename ./dist/bundle.js -p"
},

*/
module.exports = {
	entry: "./src/js/app.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js", // "dist/bundle.js also works"
		publicPath: "dist" // Where exactly is bundle.js? Could be in a CDN. See https://github.com/webpack/docs/wiki/configuration
	},
	module: { // Loaders are applied to the files that webpack finds on its import module traversal
		rules: [
			{
				test: /\.css$/,
				//loader: "css-loader"
				use: [
					"style-loader", // So webpack can inject bundled styles into the web page
					"css-loader" // So webpack understands what to do with : import "main.css"
				]
			}
		]
	},
	plugins: [ // Plugins are applied to all files after the loaders have run. What should we do with the
		// bundles? 
		// For example, you can just use "webpack -p" to minify all modules, but if you want more
		// control you can use uglify manually with your desired configuration
		new webpack.optimize.UglifyJsPlugin({

		})
	]
};