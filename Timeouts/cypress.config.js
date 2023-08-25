const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
      baseUrl:'http://www.webdriveruniversity.com'
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    pageLoadTimeout: 120000,
    defaultCommandTimeout: 10000,
    viewportHeight: 1080,
    viewportWidth: 1920
  },
});
