import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const instagramImages = [
    {
      src: "https://cdn.shopify.com/s/files/1/0277/6085/3053/files/high-tops-shoes-skateboarder.jpg?v=1672801159",
      alt: "Instagram 1",
    },
    {
      src: "https://5.imimg.com/data5/SELLER/Default/2024/11/466875714/LF/PR/EN/141225721/women-bottom-wear-500x500.jpg",
      alt: "Instagram 2",
    },
    {
      src: "https://housely.com/wp-content/uploads/2025/01/9-56.jpg",
      alt: "Instagram 3",
    },
    {
      src: "https://images.pexels.com/photos/2061302/pexels-photo-2061302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Instagram 4",
    },
  ];

  const footerMenus = [
    {
      title: "Menu",
      links: [
        { label: "Shop", href: "/home" },
        { label: "About", href: "/About" },
        { label: "Journal", href: "/blog" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Help",
      links: [
        { label: "Returns & Exchange", href: "/returns" },
        { label: "Terms & Conditions", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "FAQs", href: "/faqs" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: "📍",
      text: (
        <>
          203 Fake St. Mountain View,
          <br />
          San Francisco, California, USA
        </>
      ),
    },
    { icon: "📞", text: "+2 392 3929 210" },
    { icon: "✉️", text: "info@yourdomain.com" },
  ];

  return (
    <>
      {/* Instagram Section */}
      <section className="bg-white pt-24">
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl font-bold mb-2">Follow Us On Instagram</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay in style! Follow us for the latest drops, styling tips,
            exclusive offers, and behind-the-scenes fun. Don’t miss out—join our
            community today!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {instagramImages.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={img.alt}
              className="w-full h-84 object-cover"
            />
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-white px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          {/* Brand Description */}
          <div>
            <h4 className="uppercase font-semibold mb-2 tracking-widest">
              Minishop
            </h4>
            <p className="text-gray-400">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia.
            </p>
          </div>

          {/* Dynamic Menus */}
          {footerMenus.map((menu, idx) => (
            <div key={idx}>
              <h4 className="uppercase font-semibold mb-2 tracking-widest">
                {menu.title}
              </h4>
              <ul className="space-y-1 text-gray-400">
                {menu.links.map((link, i) => (
                  <li key={i}>
                    <Link to={link.href} className="hover:text-[#d9ca89]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h4 className="uppercase font-semibold mb-2 tracking-widest">
              Have a Questions?
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {contactInfo.map((info, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span>{info.icon}</span>
                  <span>{info.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm mt-10">
          <p>
            Copyright ©2025 All rights reserved | This template is made with{" "}
            <span className="text-pink-500">♥</span> by{" "}
            <a href="#" className="text-[#d9ca89]">
              Colorlib
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
