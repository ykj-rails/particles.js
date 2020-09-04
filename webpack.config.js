const path = require('path')
const outputPath = path.resolve(__dirname, 'public')

module.exports = {
  mode: 'development',
  entry: './js/app.js',
  output: {
    filename: 'app.js',
    path: outputPath,
  },
  devServer: {
    contentBase: outputPath,
    port: 8888,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
}
