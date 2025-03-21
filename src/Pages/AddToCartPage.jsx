/* eslint-disable react/prop-types */
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

export const AddToCartPage = ({ isModalOpen, closeModal, selectedProduct }) => {
  const { addToCart } = useCart(); 
  const [quantity, setQuantity] = useState(1); 

    if (!isModalOpen || !selectedProduct) return null;

    const handleAddToCart = () => {
      addToCart(selectedProduct, quantity);
      //console.log(`Added ${quantity} of ${selectedProduct.title} to cart.`);
      closeModal();
    };
  
    const handleQuantityChange = (change) => {
      setQuantity((prev) => Math.max(1, prev + change));
    };

  return (
    <>
    {isModalOpen && selectedProduct && (
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
                <div className="mt-3">
                  <h2>
                    Total Amount : ${selectedProduct.price * quantity}
                  </h2>
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
      </>
  )
}

