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
   devtool: 'source-map'
}

module.exports = config;
