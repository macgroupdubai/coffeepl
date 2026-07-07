import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Policies = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* --- Header --- */}
      <section className="bg-CREAM_WHITE py-16 sm:py-20 px-4 sm:px-8 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-COFFEE_BEAN_BROWN uppercase tracking-tight mb-4">
            Policies
          </h1>
          <p className="text-lg text-gray-700">
            Terms & Conditions, Privacy Policy, and Shipping Policy for CoffeePL.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-0 py-16 space-y-20">
        {/* --- Terms & Conditions --- */}
        <section id="terms" className="scroll-mt-24">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-COFFEE_BEAN_BROWN uppercase mb-8 tracking-tight">
            Terms &amp; Conditions
          </h2>

          <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">1. General</h3>
              <p>
                Coffee PL (hereafter "we", "us", "our") operates this website to
                provide Italian coffee beans and related products in the UAE. By
                using this website, you confirm you are at least 18 years old and
                capable of entering into contracts.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                2. Orders &amp; Payments
              </h3>
              <p className="font-semibold text-gray-900 mb-2">Ordering and Payment</p>
              <ul className="list-disc list-inside space-y-1">
                <li>All orders are subject to availability and acceptance.</li>
                <li>Prices and product descriptions are subject to change without notice.</li>
                <li>
                  Payment is processed securely through third-party services. We
                  do not store payment information.
                </li>
                <li>We reserve the right to cancel or refuse any order at our discretion.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                3. Shipping &amp; Delivery
              </h3>
              <p>
                Deliveries are only within the UAE. Estimated delivery time is
                3–5 business days, depending on location and product
                availability. Delivery charges may apply as per our Shipping
                Policy.
              </p>
            </div>

            <div id="returns-refunds" className="scroll-mt-24">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                4. Returns &amp; Refunds
              </h3>
              <p>
                Due to the perishable nature of coffee beans, returns are
                accepted only for defective or incorrect items. Refunds will be
                processed once the returned product is verified.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                5. Intellectual Property
              </h3>
              <p>
                All content, images, logos, and materials on this website are
                owned by Coffee PL and protected by law. You may not use any
                content without written permission.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                6. Limitation of Liability
              </h3>
              <p>
                We are not liable for indirect, incidental, or consequential
                damages arising from the use of this website or products.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                7. Changes to Terms
              </h3>
              <p>
                We reserve the right to modify these Terms at any time. Changes
                will be effective immediately upon posting.
              </p>
            </div>
          </div>
        </section>

        {/* --- Privacy Policy --- */}
        <section id="privacy" className="scroll-mt-24">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-COFFEE_BEAN_BROWN uppercase mb-4 tracking-tight">
            Privacy Policy
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Coffee PL respects your privacy. We collect and process your data
            responsibly.
          </p>

          <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                1. Information Collection
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Personal data: name, email, phone number, delivery address.</li>
                <li>Payment data: credit/debit card or payment service information.</li>
                <li>Usage data: website interactions, browsing preferences.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2. Use of Data</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>To process orders and payments.</li>
                <li>To improve website experience.</li>
                <li>To send promotional offers (with your consent).</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">3. Data Sharing</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>We do not sell your data to third parties.</li>
                <li>Data may be shared with logistics partners for delivery purposes.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">4. Security</h3>
              <p>We implement strict security measures to protect your personal data.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">5. Cookies</h3>
              <p>Cookies are used to enhance your browsing experience.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">6. Your Rights</h3>
              <p>
                You may request access, correction, or deletion of your personal
                data by contacting us at{" "}
                <a
                  href="mailto:info@coffeepl.com"
                  className="text-COFFEE_BEAN_BROWN font-semibold hover:underline"
                >
                  info@coffeepl.com
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* --- Shipping Policy --- */}
        <section id="shipping" className="scroll-mt-24">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-COFFEE_BEAN_BROWN uppercase mb-8 tracking-tight">
            Shipping Policy
          </h2>

          <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Delivery Areas</h3>
              <p>UAE only.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Shipping Time</h3>
              <p>
                Standard delivery 3–5 business days. Express delivery available
                at additional cost.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Shipping Charges</h3>
              <p>Calculated at checkout based on location and order size.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Order Tracking</h3>
              <p>
                Tracking information will be provided via email once the order
                is shipped.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Damaged/Incorrect Items
              </h3>
              <p>Contact us within 48 hours for assistance.</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Policies;
