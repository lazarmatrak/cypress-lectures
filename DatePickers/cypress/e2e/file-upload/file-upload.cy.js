/// <reference types="cypress" />

describe("Handling file uploads",()=>{
    it("Upload a file...",()=>{
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#file-upload').invoke('removeAttr','target').click({force:true});
        
        cy.get('#myFile').selectFile('cypress/fixtures/laptop.png');
        cy.get('#submit-button').click();
        cy.on('window:alert',(txt)=>{
            expect(txt).to.equal('Your file has now been uploaded!');
        })

    });

    it('Upload No file...',()=>{
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#file-upload').invoke('removeAttr','target').click({force:true});
        cy.get('#submit-button').click();
        cy.on('window:alert',(text)=>{
            expect(text).to.equal('You need to select a file to upload!');
        });
    });
});