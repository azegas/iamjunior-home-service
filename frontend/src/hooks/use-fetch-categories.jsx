import { useState, useEffect } from 'react';

const useFetchCategories = () => {
  const [categories, setCategories] = useState(null);
  const [errorsCategories, setErrorsCategories] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesResponse = await fetch(
          'http://localhost:3000/api/categories',
        );
        const categoriesData = await categoriesResponse.json();

        if (!categoriesData) {
          setErrorsCategories([{ message: 'Categories not found' }]);
        } else {
          setCategories(categoriesData);
        }

        setIsLoadingCategories(false); // Stop loading regardless of success or errors
      } catch {
        setErrorsCategories([{ message: 'Failed to fetch data' }]);
        setIsLoadingCategories(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, errorsCategories, isLoadingCategories };
};

export default useFetchCategories;
