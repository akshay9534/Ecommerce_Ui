/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import  { createContext, useEffect, useState } from 'react';
import axios from 'axios';

// Create Context
export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState('');

  // Fetch Data
  const fetchCategories = async () => {
    try {
      const response = await axios.get('https://api.escuelajs.co/api/v1/categories');
      const categoryslice = response.data.slice(0, 4); // Get only first 6 categories
      setCategories(categoryslice);
      //console.log("CategoryContext page    ",response.data)
    } catch (err) {
      setError(`Error fetching categories: ${err.message}`);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories, error }}>
      {children}
    </CategoryContext.Provider>
  );
};
