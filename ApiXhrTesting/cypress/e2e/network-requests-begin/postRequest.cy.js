/// <reference types="cypress" />

describe('Cypress POST request',()=>{
    let titleOfPosts = new Array();
    let randomTitle = Math.random().toString(36).substring(1) + Math.random().toString(36).substring(1);
    it('POST request',()=>{
        cy.request({
            method: "POST",
            url: "https://jsonplaceholder.typicode.com/posts",
            body:{
                title:randomTitle,
                body: "test body"
            },
            headers:{
                accept:"application/json"
            }
        }).then(response=>{
            let parseResponse = JSON.parse(JSON.stringify(response));
            // console.log(parseResponse); 
            
            expect(response.status).to.eql(201);
            expect(response.isOkStatusCode).to.eql(true);

            // setTimeout(()=>{
            //     console.clear();
            // },1500);
        });
    });
    it('Validate title of latest post',()=>{
        cy.request({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/posts",
            headers:{
                accept: "application/json"
            }
        }).then(response=>{
            let body = JSON.parse(JSON.stringify(response.body));
            body.forEach(item=>{
                titleOfPosts.push(item.title);
            });
            
        }).then(()=>{
            let latestPost = titleOfPosts[titleOfPosts.length-1];
            // this will not pass because the json api doesn't accept new entries
            expect(latestPost).to.eql(randomTitle);
        })
    });
});