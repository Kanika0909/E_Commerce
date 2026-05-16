import React from 'react'
import shippingimg from "./../assets/images/shipping_icon.png";
import customerimg from "./../assets/images/customer.png";
import secure_paymentimg from "./../assets/images/secure_payment.png";
import giftimg from "./../assets/images/gift.png";
import allDaySupportimg from "./../assets/images/allDaySupport.png";
import paymentimg from "./../assets/images/payment.png";
import customerphotoimg from "./../assets/images/customer_photo.jpg";

const About = () => {
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
              About Us
            </h1>
          </div>
        </section>
        <section className=" bg-white">
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
                We use SSL encryption and trusted payment gateways to ensure
                your transactions are 100% safe and secure.
              </p>
            </div>
          </div>
        </section>
        <section className="px-4 pt-24 bg-white">
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
                    Built for comfort, made to last—all-day cushioning and
                    support in every step.
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
                    I found the perfect pair of shoes and the whole experience
                    was amazing! Fast delivery, great quality, and super
                    comfortable. I’ll definitely be shopping here again!
                  </p>
                  <h4 className="text-[#d9ca89] font-semibold">
                    Garreth Smith
                  </h4>
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
    </div>
  );
}

export default About