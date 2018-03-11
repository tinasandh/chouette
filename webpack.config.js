var path = require('path');

module.exports = {
    entry: ["./public/js/main.js"],
    output: {
	filename: "bundle.js",
	path: path.resolve(__dirname, 'public/js/build')
    },
    devtool: "source-map",
    module: { // Loaders apply transformations before a file is added to bundle.js
	loaders: [
	    {
		test: /\.js$/, //transform all .js files
		exclude: /node_modules/, // except for node_modules
		loader: 'babel-loader', // apply the babel-loader to compile the files
		query: {
		    presets: ['react', 'es2015', 'stage-3'] // load the react, es2015 babel settings
		}
	    },
        {
            test: /\.scss$/,
            //include: path.join(__dirname, 'src'),
            //loader: 'style!css!sass', old
            use: [
                {
                    loader: 'style-loader'

                },
                {
                    loader: 'css-loader'

                },
                {
                    loader: 'sass-loader'
                }
            ]
        }
	]
    }
};

