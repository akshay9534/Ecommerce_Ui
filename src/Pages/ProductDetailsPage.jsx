/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export const ProductDetailsPage = ({ isModalOpen, closeModal, selectedProduct }) => {
   // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [isModalOpen]);

  if (!isModalOpen || !selectedProduct) return null;
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-40" onClick={closeModal}></div>

      {/* Modal */}
      <div className="bg-white p-8 rounded-xl shadow-lg z-50 w-full max-w-md relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Product Description</h2>
          <button onClick={closeModal} className="text-gray-500 hover:text-red-500">
            <FontAwesomeIcon icon={faXmark} size="xl"/>
          </button>
        </div>

        {/* Product Details */}
        <div className="flex gap-4 mb-4">
          <img src={selectedProduct.images[0]} alt={selectedProduct.title} className="w-36 h-32 object-cover rounded-lg" />
          <div>
            <h3 className="text-lg font-semibold">{selectedProduct.title}</h3>
            <p className="text-gray-500">${selectedProduct.price}</p>
          </div>
        </div>

        {/* Product Description */}
        <div className="text-sm">
          <p>{selectedProduct.description}</p>
        </div>
      </div>
    </div>
      </>
  )
}

