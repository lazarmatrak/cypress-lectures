import { faker } from "@faker-js/faker";
import fs from "fs";

const generatePosts = () => {
  let data = [];
  let i;
  for (i = 0; i < 100; i++) {
    let obj = {
      post: [
        {
          id: faker.finance.accountNumber(),
          title: faker.lorem.sentences(2),
          author: `${faker.person.firstName()} ${faker.person.lastName()}`,
        },
      ],
      comments: [
        {
          id: faker.finance.accountNumber(),
          body: faker.lorem.paragraphs(2, "<br>\n"),
          postId: faker.finance.accountNumber(),
        },
      ],
      author: {
        name: `${faker.person.firstName()} ${faker.person.lastName()}`,
      },
    };

    data.push(obj);
  }
  let parsedData = JSON.stringify(data);
  fs.writeFileSync("../fixtures/db.json", parsedData);
};

generatePosts();
