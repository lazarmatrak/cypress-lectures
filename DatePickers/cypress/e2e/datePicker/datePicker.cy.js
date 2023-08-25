/// <reference types="cypress" />

describe("Handling Date pickers",()=>{
    it("Handle webdriveruni date picker",()=>{
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#datepicker").invoke('removeAttr','target').click();
        cy.get('#datepicker').click();

        // let date = new Date();
        // date.setDate(date.getDate()); // get current day
        // cy.log(date.getDate());

        // let newDate = new Date();
        // newDate.setDate(date.getDate() + 5);
        // cy.log(newDate.getDate());

        let date = new Date();
        date.setDate(date.getDate()+365);

        let futureYear = date.getFullYear();
        let futureMonth = date.toLocaleString("default",{month: "long"});
        let futureDay = date.getDate();

        cy.log(futureDay,futureMonth,futureYear);

        function selectMonthAndYear(){
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate=>{
                if(!currentDate.text().includes(futureYear)){
                    cy.get('.next').first().click();   
                    selectMonthAndYear();
                }
            }).then(()=>{
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate=>{
                    if(!currentDate.text().includes(futureMonth)){
                        cy.get('.next').first().click();   
                        selectMonthAndYear();
                    }
                })
            })
        }
        function selectFutureDay(){
            cy.get('[class="day"]').contains(futureDay).click();
        }
        selectMonthAndYear();
        selectFutureDay();
    });
});