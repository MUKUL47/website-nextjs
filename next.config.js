const { config } = require("process");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "github.com",
      "camo.githubusercontent.com",
      "raw.githubusercontent.com",
      "camo.githubusercontent.com",
      "imgflip.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
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
