import React, { useState } from "react";

const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "Browse our products, add your favorite items to the cart, then proceed to checkout. Follow the steps to enter your shipping details and make the payment.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept credit/debit cards, UPI, net banking, and popular wallets like Paytm and PhonePe.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Orders are typically delivered within 5-7 business days. You’ll receive tracking details once your order is shipped.",
  },
  {
    question: "Can I return or exchange a product?",
    answer:
      "Yes, we offer a 7-day return & exchange policy. Please visit our Returns & Exchange page for details.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach us through the Contact Us page or email us at support@minishop.com.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="pt-24 px-6 pb-16 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Frequently Asked Questions
      </h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-md overflow-hidden shadow-sm bg-white"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-4 py-3 font-medium text-left text-lg hover:bg-gray-100"
            >
              <span>{faq.question}</span>
              <span>{activeIndex === index ? "−" : "+"}</span>
            </button>
            {activeIndex === index && (
              <div className="px-4 pb-4 text-sm text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
