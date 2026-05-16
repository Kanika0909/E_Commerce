// import React from "react";
import shippingimg from "./../assets/images/shipping_icon.png";
import heroimg from "./../assets/images/bg_1.png";
import customerimg from "./../assets/images/customer.png";
import secure_paymentimg from "./../assets/images/secure_payment.png";
import giftimg from "./../assets/images/gift.png";
import allDaySupportimg from "./../assets/images/allDaySupport.png";
import paymentimg from "./../assets/images/payment.png";
import customerphotoimg from "./../assets/images/customer_photo.jpg";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {

  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:3000/api/wishlist")
      .then((res) => setWishlist(res.data.map((item) => item.id)))
      .catch((err) => console.error("Error fetching wishlist:", err));
    axios
      .get("http://localhost:3000/api/cart")
      .then((res) => setCart(res.data.map((item) => item.id)))
      .catch((err) => console.error("Error fetching cart:", err));
  }, []);

  const handleWishlistToggle = (product) => {
    if (wishlist.includes(product.id)) {
      axios
        .delete(`http://localhost:3000/api/wishlist/${product.id}`)
        .then(() =>
          setWishlist((prev) => prev.filter((id) => id !== product.id))
        )
        .catch((err) => console.error("Error removing from wishlist:", err));
    } else {
      axios
        .post("http://localhost:3000/api/wishlist", product)
        .then(() => setWishlist((prev) => [...prev, product.id]))
        .catch((err) => console.error("Error adding to wishlist:", err));
    }
  };

  const handleAddToCart = (product) => {
    if (cart.includes(product.id)) {
      axios
        .delete(`http://localhost:3000/api/cart/${product.id}`)
        .then(() => setCart((prev) => prev.filter((id) => id !== product.id)))
        .catch((err) => console.error("Error removing from cart:", err));
    } else {
      axios
        .post("http://localhost:3000/api/cart", product)
        .then(() => setCart((prev) => [...prev, product.id]))
        .catch((err) => console.error("Error adding to cart:", err));
    }
  };



  const renderWishlistButton = (product) => (
    <button
      onClick={() => handleWishlistToggle(product)}
      className="absolute top-2 right-2 text-red-500 text-xl z-10"
    >
      {wishlist.includes(product.id) ? "♥" : "♡"}
    </button>
  );

  const products = [
    {
      id: "product1",
      title: "NIKE FREE RN 2019 ID",
      price: 120,
      image:
        "https://assets.ajio.com/medias/sys_master/root/20230904/CAi4/64f6059fafa4cf41f5a35769/-473Wx593H-466526725-navy-MODEL.jpg",
    },
    {
      id: "product2",
      title: "Discounted Shoes",
      price: 80,
      originalPrice: 120,
      image:
        "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/26146414/2023/12/26/98760dfd-7c2f-4e85-b7c1-fc9ed3c95ad21703566790661-The-Roadster-Lifestyle-Co-Women-White--Tan-Brown-Colourblock-1.jpg",
      discount: true,
    },
    {
      id: "product3",
      title: "Colorful Loafers",
      price: 120,
      image:
        "https://rukminim2.flixcart.com/image/704/844/xif0q/shoe/4/6/h/-original-imagz5kfqvh498yd.jpeg?q=90&crop=false",
    },
    {
      id: "product4",
      title: "Blue Sneakers",
      price: 120,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh0gzrfyddsFwksP99kooFE2TxfsXao0tn7w&s",
    },
    {
      id: "product5",
      title: "White Sneakers",
      price: 120,
      image:
        "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/26209124/2023/12/4/f697e3df-ea3d-4be8-a8ef-9b913542f85d1701662942330ASIANMenWhiteFashion1.jpg",
    },
    {
      id: "product6",
      title: "Retro Style",
      price: 80,
      originalPrice: 120,
      image:
        "https://stylestryproductionwls47sou4z.cdn.e2enetworks.net/images/products/medium/c6d58b4228e512f9ee793f13fde69fa56f89bb83.webp",
      discount: true,
    },
    {
      id: "product7",
      title: "Leather Loafers",
      price: 120,
      image:
        "https://www.shoetree.io/cdn/shop/files/AW22-LBL1232-WOOD_0_3ec869fd-138e-4bee-b266-ec90ac857484.jpg?v=1736849583",
    },
    {
      id: "product8",
      title: "Red Sports Shoes",
      price: 120,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiyPM6LKEagZD9TTR_qk4BVM6PpqqP7WFlhQ&s",
    },
  ];

  const ProductCard = ({ product }) => (
    <div className="bg-white shadow-sm rounded overflow-hidden text-center relative group">
      {renderWishlistButton(product)}
      {product.discount && (
        <span className="absolute top-2 left-0 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rotate-[-90deg] origin-top-left">
          50% OFF
        </span>
      )}
      <img
        src={product.image}
        alt={product.title}
        className="w-full p-6 h-60 object-contain mx-auto transition duration-300 group-hover:opacity-80"
      />
      <div className="p-4">
        <p className="text-xs text-gray-400 uppercase">Lifestyle</p>
        <h3 className="font-semibold text-sm">{product.title}</h3>
        <p className="text-sm mt-1">
          {product.originalPrice && (
            <span className="line-through text-gray-400">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
          <span className="text-black font-semibold ml-1">
            ${product.price.toFixed(2)}
          </span>
        </p>
        <div className="text-yellow-500 mt-1 text-sm">★★★★★</div>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition">
        <button
          className="bg-gray-800 text-white text-xs px-3 py-1 rounded"
          onClick={() => handleAddToCart(product)}
        >
          {cart.includes(product.id) ? "Remove from Cart" : "Add to Cart"}
        </button>

        <button className="bg-yellow-500 text-white text-xs px-3 py-1 rounded">
          Buy Now
        </button>
      </div>
    </div>
  );


  return (
    <div>
      <section className="flex flex-col-reverse lg:flex-row items-center px-6 lg:px-20 py-10 bg-amber-300">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-4 text-center lg:text-left mt-20">
          <span className="bg-black text-white text-xs px-3 py-1 inline-block uppercase tracking-widest">
            # New Arrival
          </span>
          <h2 className="text-4xl font-semibold leading-tight">
            Shoes Collection
          </h2>
          <p className="text-md text-gray-800">
            Discover a world of stylish, comfortable, and high-quality footwear
            for every step you take. Whether you’re looking for casual kicks,
            elegant heels, or everyday essentials, we’ve got something just for
            you. Happy shopping!
          </p>
          <button className="bg-yellow-700 text-white font-medium px-5 py-2 mt-4 hover:bg-yellow-800">
            Discover Now
          </button>
        </div>
        {/* Right Image */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 mt-20">
          <img
            src={heroimg}
            alt="Hero Image"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </section>
      {/* </div> */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 text-center py-5">
          {/* Free Shipping */}
          <div className=" transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            <img
              src={shippingimg}
              alt="Free Shipping"
              className="mx-auto mb-4 w-30 h-30"
            />
            <h3 className="font-semibold text-lg mb-2">Free Shipping</h3>
            <p className="text-md text-gray-600">
              Get free standard shipping on all orders - no minimum required!
              Fast, reliable delivery right to your doorstep.
            </p>
          </div>
          {/* Support Customer */}
          <div className=" transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            <img
              src={customerimg}
              alt="Support Customer"
              className="mx-auto mb-4 w-24 h-24 mt-6"
            />
            <h3 className="font-semibold text-lg mb-2">Support Customer</h3>
            <p className="text-md text-gray-600">
              Need help? Our friendly support team is here 24/7 to assist you
              with orders, returns, or any queries.
            </p>
          </div>
          {/* Secure Payments */}
          <div className=" transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            <img
              src={secure_paymentimg}
              alt="Secure Payments"
              className="mx-auto mb-4 w-30 h-30"
            />
            <h3 className="font-semibold text-lg mb-2">Secure Payments</h3>
            <p className="text-md text-gray-600">
              We use SSL encryption and trusted payment gateways to ensure your
              transactions are 100% safe and secure.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-8 px-4">
        <div className="py-10 w-full text-center">
          <h1 className="text-3xl md:text-4xl font-semibold mb-2">
            New Shoes Arrival
          </h1>
          <p className="text-gray-600 text-md max-w-xl mx-auto">
            Step into style with our latest shoe collection! Fresh designs,
            trending styles, and unbeatable comfort—just dropped. Grab yours
            before they’re gone!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <div className="bg-gray-100 h-[350px]">
        <section className="px-4 pt-32 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Men's Collection */}
            <div className="relative h-96 text-white flex items-end p-6">
              <img
                src="https://image.made-in-china.com/202f0j00fpSqHwkECDrd/Best-Price-Custom-Logo-Fashion-Men-s-Shoes-Casual-Shoes-Walking-Style-Shoes-for-Mens.webp"
                alt="Men's Collection"
                className="absolute inset-0 w-full h-full object-cover z-0"
              />

              <div className="relative z-10">
                <p className="text-xs tracking-widest uppercase">Men's Shoes</p>
                <h3 className="text-2xl font-bold">Men's Collection</h3>
                <p className="text-sm mt-2 font-semibold">
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
                <button className="mt-4 px-4 py-2 bg-black text-white text-sm rounded transform transition-transform duration-300 hover:scale-105 hover:bg-yellow-400 cursor-pointer">
                  Shop now
                </button>
              </div>
            </div>

            {/* Women's Collection */}
            <div className="relative h-96 text-white flex items-end p-6">
              <img
                src="https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/e/e/m/3-1230-blk-3-deals4you-beige-original-imahyggjua6zug2q.jpeg?q=90&crop=false"
                alt="Men's Collection"
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              <div className="relative mt-48">
                <p className="text-xs tracking-widest uppercase">
                  Women's Shoes
                </p>
                <h3 className="text-2xl font-bold">Women's Collection</h3>
                <p className="text-sm mt-2 font-semibold">
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
                <button className="mt-4 px-4 py-2 bg-black text-white text-sm rounded transform transition-transform duration-300 hover:scale-105 hover:bg-yellow-400 cursor-pointer">
                  Shop now
                </button>
              </div>
            </div>
            {/* Summer Sale */}

            <div className="relative h-96 bg-gray-100 text-center p-6 flex flex-col justify-center">
              <p className="text-xs tracking-widest uppercase">Summer Sale</p>
              <h3 className="text-2xl font-bold">Extra 50% Off</h3>
              <p className="text-sm mt-2">
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean.
              </p>
              <button className="mt-4 px-4 py-2 bg-black text-white text-sm rounded transform transition-transform duration-300 hover:scale-105 hover:bg-yellow-400 cursor-pointer">
                Shop now
              </button>
            </div>
            {/* Best Sellers */}
            <div className="relative h-96 bg-yellow-400 text-white flex items-end p-6 overflow-hidden">
              <img
                src="https://housely.com/wp-content/uploads/2025/01/9-56.jpg"
                alt="Best Sellers Shoes"
                className="absolute top-0 left-0 h-full object-cover opacity-90"
              />
              <div className="relative z-10">
                <p className="text-xs tracking-widest uppercase">Shoes</p>
                <h3 className="text-2xl font-bold">Best Sellers</h3>
                <p className="text-sm mt-2">
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
                <button className="mt-4 px-4 py-2 bg-black text-white text-sm rounded transform transition-transform duration-300 hover:scale-105 hover:bg-yellow-400 cursor-pointer">
                  Shop now
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Customer Reviews */}
      <section className="px-4 pt-64 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left: Feature Tabs */}
          <div className="space-y-2">
            {/* Tab 1 */}
            <div className="flex items-center gap-4 bg-white p-4 border border-gray-200">
              <img src={shippingimg} className="w-20 h-20" />
              <div>
                <h4 className="font-semibold">Free Shipping</h4>
                <p className="text-sm text-gray-600">
                  Get free standard shipping on all orders - no minimum
                  required! Fast, reliable delivery right to your doorstep.
                </p>
              </div>
            </div>
            {/* Tab 2 */}
            <div className="flex items-center gap-4 bg-gray-100 p-4">
              <img src={giftimg} className="w-20 h-20" />
              <div>
                <h4 className="font-semibold">Valuable Gifts</h4>
                <p className="text-sm text-gray-600">
                  The perfect gift? Stylish shoes they’ll love—made to impress
                  and made to last.
                </p>
              </div>
            </div>
            {/* Tab 3 - Active (gold) */}
            <div className="flex items-center gap-9 bg-amber-200 p-4">
              <img src={paymentimg} className="w-16 h-16" />
              <div>
                <h4 className="font-semibold">Secure Payment</h4>
                <p className="text-sm text-gray-600">
                  Shop safely with encrypted checkout and trusted payment
                  options. Your security is our priority.
                </p>
              </div>
            </div>
            {/* Tab 4 - Dark (active) */}
            <div className="flex items-center gap-4 bg-black text-white p-4">
              <img src={allDaySupportimg} className="w-20 h-20" />
              <div>
                <h4 className="font-semibold text-amber-200">
                  All Day Support
                </h4>
                <p className="text-sm">
                  Built for comfort, made to last—all-day cushioning and support
                  in every step.
                </p>
              </div>
            </div>
          </div>
          {/* Right: Testimonial Content */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-2">
              Our satisfied customer says
            </h2>
            <p className="text-gray-600 text-md mb-20">
              Loved by thousands! Hear from happy shoppers who found their
              perfect fit. Real stories. Real satisfaction.
            </p>
            <div className="flex items-start gap-4">
              <img
                src={customerphotoimg}
                alt="customer"
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <p className="text-lg text-gray-800 border-l-4 border-[#d9ca89] pl-4 italic mb-2">
                  I found the perfect pair of shoes and the whole experience was
                  amazing! Fast delivery, great quality, and super comfortable.
                  I’ll definitely be shopping here again!
                </p>
                <h4 className="text-[#d9ca89] font-semibold">Garreth Smith</h4>
                <p className="text-xs text-gray-400 uppercase">
                  Marketing Manager
                </p>
              </div>
            </div>
            {/* Dots */}
            <div className="flex items-center mt-6 gap-2">
              <span className="w-3 h-3 bg-[#d9ca89] rounded-full" />
              <span className="w-3 h-3 bg-gray-300 rounded-full" />
              <span className="w-3 h-3 bg-gray-300 rounded-full" />
              <span className="w-3 h-3 bg-gray-300 rounded-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
