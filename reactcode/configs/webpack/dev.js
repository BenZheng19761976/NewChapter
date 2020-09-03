// development config
const webpack = require('webpack');
const merge = require('webpack-merge');
const { resolve } = require('path');
const { CheckerPlugin } = require("awesome-typescript-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
// const nodeExternals = require('webpack-node-externals');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const DefinePlugin = require("webpack/lib/DefinePlugin");

// const finalConfig = merge(commonConfig, {
const finalConfig = {
  mode: 'development',
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
  externals: {
    // "react": "React",
    // "react-dom": "ReactDOM",
    // "log": "loglevel",
  },
  performance: {
    hints: false,
  },
  entry: {
    // '@babel/polyfill',
    // "react-hot-loader/patch", // activate HMR for React
    main: './index.tsx',
    vendor: ['react', 'react-dom']
  },
  devtool: 'cheap-module-eval-source-map',
  // devtool: 'source-map',
  // target: 'node',
  // node: {
  //   // Need this when working with express, otherwise the build fails
  //   __dirname: false,   // if you don't put this is, __dirname
  //   __filename: false,  // and __filename return blank or /
  // },
  // externals: [nodeExternals()], // Need this to avoid error when working with Express
  plugins: [
    new CheckerPlugin(),
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
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin() // prints more readable module names in the browser console on HMR updates
  ],
  output: {
    path: resolve(__dirname, '../../portal'),
    filename: 'assets/js/[name].bundle.js',
    // chunkFilename: 'assets/js/[id].bundle.js',
    publicPath: '/portal',
  },
  devServer: {
    watchOptions: {
      poll: 1000,
      aggregateTimeout: 1000
    },
    hot: false,
    inline: false
  },
  stats: { colors: true },
};
// console.log(commonConfig);
console.log(finalConfig);

module.exports = finalConfig;
