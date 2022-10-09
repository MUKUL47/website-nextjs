const { config } = require("process");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["github.com"],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "file-loader",
          // options: pluginOptions.options,
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
