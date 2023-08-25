const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    excludeSpecPattern: 'cypress/e2e/other/*.js',
    chromeWebSecurity: false,
    defaultCommandTimeout:10000,
    pageLoadTimeout: 120000
  },
});
