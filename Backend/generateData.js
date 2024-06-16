const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
const FunkoPop = require('./models/funkoSchema.js');

const generateFunkoPops = async (num) => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        const funkoPops = [];

        for (let i = 0; i < num; i++) {
            const funkoPop = new FunkoPop({
                name: faker.commerce.productName(),
                series: faker.lorem.word(),
                releaseYear: faker.date.past({ years: 10 }).getFullYear(),
                price: faker.commerce.price({ min: 10, max: 100 }),
                imageUrl: faker.image.url(),
                description: faker.lorem.sentence()
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
