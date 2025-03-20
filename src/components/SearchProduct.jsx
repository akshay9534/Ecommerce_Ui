/* eslint-disable react/prop-types */
import { useState } from 'react';

export const SearchProduct = ({ products, setProducts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    if (!Array.isArray(products)) return;

    if (value === '') {
      setProducts(products); // Reset to original
    } else {
      const filteredProducts = products.filter((product) =>
        product.title?.toLowerCase().includes(value)
      );
      setProducts(filteredProducts);
    }
  };

  return (
    <div className="mb-4 flex justify-center">
      <input
        type="text"
        placeholder="Search products by title..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-lg p-2 border rounded-md"
      />
    </div>
  );
};
