
const rewireLess = require('react-app-rewire-less');
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = function override(config, env) {
  config = rewireLess(config, env);
  config.resolve.alias = {
    '@': resolve('src')
  }
  return config;
}
