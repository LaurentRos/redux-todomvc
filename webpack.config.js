var webpack = require('webpack'); // Requiring the webpack lib

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080', // Setting the URL for the hot reload
    'webpack/hot/only-dev-server', // Reload only the dev server
    './src/index.jsx'
    ],
    module: {
      loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
      }, {
        test: /\.css$/,
    loader: 'style!css' // We add the css loader
  }]
},
resolve: {
  extensions: ['', '.js', '.jsx']
},
output: {
  path: __dirname + '/dist',
  publicPath: '/',
  filename: 'bundle.js'
},
devServer: {
  contentBase: './dist',
    hot: true // Activate hot loading
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin() // Wire in the hot loading plugin
    ]
  };

// module.exports = {
//   entry: [
//   './src/index.js'
//   ],
//   module: {
//     loaders: [{
//       test: /\.jsx?$/,
//       exclude: /node_modules/,
//       loader: 'babel'
//     }]
//   },
//   resolve: {
//     extensions: ['', '.js', '.jsx']
//   },
//   output: {
//     path: __dirname + '/dist',
//     publicPath: '/',
//     filename: 'bundle.js'
//   },
//   devServer: {
//     contentBase: './dist'
//   }
// };