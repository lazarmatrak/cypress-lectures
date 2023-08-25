///<reference types="cypress" />

import HomepagePO from "../../pageObjects/Homepage_PO";
import Contact_Us_PO from "../../pageObjects/Contact_Us_PO";
describe('Test Contact Us form via WebDriverUni',()=>{

    // All of the tests that are stored inside this describe block will have a timeout of 20s - this includes the hooks as well
    Cypress.config('defaultCommandTimeout',20000);

    const homepage_PO = new HomepagePO();
    const contact_Us_PO = new Contact_Us_PO();

    beforeEach(()=>{
        homepage_PO.visitHomepage();
        cy.wait(3000);
        homepage_PO.clickOn_ContactUs_Button();
        // cy.pause();
    });

    it('visits and asserts URL',()=>{
        cy.url().should('contain',`${Cypress.env('baseUrl')}`);
        contact_Us_PO.contactForm_Submission('Lazar','Matrak','lazar@gmail.com','Some kind of comment','h1','Contact Us');
    })
});