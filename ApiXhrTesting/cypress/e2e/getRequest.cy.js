/// <reference types="cypress" />
describe('API Requests',()=>{

    it('GET request',()=>{
        cy.request({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/posts",
            headers:{
                accept: "application/json"
            }
        }).then(response=>{
            let body = JSON.parse(JSON.stringify(response.body));
            expect(response.status).to.eql(200);
            expect(body[0]).has.property('title','sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
            expect(body[0]).has.property('id',1);
            
            body.forEach(function(item) {
                expect(item).to.have.keys('id','title','userId','body');
                cy.log('ID: ' +item['id']+ ' & Title: ' + item['title'] + ' & UserId: ' +item['userId']);
            });
        });
    })
});