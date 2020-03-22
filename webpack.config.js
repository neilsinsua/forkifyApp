const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports= {
  //specify entry point location
  entry: './src/js/index.js',
  //specify new output file location and name
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  //specify webserver content base
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    //copy index.html from src to dist and injects script src=bundle.js
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ]
}