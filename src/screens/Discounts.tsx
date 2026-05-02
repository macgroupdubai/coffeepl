import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Discounts = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-1 w-full flex items-center justify-center">
        <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 uppercase tracking-tight mb-6">
            Discounts
          </h1>
          <p className="text-xl text-gray-600 max-w-xl mx-auto">
            Discounts and offers will be shown here. Check back soon for the latest deals.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Discounts;
