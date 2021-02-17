const withImages = require("next-images");
const webpack = require("webpack");
const withPlugins = require("next-compose-plugins");

const nextConfig = {
  pageExtensions: ["page.tsx", "ts"],
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    });

    config.resolve.alias = {
      "@core": path.join(__dirname, "core"),
      "@utils": path.join(__dirname, "utils"),
      "@styles": path.join(__dirname, "styles"),
      "@assets": path.join(__dirname, "public/assets"),
      "@reducers": path.join(__dirname, "reducers"),
      "@hooks": path.join(__dirname, "hooks"),
      "@styles": path.join(__dirname, "styles"),
      "@store": path.join(__dirname, "sotre"),
      "@src": path.join(__dirname, "src"),
      ...config.resolve.alias,
    };

    if (config.resolve.plugins) {
      config.resolve.plugins.push(new TsconfigPathsPlugin());
    } else {
      config.resolve.plugins = [new TsconfigPathsPlugin()];
    }

    return config;
  },
};

module.exports = withImages();
