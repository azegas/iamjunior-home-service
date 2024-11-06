// recreate-db.js is used to recreate the database from scratch
// it deletes all categories, businesses, and bookings and recreates them with sample data
// useful when developing locally
// run this file with "node recreate-db.js"

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

const { CategoryModel } = require('./category-model');
const { BusinessModel } = require('./business-model');
const { BookingModel } = require('./booking-model');

const categories = require('./sample-data').categories;
const businesses = require('./sample-data').businesses;
const bookings = require('./sample-data').bookings;

async function connectToDB() {
    if (!process.env.DB_CONNECTION_STRING) {
        console.error('Error: DB_CONNECTION_STRING environment variable is not set.');
        process.exit(1); // Exit with an error code
    }

    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING);
        console.log('Connected to the database successfully');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1); // Exit with an error code
    }
}

async function disconnectFromDB() {
    try {
        await mongoose.connection.close();
        console.log('Disconnected from the database successfully');
    } catch (error) {
        console.error('Error disconnecting from the database:', error);
    }
}

async function recreateCategories() {
    try {
        await CategoryModel.deleteMany({});
        console.log('Categories deleted successfully');

        const createdCategories = await CategoryModel.insertMany(categories);
        console.log('Categories recreated successfully');
        return createdCategories;
    } catch (error) {
        console.error('Error recreating categories:', error);
    }
}

async function recreateBusinesses(createdCategories) {
    try {
        await BusinessModel.deleteMany({});
        console.log('Businesses deleted successfully');

        // Map the business categories to their corresponding IDs
        const businessesWithCategoryId = businesses.map(business => {
            const category = createdCategories.find(category => category.name === business.category);
            return { ...business, category: category._id };
        });

        await BusinessModel.insertMany(businessesWithCategoryId);
        console.log('Businesses recreated successfully');
    } catch (error) {
        console.error('Error recreating businesses:', error);
    }
}

async function recreateBookings() {
    try {
        await BookingModel.deleteMany({});
        console.log('Bookings deleted successfully');
    } catch (error) {
        console.error('Error recreating bookings:', error);
    }
}

async function main() {
    await connectToDB();
    const createdCategories = await recreateCategories();
    await recreateBusinesses(createdCategories);
    await recreateBookings();
    await disconnectFromDB();
    process.exit(0); // Exit process when done
}

main();
