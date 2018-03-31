const path = require('path');

const config = {
  context: path.resolve(__dirname, "src"),
  entry: {
    app: './index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  module: {
    rules: [{
        test: /\.js$/,
        include: /src/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['env']
          } 
        }
      }
    ]
  }
};

module.exports = config;