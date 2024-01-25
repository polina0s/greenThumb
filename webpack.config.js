const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isProductionMode = process.env.NODE_ENV === "production";

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.tsx'),
  },
  
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  
  mode: isProductionMode ? "production" : "development",
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          isProductionMode ? MiniCssExtractPlugin.loader : "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.([cm]?ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './src/template.html'),
      filename: 'index.html',
    }),
    new FileManagerPlugin({
      events: {
        onStart: {
          delete: ['dist'],
        },
      },
    }),
    new MiniCssExtractPlugin({
      filename: isProductionMode ? "[name].[contenthash].css" : "[name].css",

    }),
  ],

  devServer: {
    watchFiles: path.resolve(__dirname, './src'),
    port: 3030,
  },
};
