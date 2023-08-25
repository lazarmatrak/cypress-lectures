class HomepagePO{

    visitHomepage(){
        cy.visit(Cypress.env('baseUrl'), {timeout: 60000});
    }

    clickOn_ContactUs_Button(){
        cy.get('#contact-us').invoke('removeAttr','target').click({force:true},{timeout:8000});
    }
}


export default HomepagePO;