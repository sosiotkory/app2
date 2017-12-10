var path = require('path');
var webpack = require('webpack');

var config = {
  entry : './client/index.js',
  output : {
    path: path.resolve(__dirname, 'dist'  ),
    filename: 'bundle.js'
        },
  module : {
    loaders: [
                {
                      test : /.\js?/,
                      include :path.resolve(__dirname,'client'),
                      exclude : /node_modules/,
                      loader : 'babel-loader',
                      query: {
                    presets: ["react", "es2015"]
                }
          }
         ]
      }
  }
module.exports = config;
