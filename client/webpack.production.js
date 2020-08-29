const { getWebpackConfig } = require('./webpack');

function getProductionConfig() {
  const options = {
    siteName: 'ActiveCampaign Coding Challenge',
    isLocal: false,
    dirname: __dirname,
    mode: 'production',
    appUrl: 'https://danlourd.github.io',
  }

  console.log(options.dirname);
  return getWebpackConfig(options);
}

module.exports = () => getProductionConfig();
