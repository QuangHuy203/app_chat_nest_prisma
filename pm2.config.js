const fs = require('fs');
const dotenv = require('dotenv');
const path = require('path');
const getEnv = name => dotenv.parse(fs.readFileSync(path.join(__dirname, name)));

const config = {
  script: './index.js',
  instances: 1,
};

const { PM2 } = process.env;
let apps = [];
switch (PM2) {
  case 'DEV':
    apps = [{ ...config, name: 'reeme_dev', env: getEnv('/.env.dev') }];
    break;
  case 'UAT':
    apps = [{ ...config, name: 'reeme_uat', env: getEnv('/.env.uat') }];
    break;

  default:
    apps = [
      { ...config, name: 'reeme_dev', env: getEnv('/.env.dev') },
      { ...config, name: 'reeme_uat', env: getEnv('/.env.uat') },
    ];
    break;
}

module.exports = {
  apps,
};
