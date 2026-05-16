import React from 'react'

const Contact = () => {
  return (
    <div>
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
              Contact Us
            </h1>
          </div>
        </section>
        <div>
          <div className="bg-gray-100 py-10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {/* Address */}
              <div className="bg-white p-6 shadow-sm rounded">
                <h3 className="font-semibold text-lg mb-2">Address:</h3>
                <p className="text-gray-700 text-sm">
                  198 West 21th Street, Suite 721
                  <br />
                  New York NY 10016
                </p>
              </div>
              {/* Phone */}
              <div className="bg-white p-6 shadow-sm rounded">
                <h3 className="font-semibold text-lg mb-2">Phone:</h3>
                <p className="text-gray-700 text-sm">+1235 2355 98</p>
              </div>
              {/* Email */}
              <div className="bg-white p-6 shadow-sm rounded">
                <h3 className="font-semibold text-lg mb-2">Email:</h3>
                <p className="text-sm text-blue-600">info@yoursite.com</p>
              </div>
              {/* Empty Placeholder (optional for design balance) */}
              <div className="bg-white p-6 shadow-sm rounded hidden lg:block">
                <p className="text-sm text-gray-400">
                  More details coming soon...
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-100 p-6">
            <div className="text-center text-gray-600">
              <h3 className="text-xl font-semibold mb-2">Why Shop With Us?</h3>
              <p className="text-sm">
                Handpicked quality footwear. Fast delivery. Trusted by 10,000+
                happy customers.
              </p>
            </div>
            {/* Contact Form */}
            <form className="space-y-4 bg-white p-6 rounded shadow-md">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border p-3 rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border p-3 rounded"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full border p-3 rounded"
              />
              <textarea
                placeholder="Message"
                className="w-full border p-3 rounded h-32"
                defaultValue={""}
              />
              <button
                type="submit"
                className="bg-yellow-300 text-white px-6 py-3 rounded-full hover:bg-yellow-400"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact