import { useState, useEffect } from 'react';
import { Category } from '@/components/category/types';
import { formatErrorMessage } from '@/utils/utils';

type UseFetchCategoriesReturn = {
  categories: Category[] | null;
  errorsCategories: { message: string }[];
  isLoadingCategories: boolean;
};

const useFetchCategories = (): UseFetchCategoriesReturn => {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [errorsCategories, setErrorsCategories] = useState<{ message: string }[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState<boolean>(true);

  useEffect(() => {
    const fetchCategories = async () => {
      // check if we are in production or development, and set the api url accordingly (from .env file)
      const isProd = import.meta.env.VITE_PROD === 'true';

      try {
        const apiUrl = `${isProd ? import.meta.env.VITE_SERVER_URL_PROD : import.meta.env.VITE_SERVER_URL}api/categories`;
        const categoriesResponse = await fetch(apiUrl);
        if (!categoriesResponse.ok) {
          throw new Error(`HTTP error! status: ${categoriesResponse.status}`);
        }
        const categoriesData: Category[] = await categoriesResponse.json();

        if (!categoriesData) {
          setErrorsCategories([{ message: 'Categories not found' }]);
        } else {
          setCategories(categoriesData as Category[]);
        }

        setIsLoadingCategories(false); // Stop loading regardless of success or errors
      } catch (err) {
        const errorMessage = formatErrorMessage(err);
        setErrorsCategories([{ message: errorMessage }]);
        setIsLoadingCategories(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, errorsCategories, isLoadingCategories };
};

export default useFetchCategories;