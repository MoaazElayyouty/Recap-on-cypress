

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'ci2hdd',
  screenshotOnRunFailure: true,
  video: true,
  
  defaultCommandTimeout: 1000,
  // retries:2,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
  },

  e2e: {
    baseUrl: 'https://demowebshop.tricentis.com/',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      require('@cypress/grep/src/plugin')(config);
    

      return config;
    },
  },
});


