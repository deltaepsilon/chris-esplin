const StatsPlugin = require('stats-webpack-plugin');
const withCss = require('@zeit/next-css');
const withSourceMaps = require('@zeit/next-source-maps');

module.exports = withSourceMaps(
  withCss({
    webpack(config, options) {
      config.profile = true;
      config.plugins.push(new StatsPlugin('stats.json'));
      config.stats = 'verbose';

      config.module.rules.push({
        test: /\.md$/,
        use: [{ loader: 'html-loader' }],
      });

      if (config.optimization && config.optimization.minimizer) {
        for (const plugin of config.optimization.minimizer) {
          if (plugin.constructor.name === 'TerserPlugin') {
            plugin.options.sourceMap = { includeSources: true };
            break;
          }
        }
      }

      return config;
    },
  })
);
