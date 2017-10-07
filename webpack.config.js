const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

const config = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/index.js",
  module: {
    loaders: [
      // JAVASCRIPT / BABEL
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      },
      // CSS / SASS
      {
        test: /\.s?css$/,
        loaders: ['style', 'css', 'sass', 'postcss']
      },
    ]
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'index.min.js',
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
  postcss: function() {
    return [autoprefixer]
  }
}

module.exports = config
