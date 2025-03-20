// import { useCallback, useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { CategoryContext } from '../context/CategoryContext';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';
// import { AddToCartPage } from './AddToCartPage';
// import { ProductDetailsPage } from './ProductDetailsPage';
// import { SearchProduct } from '../components/SearchProduct';

// export const CategoryPage = () => {
//   const { slug } = useParams();
//   const { categories } = useContext(CategoryContext);

//   const [products, setProducts] = useState([]);
//   const [originalProducts, setOriginalProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [modalType, setModalType] = useState('');

//   const category = categories.find((category) => category.slug === slug);

//   const fetchProducts = useCallback(async () => {
//     if (!category) return;
//     try {
//       const response = await axios.get('https://api.escuelajs.co/api/v1/products');
//       const allProducts = Array.isArray(response.data) ? response.data : [];
      
//       const filteredProducts = allProducts.filter(
//         (product) => product.category?.name?.toLowerCase() === category?.name?.toLowerCase()
//       );

//       setProducts(filteredProducts);
//       setOriginalProducts(filteredProducts);
//       setLoading(false);
//     } catch (err) {
//       setError(`Error fetching products. Please try again later. Error: ${err.message}`);
//       setLoading(false);
//     }
//   }, [category]);

//   useEffect(() => {
//     fetchProducts();
//   }, [fetchProducts]);

//   const openModal = (product, type) => {
//     setSelectedProduct(product);
//     setIsModalOpen(true);
//     setModalType(type);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedProduct(null);
//     setModalType('');
//   };

//   if (!category) {
//     return <p className="text-center text-red-500">Category not found</p>;
//   }

//   if (loading) return <p className="text-center">Loading products...</p>;
//   if (error) return <p className="text-center text-red-500">{error}</p>;

//   return (
//     <div className="container mx-auto p-5">
//       {/* Search bar always visible */}
//       <SearchProduct products={originalProducts} setProducts={setProducts} />

//       {/* Conditional rendering for no products */}
//       {products.length === 0 ? (
//         <p className="text-center">No products found. Please try a different search term.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <div key={product.id} className="shadow-lg p-4 rounded-xl transition-transform transform hover:scale-105 border border-[#d7d7d7] relative">
//               <button 
//                 className="absolute top-4 right-4 bg-emerald-600 text-white px-2 py-1 rounded-es-xl rounded-tr-xl shadow-black hover:bg-emerald-900" 
//                 onClick={() => openModal(product, 'addToCart')}>
//                 <FontAwesomeIcon icon={faPlus} />
//               </button>
//               <img 
//                 src={product?.images?.[0] || 'https://via.placeholder.com/150?text=No+Image'}  
//                 alt={product.title} 
//                 className="w-full h-40 object-cover rounded-xl mb-4" 
//                 onClick={() => openModal(product, 'view')}
//               />
//               <h1 className='text-brown-600'>{product.category.name}</h1>
//               <h2 className="text-sm font-semibold">{product.title}</h2>
//               <p className="text-gray-500">${product.price}</p>
//             </div>
//           ))}
//         </div>
//       )}

//       {isModalOpen && (
//         modalType === 'addToCart' ? (
//           <AddToCartPage
//             isModalOpen={isModalOpen}
//             closeModal={closeModal}
//             selectedProduct={selectedProduct}
//           />
//         ) : (
//           <ProductDetailsPage
//             isModalOpen={isModalOpen}
//             closeModal={closeModal}
//             selectedProduct={selectedProduct}
//           />
//         )
//       )}

//     </div>
//   );
// };
