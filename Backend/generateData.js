const mongoose = require('mongoose');
const faker = require('faker');
const FunkoPop = require('./models/FunkoPop');
const dotenv = require('dotenv');
dotenv.config();

const generateFunkoPops = async (num) => {
    try {
        await mongoose.connect(process.env.MONGOBD_URI, {
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
                description: faker.lorem.sentence
                    ()
            });

            funkoPops.push(funkoPop);
        }

        await FunkoPop.insertMany(funkoPops);
        console.log(`${num} Funko Pops have been successfully generated!`);
        mongoose.connection.close();
    } catch (error) {
        console.error('Error generating Funko Pops:', error);
    }
};

generateFunkoPops(100);
