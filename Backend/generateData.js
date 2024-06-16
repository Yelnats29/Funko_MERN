const mongoose = require('mongoose');
const faker = require('faker');
const FunkoPop = require('./models/FunkoPop');

const generateFunkoPops = async (num) => {
  await mongoose.connect('mongodb://localhost:3000/funkopops', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const funkoPops = [];

  for (let i = 0; i < num; i++) {
    const funkoPop = new FunkoPop({
      name: faker.commerce.productName(),
      series: faker.lorem.word(),
      releaseYear: faker.date.past(10).getFullYear(),
      price: faker.commerce.price(10, 100),
      imageUrl: faker.image.imageUrl(),
      description: faker.lorem.word()
    });

    funkoPops.push(funkoPop);
  }

  await FunkoPop.insertMany(funkoPops);
  console.log(`${num} Funko Pops have been successfully generated!`);
  mongoose.connection.close();
};

generateFunkoPops(100);
