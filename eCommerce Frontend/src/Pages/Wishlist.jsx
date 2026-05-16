import React, { useEffect, useState } from "react";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch from API
  useEffect(() => {
    fetch("http://localhost:3000/api/wishlist")
      .then((res) => res.json())
      .then((data) => {
        setWishlistItems(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch wishlist:", error);
        setLoading(false);
      });
  }, []);

  const removeFromWishlist = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  if (loading) {
    return (
      <div className="text-center pt-24 text-gray-600">Loading wishlist...</div>
    );
  }

  return (
    <div className="pt-24 px-6">
      <h2 className="text-3xl font-semibold text-center mb-6" >
        Your Wishlist ❤️
      </h2>

      {wishlistItems.length === 0 ? (
        <p className="text-center text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg p-4 text-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-60 object-cover mb-4 rounded"
              />
              <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
              <p className="text-green-600 font-medium mb-3">{item.price}</p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
                <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
