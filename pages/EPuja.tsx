
import React, { useState } from 'react';
import { Video, Globe, Laptop, Truck, Search } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const EPuja: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const data = t('epujaData') || { steps: [], packages: [] };
  const packages = data.packages || [];
  
  const filteredPackages = packages.filter((pkg: any) => 
    pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    pkg.features.some((f: string) => f.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const icons = [<Video size={20} />, <Laptop size={20} />, <Globe size={20} />, <Truck size={20} />];

  return (
    <div className="bg-white min-h-screen relative z-10">
      {/* Hero */}
      <div className="bg-stone-900 text-saffron-50 py-24 px-4 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
            <div className="absolute top-10 left-10 w-64 h-64 bg-saffron-500 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-600 rounded-full blur-[100px]"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto max-w-4xl text-center relative z-10"
        >
          <div className="inline-block p-4 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/20">
            <Globe className="w-10 h-10 text-saffron-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 leading-tight">{data.title}</h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto font-light leading-relaxed">
            {data.subtitle}
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Process */}
        <div className="grid md:grid-cols-4 gap-8 mb-24 relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-saffron-100 via-saffron-300 to-saffron-100 -z-10"></div>
           
           {data.steps && data.steps.map((step: any, i: number) => (
             <motion.div 
               key={i} 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.2 }}
               className="bg-white p-8 rounded-2xl border border-stone-100 shadow-lg text-center hover:-translate-y-2 transition-transform"
             >
               <div className="w-14 h-14 bg-gradient-to-br from-saffron-500 to-orange-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-6 relative z-10 shadow-lg shadow-saffron-500/30">
                 {icons[i] || <Globe size={20} />}
               </div>
               <h3 className="font-bold text-xl mb-3 text-stone-800">{step.title}</h3>
               <p className="text-stone-600 text-sm leading-relaxed">{step.desc}</p>
             </motion.div>
           ))}
        </div>

        {/* Packages */}
        <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-saffron-900">{data.packagesTitle}</h2>
            <p className="text-stone-500 mt-2">{data.packagesSubtitle}</p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-16 relative">
          <input 
            type="text" 
            placeholder="Search packages..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white px-6 py-3 rounded-full border border-stone-200 focus:outline-none focus:border-saffron-400 focus:ring-2 focus:ring-saffron-200 shadow-sm pl-12"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredPackages.length > 0 ? (
            filteredPackages.map((pkg: any, i: number) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 1.03 }}
              className="bg-gradient-to-b from-saffron-50 to-white rounded-3xl p-8 text-center border border-saffron-100 shadow-xl flex flex-col"
            >
              <div className="text-5xl mb-6 bg-white w-24 h-24 mx-auto rounded-full flex items-center justify-center shadow-sm">
                {i === 0 ? "🎂" : i === 1 ? "✈️" : "🏠"}
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-1">{pkg.name}</h3>
              {pkg.sub && <p className="text-saffron-600 font-semibold text-sm mb-2">{pkg.sub}</p>}
              
              <div className="text-4xl font-serif font-bold text-stone-900 my-6">{pkg.price}</div>
              
              <ul className="text-left space-y-3 mb-8 flex-grow pl-4">
                  {pkg.features.map((f: string, idx: number) => (
                      <li key={idx} className="text-stone-600 text-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-saffron-400 rounded-full"></div> {f}
                      </li>
                  ))}
              </ul>

              <NavLink to="/contact" className="w-full block bg-stone-900 text-white px-6 py-4 rounded-xl text-sm font-bold hover:bg-stone-800 transition-colors shadow-lg">
                {t('nav.book')}
              </NavLink>
            </motion.div>
          ))
          ) : (
            <div className="col-span-3 text-center text-stone-500">No packages found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EPuja;
