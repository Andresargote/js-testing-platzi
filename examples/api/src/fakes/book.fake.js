const { faker } = require("@faker-js/faker");

const generateOneBook = () => {
  return {
    _id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
  };
};

const generateManyBooks = (size) => {
  const limit = size ?? 10;
  const fakeBooks = [];

  for (let i = 0; i < limit; i++) {
    fakeBooks.push(generateOneBook());
  }

  return [...fakeBooks];
};

module.exports = { generateOneBook, generateManyBooks };
