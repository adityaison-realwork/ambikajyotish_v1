
import React, { useState } from 'react';
import { CheckCircle, Flame, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { PujaCategory, PujaItem } from '../types';

const Pujas: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const pujaCategories: PujaCategory[] = t('pujasData') || [];

  // Filter logic: Filter items within categories
  const filteredCategories = pujaCategories.map(cat => ({
    ...cat,
    items: cat.items.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.whoNeedsIt.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(cat => cat.items.length > 0);

  return (
    <div className="bg-white min-h-screen py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center justify-center p-3 bg-saffron-100 rounded-full text-saffron-600 mb-4">
            <Flame size={24} />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-saffron-900 mb-6">{t('nav.pujas')}</h1>
          <p className="text-stone-600 max-w-2xl mx-auto mb-8 text-lg">
             All rituals are performed with strict adherence to Vedic scriptures. Experience the transformation.
          </p>
        </motion.div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-20 relative">
          <input 
            type="text" 
            placeholder="Search for a Puja..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white px-6 py-3 rounded-full border border-stone-200 focus:outline-none focus:border-saffron-400 focus:ring-2 focus:ring-saffron-200 shadow-sm pl-12"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
        </div>

        <div className="space-y-24">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, idx) => (
              <section key={idx} className="scroll-mt-28" id={`category-${idx}`}>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 mb-10"
                >
                  <div className="h-12 w-2 bg-gradient-to-b from-saffron-500 to-orange-600 rounded-full"></div>
                  <div>
                    <h2 className="text-3xl font-serif font-bold text-stone-800">{category.title}</h2>
                    <p className="text-stone-500 mt-1">{category.description}</p>
                  </div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {category.items.map((item, itemIdx) => (
                    <motion.div 
                      key={itemIdx} 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIdx * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="border border-stone-200 rounded-2xl p-8 hover:border-saffron-300 hover:shadow-xl transition-all bg-white relative overflow-hidden group"
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-saffron-50 rounded-bl-[100px] -mr-4 -mt-4 transition-all group-hover:bg-saffron-100"></div>
                      
                      <h3 className="text-2xl font-serif font-bold text-saffron-800 mb-4 relative z-10">{item.name}</h3>
                      
                      <div className="mb-5 relative z-10">
                        <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span> Who Needs This
                        </h4>
                        <p className="text-stone-700 leading-relaxed">{item.whoNeedsIt}</p>
                      </div>

                      <div className="mb-8 relative z-10">
                        <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span> Vidhi
                        </h4>
                        <p className="text-stone-800 italic font-serif bg-stone-50 p-3 rounded-lg border-l-2 border-saffron-300">"{item.vidhi}"</p>
                      </div>

                      <div className="space-y-3 pt-6 border-t border-stone-100 relative z-10">
                        {item.priceStandard && (
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-stone-500 font-medium">Standard</span>
                            <span className="font-bold text-stone-800 text-lg">{item.priceStandard}</span>
                          </div>
                        )}
                        {item.pricePremium && (
                          <div className="flex justify-between items-center p-3 -mx-3 rounded-lg bg-saffron-50/50 border border-saffron-100">
                            <span className="text-sm text-saffron-800 font-bold flex items-center gap-2">
                              <CheckCircle size={14} /> Premium (Recommended)
                            </span>
                            <span className="font-bold text-saffron-800 text-lg">{item.pricePremium}</span>
                          </div>
                        )}
                        {item.priceExtra && (
                          <div className="flex justify-between items-center bg-stone-900 p-3 rounded-lg text-white mt-2">
                             <span className="text-xs font-bold uppercase tracking-wider text-saffron-400">Special</span>
                            <span className="font-bold">{item.priceExtra}</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            ))
          ) : (
             <div className="text-center text-stone-500 py-12">
               No Pujas found matching "{searchTerm}"
             </div>
          )}
        </div>

        {/* Life Events Section */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-br from-saffron-900 to-stone-900 text-saffron-50 rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-64 bg-saffron-500/10 rounded-full blur-3xl translate-x-32 -translate-y-32"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-serif font-bold mb-12 text-center text-white">Sanskar Pujas (Life Events)</h2>
            <div className="grid md:grid-cols-3 gap-y-10 gap-x-12">
              {[
                 { name: "Namkaran Sanskar", price: "₹2,100" },
                 { name: "Mundan", price: "₹1,500" },
                 { name: "Vahan Puja", price: "₹1,100 / ₹2,100" },
                 { name: "Griha Pravesh (Basic)", price: "₹3,500" },
                 { name: "Griha Pravesh (Grand Havan)", price: "₹11,000" },
                 { name: "Engagement Ceremony", price: "₹5,100" },
              ].map((ev, i) => (
                <div key={i} className="text-center md:text-left border-b border-white/10 pb-4 hover:border-saffron-500/50 transition-colors">
                  <span className="block text-lg font-medium text-saffron-100 mb-2">{ev.name}</span>
                  <span className="block text-2xl font-bold text-white">{ev.price}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default Pujas;
