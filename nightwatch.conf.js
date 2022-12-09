const additonalEnvironments = require("./environments");
const { getLocalIdentifier } = require("./scripts/local-identifier");

if(!additonalEnvironments.test_settings)
  additonalEnvironments.test_settings = {};

const LTOptions = {
  'LTOptions' : {
      "platform" : "Win 10",
      "browser" : "Chrome",
      "version" : "106.0",
      "build" : "TEST",
      "name" : "BStack nightwatch snippet",
      "source": "nightwatch:sample-master:v1.0",
      "tunnel" : "false",
      "seleniumVersion" : "4.0.0",
  },
  "user": 'neerajn',
  "accessKey": 'J3zIzXZfnxcFZDjaG5SmRb9cIUjoRtjzcX5fPsQcWxVkxBX3Lf'
}

const lambdatest = {
  webdriver: {
    start_process: false
  },

  selenium: {
    host: 'hub.lambdatest.com',
    port: 443,
  },
}

const nightwatchConfigs = {
  src_folders: [],
  live_output: true,

  test_settings: {
    default: {
      launch_url: 'https://nightwatchjs.org'
    },

    lambdatest:  {
      ...lambdatest
    },

    "lambdatest.chrome": {
      ...lambdatest,
      desiredCapabilities:{
        "user": 'neerajn',
        "accessKey": 'J3zIzXZfnxcFZDjaG5SmRb9cIUjoRtjzcX5fPsQcWxVkxBX3Lf',
        "LT:Options":{        
          browserName: 'chrome',
          "selenium_version" : "4.1.2",
        }
        // ...LTOptions
      }
    },
    // "browserstack.firefox": {
    //   ...browserStack,
    //   desiredCapabilities:{
    //     browserName: 'firefox',
    //     ...bstackOptions
    //   }
    // },
    // "browserstack.edge": {
    //   ...browserStack,
    //   desiredCapabilities:{
    //     browserName: 'Edge',
    //     ...bstackOptions
    //   }
    // },
    // capabilities to run local test on BrowserStack
    // 'browserstack.local': {
    //   ...browserStack,
    //   desiredCapabilities: {
    //     browserName: 'chrome',
    //     'bstack:options' : {
    //       "os" : "OS X",
    //       "osVersion" : "Big Sur",
    //       "buildName" : "browserstack-build-1",
    //       "sessionName" : "BStack nightwatch snippet",
    //       "source": "nightwatch:sample-master:v1.0",
    //       "local" : "true",
    //       "localIdentifier": getLocalIdentifier(),
    //       "seleniumVersion" : "4.0.0",
    //       userName: '${BROWSERSTACK_USERNAME}',
    //       accessKey: '${BROWSERSTACK_ACCESS_KEY}',
    //     },
    //   },
    // }
  }
}

// for(let key in additonalEnvironments.test_settings) {
//   nightwatchConfigs.test_settings[key] = {
//     ...browserStack,
//     ...additonalEnvironments.test_settings[key]
//   };
// }

module.exports = nightwatchConfigs;
