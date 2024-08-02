const path = require('path');

module.exports = {
  entry: './src/index.js',  // Update this to your actual entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      // your module rules here
    ],
  },
  resolve: {
    fallback: {
      "os": require.resolve("os-browserify/browser")
    }
  },
  // other configuration options...
};
