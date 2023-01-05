const { defineConfig } = require('cypress')

module.exports = defineConfig({
  //viewportHeight:1080,
  //viewportWidth:1920,
  viewportHeight:625,
  viewportWidth:400,
  e2e: {
    //baseUrl: 'http://localhost:4200',// for learning from udemy
    //baseUrl: 'https://sg-order.flash-coffee.xyz/', // for API POST TAX testing
    baseUrl:'https://sg.api.flash-coffee.xyz/',
    specPattern:'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern:['**/1-getting-started/*','**/2-advanced-examples/*']
  }
})