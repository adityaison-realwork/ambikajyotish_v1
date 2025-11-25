import React from 'react';
import { VASTU_SERVICES } from '../constants';
import { LayoutTemplate, Map, Factory, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

const icons = [LayoutTemplate, LayoutTemplate, Factory, Map];

const Vastu: React.FC = () => {
  return (
    <div className="bg-saffron-50 min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-saffron-900 mb-6">Vastu Shastra</h1>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Balancing the 5 Elements (Panch Mahabhuta) in your space for harmony, wealth, and success.
            </p>
          </div>

          <div className="grid gap-6">
            {VASTU_SERVICES.map((service, idx) => {
              const Icon = icons[idx] || Compass;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.01 }}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-white hover:border-saffron-200 group"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-saffron-100 to-orange-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform shadow-inner">
                      <Icon className="text-saffron-600" size={36} />
                    </div>
                    
                    <div className="flex-grow space-y-3">
                      <h3 className="text-2xl font-serif font-bold text-stone-800">{service.service}</h3>
                      <p className="text-stone-600 text-lg">{service.scope}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-stone-400 mt-1">Deliverables:</span>
                        <span className="text-sm font-medium text-saffron-700 bg-saffron-50 px-3 py-0.5 rounded-full border border-saffron-100">
                          {service.deliverables}
                        </span>
                      </div>
                    </div>

                    <div className="flex-shrink-0 text-right md:min-w-[180px] pl-4 md:border-l border-stone-100">
                      <span className="block text-3xl font-bold text-stone-800">{service.price.split(' ')[0]}</span>
                      <span className="text-xs text-stone-500 uppercase tracking-wide font-bold">Starting Price</span>
                      <button className="mt-4 w-full py-2 rounded-lg border border-stone-200 text-stone-600 text-sm font-semibold hover:bg-stone-50 hover:text-stone-900 transition-colors">
                        Book Visit
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Vastu;