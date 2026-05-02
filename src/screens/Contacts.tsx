import Navbar from "../components/Navbar";
import contactBanner from "../assets/contactBanner.png";
import Footer from "../components/Footer";
// --- Custom Colors ---
const DARK_GREY_BG = "#2a2a2a";
const CONTACT_BANNER_IMAGE = contactBanner;

const Contacts = () => {
  return (
    <div className={`min-h-screen bg-[${DARK_GREY_BG}] text-white`}>
      <Navbar />

      {/* --- 1. Hero Banner Section --- */}
      <section className="relative w-full h-[400px] overflow-hidden">
        {/* Background Image with Parallax/Cover effect */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${CONTACT_BANNER_IMAGE})` }}
        >
          {/* Subtle dark overlay for text readability */}
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>

        {/* Text Content */}
        <div className="relative container mx-auto max-w-7xl h-full flex items-center p-8 sm:p-12">
          <div className="max-w-md space-y-4">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white uppercase tracking-wider leading-tight">
              CONTACT US
            </h1>
            <p className="text-xl font-medium text-gray-100">
              If you have questions about our goods or services, feel free to
              reach out to us!
            </p>
          </div>
        </div>
      </section>

      {/* --- 2. Contact Form Section (Dark Grey Background) --- */}
      <section className={`w-full py-12 sm:py-20 bg-[#2a2a2a]`}>
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          {/* Introductory Text */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase mb-4 tracking-wider">
            GET IN TOUCH
          </h2>
          <p className="text-lg text-gray-200 mb-2">
            Call us or enter your information down below, and our Team will
            reach you shortly.
          </p>
          <p className="text-lg text-gray-200 mb-10">
            We appreciate your interest in RAW Coffee Company, see you soon!
          </p>

          {/* Contact Form */}
          <form className="space-y-6">
            {/* Name and Email (Two columns on desktop, stacked on mobile) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-semibold mb-2"
                >
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 bg-gray-700 border-2 border-gray-600 focus:border-white outline-none text-white rounded-md"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold mb-2"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 bg-gray-700 border-2 border-gray-600 focus:border-white outline-none text-white rounded-md"
                  required
                />
              </div>
            </div>

            {/* Subject Dropdown */}
            <div>
              <label
                htmlFor="subject"
                className="block text-lg font-semibold mb-2"
              >
                Subject
              </label>
              <select
                id="subject"
                className="w-full p-3 bg-gray-700 border-2 border-gray-600 focus:border-white outline-none text-white appearance-none rounded-md"
              >
                <option value="" disabled selected>
                  Please Select
                </option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Product Support">Product Support</option>
                <option value="Partnership">Partnership</option>
                <option value="Billing">Billing</option>
              </select>
            </div>

            {/* Message Textarea */}
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-semibold mb-2"
              >
                Message*
              </label>
              <textarea
                id="message"
                // FIX: Changed rows="5" (string) to rows={5} (number) for TypeScript compatibility
                rows={5}
                className="w-full p-3 bg-gray-700 border-2 border-gray-600 focus:border-white outline-none text-white rounded-md resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Button (Red) */}
            <button
              type="submit"
              className={`px-8 py-3 bg-red-800 text-white font-bold uppercase tracking-wider rounded-md hover:bg-red-700 transition duration-300 shadow-lg`}
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contacts;
