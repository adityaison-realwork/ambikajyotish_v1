import React from 'react';
import { PANDIT_IMAGE } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-saffron-600 font-bold tracking-widest uppercase text-sm">The Legacy</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-saffron-900 mt-2">Pandit Anil Kumar Vyas</h1>
          <div className="h-1 w-24 bg-saffron-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Image Side */}
          <div className="relative">
            <div className="absolute inset-0 bg-saffron-200 rounded-tl-[80px] rounded-br-[80px] transform translate-x-4 translate-y-4"></div>
            <img 
              src={PANDIT_IMAGE} 
              alt="Pandit Anil Kumar Vyas" 
              className="relative z-10 w-full rounded-tl-[80px] rounded-br-[80px] shadow-xl border-4 border-white"
            />
            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 z-20 bg-white p-4 shadow-lg rounded-lg border border-saffron-100 max-w-[200px]">
              <p className="text-saffron-700 font-bold text-lg leading-none">25+ Years</p>
              <p className="text-stone-500 text-xs">of Spiritual Guidance</p>
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-800">Custodian of Vedic Tradition</h2>
            <p className="text-stone-600 leading-relaxed text-lg">
              "Pandit Anil Kumar Vyas is not merely an astrologer; he is a custodian of the Vedic tradition. With over 25 years of rigorous Sadhana, he stands as a beacon of spiritual guidance in Vadodara."
            </p>

            <div className="bg-saffron-50 p-6 rounded-xl border border-saffron-100">
              <h3 className="font-bold text-saffron-800 mb-4">Educational Excellence</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 bg-saffron-500 rounded-full"></span>
                  <div>
                    <span className="font-bold text-stone-800">Jyotish Visharad:</span>
                    <span className="text-stone-600 block text-sm">Gold Medalist from Bharatiya Vidya Bhavan.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 bg-saffron-500 rounded-full"></span>
                  <div>
                    <span className="font-bold text-stone-800">Karmakand Bhaskar:</span>
                    <span className="text-stone-600 block text-sm">Certified in Rigvedic and Yajurvedic rituals from Kashi (Varanasi).</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 bg-saffron-500 rounded-full"></span>
                  <div>
                    <span className="font-bold text-stone-800">Vastu Shastri:</span>
                    <span className="text-stone-600 block text-sm">Advanced certification in Residential & Industrial Vastu.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-saffron-800 mb-2">The Lineage</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Hailing from a traditional Brahmin family of North Gujarat, Panditji inherited the secret knowledge of Nadi Jyotish and Tantra Shastra (Sattvic) from his forefathers.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-saffron-800 mb-2">Our Mission</h3>
              <p className="text-stone-600 text-sm leading-relaxed italic border-l-4 border-saffron-400 pl-4">
                "To demystify astrology and make high-quality Vedic rituals accessible to the common man without superstition."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;