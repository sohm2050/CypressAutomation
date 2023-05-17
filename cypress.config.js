const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  reporter: 'cypress-mochawesome-reporter',
  defaultCommandTimeout : 6000,
  projectId: "ups9gs",
  env : {
    url : "https://rahulshettyacademy.com",
    
  },
  e2e: {
    baseUrl : "https://rahulshettyacademy.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/e2e/webUIAutomation/test/*.js'
  },
});
