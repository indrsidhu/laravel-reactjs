const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {  
  mode: 'development',
  entry: {
    webappvlf: ['./react/index.js']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }      
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },  
  output: {
    path: __dirname + '/public/js',
    publicPath: '/',
    //filename: '[name].[contenthash].js'
    filename: '[name].js'
  },
  devServer: {
    contentBase: './public/js'
  },
  plugins: [
    new CleanWebpackPlugin([__dirname + '/public/js'])
  ]  
};