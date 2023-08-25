///<reference types="cypress" />

import HomepagePO from "../../pageObjects/Homepage_PO";

describe('Test Contact Us form via WebDriverUni',()=>{
    const homepage_PO = new HomepagePO();


    beforeEach(()=>{
        homepage_PO.visitHomepage();
        homepage_PO.clickOn_ContactUs_Button();
    });

    it('visits and asserts URL',()=>{
        cy.url().should('contain',`${Cypress.env('baseUrl')}`)
    })
});