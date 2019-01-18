#!/usr/bin/env node

const rewire = require('rewire');
const defaults = rewire('react-scripts/scripts/build.js');
const config = defaults.__get__('config');

// Consolidate chunk files instead
config.optimization.splitChunks = {
  cacheGroups: {
    default: false,
  },
};
// Move runtime into bundle instead of separate file
config.optimization.runtimeChunk = false;

// JS
config.output.filename = '../../youhadmeat/wp-content/themes/youhadmeat_theme/includes/react-apps/yhmac/[name].js';
// CSS. "5" is MiniCssPlugin
config.plugins[5].options.filename = '../../youhadmeat/wp-content/themes/youhadmeat_theme/includes/react-apps/yhmac/[name].css';
