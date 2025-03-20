import { useCart } from "../context/CartContext";

export const Orders = () => {
  const { cart } = useCart();

  return (
    <div className="container mx-auto p-5">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold ">My Orders</h1>
        <h2 className="text-xl font-bold ">
          Total Order Price: ${cart.reduce((acc, order) => acc + order.price * order.quantity, 0).toFixed(2)}
        </h2>
      </div>
      {
      cart.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cart.map((order, index) => (
            <div key={index} className="border p-4 rounded-xl">
              <img src={order.images[0]} alt={order.title} className="w-full h-40 object-cover rounded-xl" />
              <h2 className="text-lg font-semibold">{order.title}</h2>
              <p className="text-gray-500">Quantity: {order.quantity}</p>
              <p className="text-gray-500">Price: ${order.price}</p>
              <p className="text-black-200 font-bold">Total: ${order.price * order.quantity}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

