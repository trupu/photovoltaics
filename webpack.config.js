const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPugPlugin = require("html-webpack-pug-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const CopyPlugin = require("copy-webpack-plugin");

const config = {};

// config.mode = 'development';

config.entry = {
  app: "./src/app.js",
};

config.output = {
  filename: "[name].bundle.js",
  path: path.resolve(__dirname, "dist"),
};

config.devServer = {
  contentBase: path.join(__dirname, "dist"),
  compress: true,
  port: 8500,
};

config.module = {
  rules: [
    {
      test: /\.vue$/,
      loader: "vue-loader",
    },
    {
      test: /\.js$/,
      loader: "babel-loader",
    },
    {
      test: /\.pug$/,
      oneOf: [
        {
          resourceQuery: /^\?vue/,
          use: ["pug-plain-loader"],
        },
        {
          use: ["pug-loader"],
        },
      ],
    },
    {
      test: /\.(scss|sass)$/,
      oneOf: [
        {
          resourceQuery: /^\?vue/,
          use: [
            "vue-style-loader",
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                prependData: `@import "./src/scss/_variables.scss"; `,
              },
            },
          ],
        },
        {
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },
    {
      test: /\.(gif|png|jpe?g|svg)$/i,
      /*
            use: [
                'file-loader',
                {
                loader: 'image-webpack-loader',
                options: {
                    disable: true, // webpack@2.x and newer
                },
                },
            ],
            */
      use: [
        {
          loader: "url-loader",
          options: {
            limit: false,
            esModule: false,
          },
        },
      ],
    },
  ],
};

config.plugins = [
  new HtmlWebpackPlugin({
    template: "./public/index.pug",
    output: "index.html",
  }),
  new MiniCssExtractPlugin({
    filename: "[name].css",
  }),
  new VueLoaderPlugin(),
  new CopyPlugin([{ from: "./public/img", to: "./img" }]),
];

module.exports = config;
