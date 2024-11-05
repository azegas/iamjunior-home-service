const mongoose = require('mongoose');
const { CategoryModel } = require('./category-model');
const categories = require('./sample-data').categories;
const dotenv = require('dotenv');

dotenv.config({ path: '../.env' });

async function recreateCategories() {
    if (!process.env.DB_CONNECTION_STRING) {
        console.error('Error: DB_CONNECTION_STRING environment variable is not set.');
        process.exit(1); // Exit with an error code
    }

    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING);

        await CategoryModel.deleteMany({});
        console.log('Categories deleted successfully');

        await CategoryModel.insertMany(categories);
        console.log('Categories recreated successfully');
    } catch (error) {
        console.error('Error recreating categories:', error);
    } finally {
        await mongoose.connection.close();
        process.exit(0); // Exit process when done
    }
}

recreateCategories();
