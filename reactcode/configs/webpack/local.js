const merge = require("webpack-merge");
const webpack = require("webpack");
const commonConfig = require("./common");
const resolve = require("resolve");
const HOST = process.env.HOST || "http://localhost:5000/";
const ENV = (process.env.ENV = process.env.NODE_ENV = "development");

const metadata = {
  config: "../environment/environment.development.ts"
};

module.exports = merge(
  commonConfig({
    metadata
  }),
  {
    mode: "development",
    entry: [
      "react-hot-loader/patch", // activate HMR for React
      "webpack-dev-server/client?http://localhost:8080", // bundle the client for webpack-dev-server and connect to the provided endpoint
      "webpack/hot/only-dev-server", // bundle the client for hot reloading, only- means to only hot reload for successful updates
      "./index.tsx" // the entry point of our app
      //"./styledcomponents.tsx"
      //"./slide.tsx"
      //"./mobile.tsx"
      //"./hello.tsx"
    ],
    devServer: {
      hot: true, // enable HMR on the server
      historyApiFallback: true
      // inline: true,
      // port: 8081,
      // proxy: {
      //   '/v1/**': {
      //     target: 'http://api.in.uprintf.com',
      //     secure: false,
      //     changeOrigin: true
      //   }
      // }
    },
    devtool: "cheap-module-eval-source-map",
    plugins: [
      new webpack.HotModuleReplacementPlugin(), // enable HMR globally
      new webpack.NamedModulesPlugin() // prints more readable module names in the browser console on HMR updates
    ]
  }
);
