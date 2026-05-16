import React, { useEffect, useState } from "react";
import axios from "axios";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart items on mount
  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/cart");
      setCartItems(res.data);
    } catch (err) {
      console.error("Error fetching cart items:", err);
    }
  };

  // Increment quantity
  const handleIncrement = async (id) => {
    try {
      await axios.patch(`http://localhost:3000/api/cart/increment/${id}`);
      fetchCart();
    } catch (err) {
      console.error("Error incrementing quantity:", err);
    }
  };

  // Decrement quantity
  const handleDecrement = async (id) => {
    try {
      await axios.patch(`http://localhost:3000/api/cart/decrement/${id}`);
      fetchCart();
    } catch (err) {
      console.error("Error decrementing quantity:", err);
    }
  };

  // Remove item from cart
  const handleRemove = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/cart/${id}`);
      fetchCart();
    } catch (err) {
      console.error("Error removing item:", err);
    }
  };

  // Calculate totals
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div>
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage:
            'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNwjTrJo0M355jqQiCLs-OztmEHdkqzcuR4nsGn9luhhglmfCy")',
        }}
      >
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />
        <div className="relative text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-black mt-2">
            Your Cart
          </h1>
        </div>
      </section>

      <div className="overflow-x-auto mt-10">
        {cartItems.length === 0 ? (
          <div className="text-center text-xl py-10">Your cart is empty.</div>
        ) : (
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead className="bg-yellow-300 text-left text-sm font-semibold text-gray-900">
              <tr>
                <th className="px-4 py-3">Product</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Quantity</th>
                <th className="px-4 py-3">Total</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="px-4 py-4 flex items-center space-x-4">
                    <img
                      src={item.image}
                      className="w-16 h-16 object-contain"
                      alt={item.title}
                    />
                    <div>
                      <p className="font-semibold">{item.title}</p>
                    </div>
                  </td>
                  <td className="px-4 py-4">₹{item.price}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleDecrement(item.id)}
                        className="px-2 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleIncrement(item.id)}
                        className="px-2 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-4">₹{item.quantity * item.price}</td>
                  <td className="px-4 py-4 text-center">
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Summary */}
      {cartItems.length > 0 && (
        <div className="flex justify-end p-6">
          <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between py-2 border-b">
              <span>Subtotal</span>
              <span>₹{calculateTotal()}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span>Shipping</span>
              <span>₹100</span>
            </div>
            <div className="flex justify-between py-2 font-bold text-lg">
              <span>Total</span>
              <span>₹{calculateTotal() + 100}</span>
            </div>
            <button className="mt-6 w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 rounded">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
