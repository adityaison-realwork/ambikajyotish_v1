import React from 'react';
import { ASTRO_SERVICES } from '../constants';
import { Clock, IndianRupee, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  return (
    <div className="bg-saffron-50/50 min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="text-saffron-600 font-bold tracking-widest uppercase text-xs mb-2 block">Celestial Guidance</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-saffron-900 mb-6">Astrology Consultation</h1>
          <p className="text-stone-600 text-lg">Precision Analysis based on Date, Time, and Place of Birth.</p>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {ASTRO_SERVICES.map((service, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-stone-100 flex flex-col group"
            >
              <div className="p-8 flex-grow relative">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Sparkles size={40} className="text-saffron-500" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-stone-800 mb-4 group-hover:text-saffron-600 transition-colors">{service.name}</h3>
                <p className="text-stone-600 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
              <div className="bg-stone-50 px-8 py-5 border-t border-stone-100 flex justify-between items-center mt-auto">
                <div className="flex items-center gap-2 text-stone-500 text-xs font-bold uppercase tracking-wider">
                  <Clock size={14} className="text-saffron-500" />
                  {service.duration}
                </div>
                <div className="flex items-center gap-1 text-saffron-700 font-bold text-xl">
                  {service.price}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;