const Dotenv = require('dotenv-webpack');
var webpack = require('webpack')

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    plugins: [
      new Dotenv({
        path: './.env.dev',
      }),
      // ENV variables
    new webpack.DefinePlugin({
      __DEV__: true,
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
        'API_DOMAIN': JSON.stringify('https://api.fansedge.in/'),
        'APP_LINK': JSON.stringify('https://www.qu7.in/download/android/kwizzy_dev.apk')
      }
    }),
    ],
  };