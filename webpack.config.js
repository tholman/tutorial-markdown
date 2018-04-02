const path = require('path');
const webpack = require('webpack');

const config = {
  context: path.resolve(__dirname, "src"),
  entry: {
    "app": './index.js',
    "editor.worker": 'monaco-editor/esm/vs/editor/editor.worker.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'TutorialMarkdownPlayer'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /src/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['env']
          } 
        }
      },{
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  plugins: [
      // Ignore require() calls in vs/language/typescript/lib/typescriptServices.js
      new webpack.IgnorePlugin(
          /^((fs)|(path)|(os)|(crypto)|(source-map-support))$/,
          /vs\/language\/typescript\/lib/
      )
  ]
};

module.exports = config;