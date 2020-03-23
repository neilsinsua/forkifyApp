const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports= {
  //specify entry point location
  //1. js src code
  //2. babel-polyfill
  entry: ['babel-polyfill','./src/js/index.js'],
  //specify new output file location and name
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  //specify webserver content base
  devServer: {
    contentBase: './dist'
  },
  //configure htmlwebpackplugin
  plugins: [
    //copy index.html from src to dist and injects script src=bundle.js
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ],
  
  module: {
    //configure loaders by specifying rules
    //1. babel-loader
    rules: [
      {
        //regex to find .js files and rule to use babel-loader
        test: /\.js$/,
        exclude: /node_modules/,
        use: {loader: 'babel-loader'}
      }
    ]
  }
}