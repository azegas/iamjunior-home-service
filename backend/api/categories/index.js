const express = require('express');

const { getCategories } = require('./queries/get-categories');
const { postCategory } = require('./mutations/post-category');

const categoriesRouter = express.Router();

categoriesRouter.get('/', getCategories);
categoriesRouter.post('/', postCategory);

module.exports = {
  categoriesRouter,
}