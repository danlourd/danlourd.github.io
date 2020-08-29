const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function getCommonConfig(options) {
  return {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.(css|scss)$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
          use: [
            'url-loader',
          ],
        },
      ],
    },
    resolve: {
      modules: [path.resolve(options.dirname, 'src'), 'node_modules'],
      extensions: [
        '.js',
        '.jsx',
        '.css',
        '.scss',
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(options.mode),
        }
      }),
      new HtmlWebpackPlugin({
        filename: options.isLocal ? 'index.html' : '../index.html',
        title: options.siteName,
        template: 'template.html',
        inject: true,
        appVersion: options.appVersion,
      }),
    ],
  };
}

module.exports = {
  getCommonConfig,
};
