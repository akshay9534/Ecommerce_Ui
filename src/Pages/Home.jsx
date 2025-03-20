// // import React from 'react'
// import axios from 'axios';
// import { useEffect, useState } from "react";
// import { AddToCartPage } from './AddToCartPage';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';
// import { ProductDetailsPage } from './ProductDetailsPage';
// import { SearchProduct } from '../components/SearchProduct';

// export const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [originalProducts, setOriginalProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   // Modal state
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [modalType, setModalType] = useState('');

// //fetch Data from Api
//   const fetchProducts =async ()=>{
//     try{
//       const response= await axios.get("https://api.escuelajs.co/api/v1/products");
//       setProducts(response.data);
//       setOriginalProducts(response.data); // Store original data for reset
//       console.log("data Home :: ",response.data);
//       setLoading(false);
//     }catch(err){
//       setError('Error fetching products. Please try again later.',err);
//     }
//     finally {
//       setLoading(false);
//     }
//   }

//   //call api when page render
//   useEffect(()=>{
//     fetchProducts();
//   },[])

//   // Modal Handlers
//   const openModal = (product,type) => {
//     setSelectedProduct(product);
//     setIsModalOpen(true);
//     setModalType(type);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedProduct(null);
//     setModalType('');
//   };

//  // Loading and Error States
//  if (loading) return <p className="text-center mt-10">Loading products...</p>;
//  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
//  if (products.length === 0) return <p className="text-center mt-10 text-gray-500">No Data Found</p>;


//   return (
//     <div className="container mx-auto p-5">
      
//       <SearchProduct products={originalProducts} setProducts={setProducts}/>
//       {products.length === 0 ? (
//         <p className="text-center">No products available in this category.</p>
//       ) : (
//        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map(product => (
//           <div key={product.id} className="shadow-lg p-4 rounded-xl transition-transform transform hover:scale-105 border border-[#d7d7d7]">
//             <button className="absolute top-4 right-4 bg-emerald-600 text-white px-2 py-1 rounded-es-xl rounded-tr-xl shadow-black hover:bg-emerald-900" 
//             onClick={() => openModal(product,'addToCart')}>
//               <FontAwesomeIcon icon={faPlus} />
//             </button>
//             <img 
//               src={product.images[0] || 'https://via.placeholder.com/150?text=No+Image'} 
//               alt={product.title} 
//               className="w-full h-40 object-cover rounded-xl mb-4"
//               onClick={()=>openModal(product,'view')}
//             />
//             <h1 style={{color:"brown"}}>{product.category.name}</h1>
//             <h2 className="text-sm font-semibold">{product.title}</h2>
//             <p className="text-gray-500">${product.price}</p>
//           </div>
//         ))}
//       </div>
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
//   )
// }

