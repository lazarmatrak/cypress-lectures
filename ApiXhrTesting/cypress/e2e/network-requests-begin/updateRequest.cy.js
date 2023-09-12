/// <reference types="cypress" />

describe("Cypress UPDATE request", () => {
  let randomId = Math.floor(Math.random()*100 + 1); 
  it("Update existing post via the /posts endpoint", () => {
    cy.request({
      method: "PUT",
      url: `https://jsonplaceholder.typicode.com/posts/${randomId}`,
      body: {
        title: "Where can I buy apples",
        body: "test body",
      },
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      let parseResponse = JSON.parse(JSON.stringify(response));
      console.log(parseResponse);

      expect(response.status).to.eql(200);
      expect(response.isOkStatusCode).to.eql(true);
    //   response.forEach(item=>{
    //     if(item.title === "Where can I buy apples"){item.title
    //         console.log()
    //     }
    //   })
      // setTimeout(()=>{
      //     console.clear();
      // },1500);
    });
  });
});
