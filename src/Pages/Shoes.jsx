import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useCart } from "../context/CartContext";
export const Shoes = () => {
  const { addToCart } = useCart(); 
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
 
  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://api.escuelajs.co/api/v1/products');
      console.log(response, "data");
      // const detailsData =
      const filteredProducts = response.data.filter(product => product.category?.name === 'Shoe');
      console.log("filteredProducts :"+filteredProducts);
      setProducts(filteredProducts);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setQuantity(1);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = () => {
    addToCart(selectedProduct, quantity);
    console.log(`Added ${quantity} of ${selectedProduct.title} to cart.`);
    closeModal();
  };

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

 

  return (
    <div className="container mx-auto p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="shadow-lg p-4 rounded-xl transition-transform transform hover:scale-105 border border-[#d7d7d7] relative">
            <button className="absolute top-4 right-4 bg-emerald-600 text-white px-2 py-1 rounded-es-xl rounded-tr-xl shadow-black hover:bg-emerald-900" onClick={() => openModal(product)}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
            <img src={product.images[0]}  alt={product.title} className="w-full h-40 object-cover rounded-xl mb-4" />
            <h1 style={{ color: "brown" }}>{product.category.name}</h1>
            <h2 className="text-sm font-semibold">{product.title}</h2>
            <p className="text-gray-500">${product.price}</p>
          </div>
        ))}
      </div>

      {
      isModalOpen && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-40" onClick={closeModal}></div>
          <div className="bg-white p-8 rounded-xl shadow-lg z-50 w-full max-w-md relative">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">My Order</h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-red-500">
                <FontAwesomeIcon icon={faXmark} size="xl"/>
              </button>
            </div>
            <div className="flex items-center gap-4">
              <img src={selectedProduct.images[0]} alt={selectedProduct.title} className="w-24 h-24 object-cover rounded-lg" />
              <div>
                <h3 className="text-lg font-semibold">{selectedProduct.title}</h3>
                <div className="flex w-full justify-between mt-3 items-center">
                  <p className="text-gray-500">${selectedProduct.price}</p>
                  <div className="flex items-center gap-4">
                  <button className="bg-gray-300 px-1 py-0 rounded-xl hover:bg-gray-400 cursor-pointer" onClick={() => handleQuantityChange(-1)}>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <span className="text-lg font-semibold">{quantity}</span>
                  <button className="bg-orange-500 text-white  px-1 py-0 rounded-xl cursor-pointer hover:bg-orange-600" onClick={() => handleQuantityChange(1)}>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                 </div>
                </div>
              </div>
            </div>
           
            <div className="flex justify-end mt-6">
              <button onClick={closeModal} className="px-4 py-2 bg-gray-400 text-white rounded mr-4">Cancel</button>
              <button onClick={handleAddToCart} className="px-4 py-2 bg-orange-500 text-white rounded">Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
