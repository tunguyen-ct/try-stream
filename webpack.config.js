const path = require('path');
const webpack = require('webpack')

module.exports = {
  entry: './src/app.js',
  mode: "development",
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }) 
]
};