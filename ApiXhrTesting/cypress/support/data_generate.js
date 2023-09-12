// import { faker } from "@faker-js/faker";
const faker = require('@faker-js/faker');
const fs = require('fs');

const generatePosts = () => {
  let data = [];
  let i;
  for (i = 0; i < 100; i++) {
    let obj = {
      post: [
        {
          id: faker.faker.finance.accountNumber(),
          title: faker.faker.lorem.sentences(2),
          author: `${faker.faker.person.firstName()} ${faker.faker.person.lastName()}`,
        },
      ],
      comments: [
        {
          id: faker.faker.finance.accountNumber(),
          body: faker.faker.lorem.paragraphs(2, "<br>\n"),
          postId: faker.faker.finance.accountNumber(),
        },
      ],
      author: {
        name: `${faker.faker.person.firstName()} ${faker.faker.person.lastName()}`,
      },
    };

    data.push(obj);
  }
  let parsedData = JSON.stringify(data);
  fs.writeFileSync("../fixtures/db.json", parsedData);
};

generatePosts();
