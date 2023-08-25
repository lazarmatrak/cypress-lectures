///<reference types="cypress" />

import HomepagePO from "../../pageObjects/Homepage_PO";

describe('Test Contact Us form via WebDriverUni',()=>{

    // All of the tests that are stored inside this describe block will have a timeout of 20s - this includes the hooks as well
    Cypress.config('defaultCommandTimeout',20000);

    const homepage_PO = new HomepagePO();


    beforeEach(()=>{
        homepage_PO.visitHomepage();
        homepage_PO.clickOn_ContactUs_Button();
    });

    it('visits and asserts URL',()=>{
        cy.url().should('contain',`${Cypress.env('baseUrl')}`)
    })
});