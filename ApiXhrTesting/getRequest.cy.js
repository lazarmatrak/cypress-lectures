/// <reference types="cypress" />

describe('API Requests',()=>{

    it('GET request',()=>{
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts",
            headers:{
                accept: "application/json"
            }
        }).then(response=>{
            let body = JSON.parse(JSON.stringify(response.body));
            console.log(body);

            expect(body[0]).has.property('title','Example Json Server');
            expect(body[0]).has.property('author','Joe Blogs');
        });
    })
});