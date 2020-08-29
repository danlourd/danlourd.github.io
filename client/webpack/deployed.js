const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

function getDeployedConfig(options) {
  return {
    mode: options.mode,
    entry: {
      bundle: [
        '@babel/polyfill',
        path.join(options.dirname, 'src/index'),
      ],
    },
    output: {
      path: path.join(options.dirname, '../assets'),
      publicPath: `${options.appUrl}/assets/`,
      filename: '[name].js',
    },
    plugins: [
      new BundleAnalyzerPlugin(),
    ],
    optimization: {
      minimizer: [ new TerserPlugin() ],
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            enforce: true,
          },
        },
      },
    },
  };
}

module.exports = {
  getDeployedConfig,
};
