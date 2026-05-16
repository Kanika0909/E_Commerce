import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleToggle = () => setMobileOpen(!mobileOpen);

  const navItems = [
    { name: "Home", path: "/Home" },
    {
      name: "Catalog",
      subItems: [
        { name: "Shop", path: "#" },
        { name: "Single Product", path: "#" },
        { name: "Cart", path: "/Cart" },
        { name: "Checkout", path: "#" },
      ],
    },
    { name: "About", path: "/About" },
    { name: "Blog", path: "/Blog" },
    { name: "Contact", path: "/Contact" },
    { name: "Wishlist", path: "/wishlist" },
    { name: "🛒Cart", path: "/Cart" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black px-6 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-white">Minishop</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-end space-x-6 text-lg font-medium text-gray-100">
          {navItems.map((item, idx) =>
            item.subItems ? (
              <li key={idx} className="relative group">
                <span className="cursor-pointer hover:text-blue-600">
                  {item.name}
                </span>
                <ul className="absolute hidden group-hover:block bg-black mt-2 rounded z-10 text-white shadow-lg">
                  {item.subItems.map((sub, sIdx) => (
                    <li key={sIdx}>
                      <Link
                        to={sub.path}
                        className="block px-4 py-2 hover:bg-gray-500"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={idx}>
                <Link to={item.path} className="hover:text-blue-600">
                  {item.name}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={handleToggle} className="text-2xl text-white">
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="flex flex-col space-y-2 px-6 pt-20 pb-4 bg-black text-white md:hidden">
          {navItems.map((item, idx) =>
            item.subItems ? (
              <div key={idx}>
                <span className="block font-semibold">{item.name} ▾</span>
                <div className="pl-4 space-y-1">
                  {item.subItems.map((sub, sIdx) => (
                    <Link
                      key={sIdx}
                      to={sub.path}
                      className="block text-sm hover:text-blue-300"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={idx}
                to={item.path}
                className="block hover:text-blue-300"
              >
                {item.name}
              </Link>
            )
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
