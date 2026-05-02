import Navbar from "../components/Navbar";
import TrainingBanner from "../assets/trainingBanner.jpeg";
import FreeSectionImage from "../assets/t2.png";
import Footer from "../components/Footer";

const Training = () => {
 
 

  return (
    <div className="min-h-screen bg-CREAM_WHITE text-COFFEE_BEAN_BROWN">
      <Navbar />

      {/* --- 1. Training Hero Banner Section --- */}
      <section className="relative w-full h-[500px] sm:h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${TrainingBanner})` }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        <div className="relative container mx-auto max-w-7xl h-full flex items-center p-8 sm:p-12">
          <div className="max-w-md space-y-4">
            <h1 className="text-6xl sm:text-7xl font-extrabold text-white uppercase tracking-wider leading-tight">
              TRAINING
            </h1>
            <p className="text-xl font-medium text-gray-100 leading-relaxed">
              For any inquiries or questions regarding our training programs
              please contact us
            </p>
          </div>
        </div>
      </section>

      {/* --- 2. Video Playback Section --- */}
      <section className="w-full bg-CREAM_WHITE">
     

        <div className="py-12 sm:py-20 bg-CREAM_WHITE text-center">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-COFFEE_BEAN_BROWN uppercase tracking-wider leading-snug">
              OFFICE COFFEE MACHINE <br />
              DEMO & TASTING SESSION
            </h2>
          </div>
        </div>
      </section>

      {/* --- 3. Training Offer Section --- */}
      <section className="w-full relative overflow-hidden mb-10 " >
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#522E2A] via-[#3a1f1b] to-[#522E2A] rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8 sm:p-12 md:p-16 lg:p-20">
              <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
                {/* Main Offer Text */}
                <div className="space-y-4">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    Free 3 hours training with any espresso machine purchase.
                  </h2>
                </div>

                {/* Subtitle */}
                <div className="pt-4">
                  <p className="text-xl sm:text-2xl md:text-3xl font-medium text-white/90 leading-relaxed">
                    Learn how to use our machines
                  </p>
                </div>

                {/* Value Badge */}
                <div className="pt-6 sm:pt-8">
                  <div className="inline-block bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full px-8 py-4 sm:px-12 sm:py-6">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                      <span className="text-lg sm:text-xl font-semibold text-white/80 uppercase tracking-wider">
                        Value
                      </span>
                      <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
                        2500 AED
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. Image Section --- */}
      <section className="w-full relative overflow-hidden mb-10">
        <div className="w-full h-[300px] lg:h-[450px] relative">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${FreeSectionImage})` }}
          >
            <div className="absolute inset-0 bg-black opacity-10"></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Training;
