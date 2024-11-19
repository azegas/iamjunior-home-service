import express from 'express';

import { getCategories } from './queries/get-categories';
import { createCategory } from './mutations/create-category';

const categoriesRouter = express.Router();

// categoriesRouter.get('/', getCategories);
// categoriesRouter.post('/', createCategory);

export { categoriesRouter };
