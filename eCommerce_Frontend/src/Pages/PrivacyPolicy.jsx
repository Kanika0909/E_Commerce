import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="pt-24 px-6 pb-16 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>

      <section className="space-y-6 text-sm md:text-base leading-relaxed">
        <p>
          At <strong>MiniShop</strong>, we are committed to protecting your
          personal information and your right to privacy. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your
          information.
        </p>

        <h2 className="text-xl font-semibold mt-4">
          1. Information We Collect
        </h2>
        <p>
          We collect information that you provide to us such as your name, email
          address, phone number, shipping address, payment details, and login
          credentials.
        </p>

        <h2 className="text-xl font-semibold mt-4">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside">
          <li>To process and fulfill your orders</li>
          <li>
            To send you confirmations, updates, and marketing communications
          </li>
          <li>To improve our services and customer experience</li>
          <li>To detect and prevent fraud or unauthorized transactions</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">
          3. Sharing Your Information
        </h2>
        <p>
          We do not sell your personal data. We only share it with trusted third
          parties such as payment gateways, shipping providers, and email
          service platforms — solely for fulfilling your orders and
          communication.
        </p>

        <h2 className="text-xl font-semibold mt-4">
          4. Cookies and Tracking Technologies
        </h2>
        <p>
          We use cookies to enhance user experience, track analytics, and store
          your preferences. You can modify your browser settings to control
          cookie behavior.
        </p>

        <h2 className="text-xl font-semibold mt-4">5. Data Security</h2>
        <p>
          We implement security measures such as encryption and secure servers
          to protect your information. However, no method of transmission over
          the Internet is 100% secure.
        </p>

        <h2 className="text-xl font-semibold mt-4">6. Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal data at
          any time. You may also opt-out of receiving promotional emails.
        </p>

        <h2 className="text-xl font-semibold mt-4">
          7. Changes to This Policy
        </h2>
        <p>
          We may update our Privacy Policy from time to time. Changes will be
          posted on this page with an updated effective date.
        </p>

        <h2 className="text-xl font-semibold mt-4">8. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          contact us at: <br />
          📧{" "}
          <a href="mailto:privacy@minishop.com" className="text-blue-600">
            privacy@minishop.com
          </a>{" "}
          <br />
          📞 +91-98765-43210
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
