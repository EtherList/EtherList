var CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
   entry: './client/src/App.jsx',

   output: {
      path:'./client/public',
      filename: 'bundle.js',
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',

            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   },
   devtool: 'source-map',

   plugins: [
     new CopyWebpackPlugin([
       {from: 'node_modules/etherrep/build/contracts', to: 'client/public'},
       {from: 'node_modules/etherrep/build/app.js', to: 'client/public'}
     ])
   ]
}

module.exports = config;
