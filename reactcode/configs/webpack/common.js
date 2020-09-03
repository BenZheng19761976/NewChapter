const path = require("path");
const { resolve } = require("path");
const { CheckerPlugin } = require("awesome-typescript-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const DefinePlugin = require("webpack/lib/DefinePlugin");

// module.exports = (cfg) => {
const config = options => {
  return {
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      alias: {
        config: path.join(__dirname, options.metadata.config)
      }
    },
    context: resolve(__dirname, "../../src"),
    module: {
      rules: [
        {
          test: /\.js$/,
          use: ["babel-loader", "source-map-loader"],
          exclude: /node_modules/
        },
        {
          test: /\.tsx?$/,
          use: ["babel-loader", "awesome-typescript-loader"]
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            { loader: "css-loader", options: { importLoaders: 1 } }
          ]
        },
        {
          test: /\.scss$/,
          loaders: [
            "style-loader",
            { loader: "css-loader", options: { importLoaders: 1 } },
            "sass-loader"
          ]
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: [
            "file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]",
            "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false"
          ]
        }
      ], 
    },
    plugins: [
      new CheckerPlugin(),
      new HtmlWebpackPlugin({ template: "index.html.ejs" }),
      new CopyWebpackPlugin(
        [
          {
            from: "./assets/images/**/*",
            to: ".",
            toType: "dir"
          }
        ],
        { logLevel: "trace" }
      )
    ],
    externals: {
      react: "React",
      log: "loglevel",
      "react-dom": "ReactDOM"
    },
    performance: {
      hints: false
    }
  };
};
module.exports = config;
