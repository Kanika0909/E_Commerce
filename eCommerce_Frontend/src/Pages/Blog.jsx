import React from 'react'

const Blog = () => {
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
              BLOGS
            </h1>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Search */}
            <div>
              <input
                type="text"
                placeholder="🔍 Type a keyword and hit enter"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            {/* Categories */}
            <div>
              <h2 className="font-bold text-lg mb-2">CATEGORIES</h2>
              <ul className="space-y-1 text-gray-700">
                <li className="flex justify-between border-b py-1">
                  Shoes <span>(12)</span>
                </li>
                <li className="flex justify-between border-b py-1">
                  Men's Shoes <span>(22)</span>
                </li>
                <li className="flex justify-between border-b py-1">
                  Women's <span>(37)</span>
                </li>
                <li className="flex justify-between border-b py-1">
                  Accessories <span>(42)</span>
                </li>
                <li className="flex justify-between border-b py-1">
                  Sports <span>(14)</span>
                </li>
                <li className="flex justify-between border-b py-1">
                  Lifestyle <span>(140)</span>
                </li>
              </ul>
            </div>
            {/* Recent Blogs */}
            <div>
              <h2 className="font-bold text-lg mb-2">RECENT BLOGS</h2>
              <div className="flex gap-4 mb-5">
                <img
                  src="https://i.pinimg.com/236x/ab/fb/fa/abfbfab5eaa35cee34f3b9777e7f19a3.jpg"
                  alt="blog thumb"
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h4 className="font-semibold text-sm">
                    Top 10 Shoe Trends You Can’t Miss This Season
                  </h4>
                </div>
              </div>
              <div className="flex gap-4 mb-5">
                <img
                  src="https://img.freepik.com/premium-photo/friends-city-shopping-bag-happiness-with-retail-fashion-women-outdoor-market-shop-boutique-designer-brand-happy-customer-discount-sale-with-laughter-paris_590464-142941.jpg"
                  alt="blog thumb"
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h4 className="font-semibold text-sm">
                    Gifting Guide: How to Choose the Right Shoes for Loved Ones
                  </h4>
                </div>
              </div>
              <div className="flex gap-4 mb-5">
                <img
                  src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,h_344,q_80,w_560/v1/clients/beaufortsc/5k_image_2_2f9175de-fbb7-4c93-acf1-244046c7da2d.jpg"
                  alt="blog thumb"
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h4 className="font-semibold text-sm">
                    Best Walking &amp; Running Shoes for Everyday Comfort
                  </h4>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-bold text-lg uppercase mb-4">Tag Cloud</h2>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm bg-gray-100 hover:bg-yellow-300 rounded cursor-pointer">
                  Shop
                </span>
                <span className="px-3 py-1 text-sm bg-gray-100 hover:bg-yellow-300 rounded cursor-pointer">
                  Products
                </span>
                <span className="px-3 py-1 text-sm bg-gray-100 hover:bg-yellow-300 rounded cursor-pointer">
                  Shirt
                </span>
                <span className="px-3 py-1 text-sm bg-gray-100 hover:bg-yellow-300 rounded cursor-pointer">
                  Jeans
                </span>
                <span className="px-3 py-1 text-sm bg-gray-100 hover:bg-yellow-300 rounded cursor-pointer">
                  Shoes
                </span>
                <span className="px-3 py-1 text-sm bg-gray-100 hover:bg-yellow-300 rounded cursor-pointer">
                  Dress
                </span>
                <span className="px-3 py-1 text-sm bg-gray-100 hover:bg-yellow-300 rounded cursor-pointer">
                  Coats
                </span>
                <span className="px-3 py-1 text-sm bg-gray-100 hover:bg-yellow-300 rounded cursor-pointer">
                  Jumpsuits
                </span>
              </div>
            </div>
            <div>
              <h2 className="uppercase font-bold text-lg mb-4">Paragraph</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                At Minishop, we believe the right pair of shoes can transform
                your day—and your look. From expert care tips to the latest
                fashion trends, our blog is your go-to guide for all things
                footwear. Whether you're dressing up, winding down, or walking
                miles, we’re here to help you choose wisely, care deeply, and
                step boldly.
              </p>
            </div>
          </aside>
          {/* Blog Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Blog Post 1 */}
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src="https://i.pinimg.com/236x/ab/fb/fa/abfbfab5eaa35cee34f3b9777e7f19a3.jpg"
                alt="blog"
                className="w-full md:w-60 h-40 object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  👟 Top 10 Shoe Trends You Can’t Miss This Season
                </h3>
                <p className="text-gray-600">
                  From bold color palettes to chunky soles and vintage
                  revivals... style them effortlessly for your everyday looks.
                </p>
                <button className="mt-4 px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500">
                  Read More
                </button>
              </div>
            </div>
            {/* Blog Post 2 */}
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src="https://img.freepik.com/premium-photo/friends-city-shopping-bag-happiness-with-retail-fashion-women-outdoor-market-shop-boutique-designer-brand-happy-customer-discount-sale-with-laughter-paris_590464-142941.jpg"
                alt="blog"
                className="w-full md:w-60 h-40 object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  🎁 Gifting Guide: How to Choose the Right Shoes for Loved Ones
                </h3>
                <p className="text-gray-600">
                  Shoes make thoughtful and stylish gifts—but only if you choose
                  right... give a gift that fits just right.
                </p>
                <button className="mt-4 px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500">
                  Read More
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,h_344,q_80,w_560/v1/clients/beaufortsc/5k_image_2_2f9175de-fbb7-4c93-acf1-244046c7da2d.jpg"
                alt="blog"
                className="w-full md:w-60 h-40 object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  🏃 Best Walking &amp; Running Shoes for Everyday Comfort
                </h3>
                <p className="text-gray-600">
                  Looking for the perfect shoes to keep up with your active
                  lifestyle? We break down the best walking and running shoes
                  that combine comfort, durability, and style. Say goodbye to
                  sore feet and hello to all-day support for every step you
                  take.
                </p>
                <button className="mt-4 px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500">
                  Read More
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src="https://media.istockphoto.com/id/1185087444/photo/pretty-blonde-girl-in-casualwear-choosing-pair-of-new-shoes-in-the-mall.jpg?s=612x612&w=0&k=20&c=Ek5chQ_X4qGGKABUSEVniNEx00KgZ0uIHHj87xdVjV4="
                alt="blog"
                className="w-full md:w-60 h-40 object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  👠 Finding the Perfect Heels for Every Occasion
                </h3>
                <p className="text-gray-600">
                  Choosing the right pair of heels can make or break your
                  outfit—and your comfort. This blog helps you pick the perfect
                  pair based on heel height, design, and event type. Whether
                  it's for work, weddings, or nights out, walk in confidence and
                  style.
                </p>
                <button className="mt-4 px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500">
                  Read More
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src="https://thumbs.dreamstime.com/b/composition-stylish-footwear-shoe-care-accessories-white-background-214180196.jpg"
                alt="blog"
                className="w-full md:w-60 h-40 object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  🧼 How to Keep Your Shoes Looking Brand New
                </h3>
                <p className="text-gray-600">
                  Your shoes deserve some love too! In this guide, we share
                  practical tips on cleaning, storing, and maintaining different
                  types of footwear—whether it’s leather, canvas, suede, or
                  mesh. Extend the life of your favorite pairs and keep them
                  looking fresh season after season.
                </p>
                <button className="mt-4 px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Blog