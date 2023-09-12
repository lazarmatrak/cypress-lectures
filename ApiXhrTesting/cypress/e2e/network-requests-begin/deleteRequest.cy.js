/// <reference types="cypress" />
describe("API Requests", () => {
  let randomPostId = Math.floor(Math.random() * 100 + 1);
  console.log(randomPostId);
  // it('DELETE post via /posts/{id} endpoint',()=>{
  //     cy.request({
  //         method: "DELETE",
  //         url: `https://jsonplaceholder.typicode.com/posts/${randomPostId}`,
  //         headers:{
  //             accept: "application/json"
  //         }
  //     }).then(response=>{
  //         let deletedPost = JSON.parse(JSON.stringify(response.body))
  //         console.log(deletedPost)
  //         expect(response.status).to.eql(200);
  //     });
  // });

  it("GET post with random ID and DELETE it in a chained API call", () => {
    cy.request({
      method: "GET",
      url: `https://jsonplaceholder.typicode.com/posts/${randomPostId}`,
    })
      .then((response) => {
        let postId = JSON.parse(JSON.stringify(response.body.id));

        expect(response.status).to.eql(200);
        return postId;
      })
      .then((postId) => {
        cy.request({
          method: "DELETE",
          url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
        }).then((response) => {
        //   expect(response.body.id).to.eql(postId);
          console.log(response.body.postId);
        });
      });
  });
});
