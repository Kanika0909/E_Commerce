import React from "react";

const TermsConditions = () => {
  return (
    <div className="pt-24 px-6 pb-16 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Terms & Conditions
      </h1>

      <section className="space-y-6 text-sm md:text-base leading-relaxed">
        <p>
          Welcome to <strong>MiniShop</strong>! These Terms & Conditions outline
          the rules and regulations for the use of our website and services. By
          accessing this site, you accept these terms in full.
        </p>

        <h2 className="text-xl font-semibold mt-4">1. Use of the Site</h2>
        <p>
          You agree not to misuse this website or any of its content. You may
          not use it to distribute harmful or illegal material or violate any
          local or international laws.
        </p>

        <h2 className="text-xl font-semibold mt-4">2. Product Information</h2>
        <p>
          We do our best to ensure product descriptions, images, and prices are
          accurate. However, errors may occur. We reserve the right to correct
          any inaccuracies without notice.
        </p>

        <h2 className="text-xl font-semibold mt-4">3. Order Acceptance</h2>
        <p>
          We may refuse or cancel an order due to stock unavailability, pricing
          errors, or fraud detection. You’ll be notified in such cases.
        </p>

        <h2 className="text-xl font-semibold mt-4">
          4. Return & Refund Policy
        </h2>
        <p>
          Please refer to our{" "}
          <a href="/returns" className="text-blue-600 underline">
            Returns & Exchange Policy
          </a>{" "}
          for detailed information.
        </p>

        <h2 className="text-xl font-semibold mt-4">5. Intellectual Property</h2>
        <p>
          All content including images, logos, and text is the property of
          MiniShop and may not be used without permission.
        </p>

        <h2 className="text-xl font-semibold mt-4">
          6. Limitation of Liability
        </h2>
        <p>
          We are not liable for any direct or indirect damages resulting from
          the use or inability to use this website.
        </p>

        <h2 className="text-xl font-semibold mt-4">7. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Continued use
          of the site implies acceptance of those changes.
        </p>

        <h2 className="text-xl font-semibold mt-4">8. Contact Us</h2>
        <p>
          If you have any questions about these Terms, feel free to reach out
          at: <br />
          📧{" "}
          <a href="mailto:support@minishop.com" className="text-blue-600">
            support@minishop.com
          </a>{" "}
          <br />
          📞 +91-99999-88888
        </p>
      </section>
    </div>
  );
};

export default TermsConditions;
