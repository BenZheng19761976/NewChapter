// development config
const webpack = require('webpack');
const { resolve } = require('path');
const { CheckerPlugin } = require("awesome-typescript-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const finalConfig = {
  mode: 'production',
  context: resolve(__dirname, '../../src'),
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader', 'source-map-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'awesome-typescript-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', {loader: 'css-loader', options: {importLoaders: 1}}],
      },
      {
        test: /\.(scss|sass)$/,
        loaders: [
          'style-loader',
          {loader: 'css-loader', options: {importLoaders: 1}},
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=/img/[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
        ],
      },
    ],
  },
  performance: {
    hints: false,
  },
  entry: {
    main: './index.tsx',
    vendor: ['react', 'react-dom']
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html"
    }),
    new CopyWebpackPlugin(
      [
        {
          from: "./assets/images/**/*",
          to: ".",
          toType: "dir"
        }
      ],
      { logLevel: "trace" }
    ),
  ],
  output: {
    path: resolve(__dirname, '../../portal'),
    filename: 'assets/js/[name].bundle.[hash].js',
    publicPath: '/portal',
  },
  stats: { colors: true },
};
console.log(finalConfig);

module.exports = finalConfig;
