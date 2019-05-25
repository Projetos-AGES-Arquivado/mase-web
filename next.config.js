require("dotenv").config();
const webpack = require("webpack");
const { ANALYZE, ASSET_HOST } = process.env;

// for those who using CDN
const assetPrefix = ASSET_HOST || "";
module.exports = {
  assetPrefix,
  target: process.env.NODE_ENV === "production" ? "server" : "serverless",
  webpack: (config, { dev, defaultLoaders }) => {
    config.output.publicPath = `${assetPrefix}${config.output.publicPath}`;

    if (ANALYZE) {
      const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "server",
          analyzerPort: 8888,
          openAnalyzer: true
        })
      );
    }
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        defaultLoaders.babel,
        {
          loader: require("styled-jsx/webpack").loader,
          options: {
            type: "global"
          }
        },
        "sass-loader"
      ]
    });

    return config;
  }
};
