// import * as _ from 'lodash';

const allConfigs = {
  local: {
    appUrl: 'react',
    phpUrl: '/api/1/',
    node1Url: '/node/v1/',
    node2Url: '/node/v2/',
  },
  dev: {},
  dev2: {},
  staging: {},
  prod: {},
};

const ENV = process.env.SERVER_ENV || 'local';
console.log(`> ENV: ${ENV}`);
console.log('> AllConfigs[ENV]: ', allConfigs[ENV]);

// const Config = _.merge(AllConfigs.local, AllConfigs[ENV]);
const Config = Object.assign({}, allConfigs.local, allConfigs[ENV]);
console.log('> Config: ', Config);

export {
  ENV,
  Config,
};
