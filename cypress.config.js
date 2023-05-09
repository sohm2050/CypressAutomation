const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout : 6000,
  projectId: "aym8rm",
  env : {
    url : "https://rahulshettyacademy.com"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/webUIAutomation/test/*.js'
  },
});
