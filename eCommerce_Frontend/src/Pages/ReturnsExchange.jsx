import React from "react";

const ReturnsExchange = () => {
  return (
    <div className="pt-24 px-6 pb-16 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Returns & Exchange Policy
      </h1>

      <section className="space-y-4">
        <p>
          We want you to love your purchase! If you're not completely satisfied,
          we’re here to help. Please read the guidelines below regarding returns
          and exchanges:
        </p>

        <h2 className="text-xl font-semibold mt-6">🛍️ Return Eligibility</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Items must be returned within <strong>15 days</strong> of delivery.
          </li>
          <li>
            Products should be <strong>unused, unwashed</strong>, and in
            original packaging.
          </li>
          <li>Include original invoice or order confirmation email.</li>
          <li>Footwear must not show signs of wear (especially on soles).</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">🔄 Exchange Policy</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Exchanges allowed only for <strong>size or color</strong> variations
            of the same item.
          </li>
          <li>
            If the requested size is not available, a full refund will be
            processed.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">💰 Refunds</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Refunds are processed to your original payment method within{" "}
            <strong>7-10 business days</strong>.
          </li>
          <li>You’ll receive an email once the refund is initiated.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">🚚 Return Shipping</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Customers are responsible for return shipping unless the item is
            defective or incorrect.
          </li>
          <li>We recommend using a trackable shipping service.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">📧 Need Help?</h2>
        <p>
          Contact our support team at{" "}
          <a
            href="mailto:support@minishop.com"
            className="text-blue-600 underline"
          >
            support@minishop.com
          </a>{" "}
          or call us at <strong>+91-99999-88888</strong>.
        </p>
      </section>
    </div>
  );
};

export default ReturnsExchange;
