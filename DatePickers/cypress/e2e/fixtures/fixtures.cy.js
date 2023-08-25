/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

describe("Fixtures", () => {
  // beforeEach(() => {
  //   let users = [];
  //   for (let i = 0; i < 100; i++) {
  //     let randomFirstName = faker.person.firstName();
  //     let randomLastName = faker.person.lastName();
  //     let randomEmail = faker.internet.email({
  //       firstName: randomFirstName,
  //       lastName: randomLastName,
  //     });
  //     let randomPhoneNumber = faker.phone.number('###-###-###');
  //     let randomjobTitle = faker.person.jobTitle();

  //     users.push({
  //       firstName: randomFirstName,
  //       lastName: randomLastName,
  //       email: randomEmail,
  //       phoneNumber: randomPhoneNumber,
  //       jobTitle: randomjobTitle
  //     });
  //   }
  //   cy.writeFile("cypress/fixtures/users.json", users);
  // });

  // afterEach(() => {
  //   cy.writeFile("cypress/fixtures/users.json", "");
  // });

  // it("Logging fixture data", () => {
  //   cy.fixture("users.json").then((users) => {
  //     console.log(users);
  //   });
  // });
  // it("Testing fixture with alias", () => {
  //   cy.fixture("users.json").as("users");
  //   cy.get("@users").then((user) => {
  //     console.log(user);
  //   });
  // });
  // it('Testing fixture with keyword this',()=>{

    // globalThis will work with arrow functions and this. will throw an error
    // cy.fixture('users.json').then((user)=>{
    //   globalThis.user = user;
    //   console.log(user);
    // })
    // this. will work with function and will not throw an error
    // cy.fixture('users.json').then(function(usersJSON){
    //   this.users = usersJSON;
    //   console.log(this.users);
    // })
  // });


  
});
