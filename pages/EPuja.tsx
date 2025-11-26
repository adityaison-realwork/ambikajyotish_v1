
import React, { useState } from 'react';
import { Video, Globe, Laptop, Truck, Search, Star, ArrowRight, Wifi } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import BookingModal from '../components/BookingModal';

const EPuja: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPkg, setSelectedPkg] = useState<any>(null);

  const data = t('epujaData') || { steps: [], packages: [] };
  const packages = data.packages || [];
  
  const filteredPackages = packages.filter((pkg: any) => 
    pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    pkg.features.some((f: string) => f.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const icons = [<Video size={20} />, <Laptop size={20} />, <Globe size={20} />, <Truck size={20} />];

  return (
    <div className="bg-[#0f0c15] min-h-screen relative z-10 text-white overflow-hidden">
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-900/30 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-saffron-600/20 rounded-full blur-[150px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto max-w-5xl text-center relative z-10"
        >
          <div className="inline-flex items-center gap-2 p-3 bg-white/5 backdrop-blur-lg rounded-full mb-8 border border-white/10 shadow-glow">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-stone-300">Live Global Connectivity</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-serif font-bold mb-8 leading-tight text-transparent bg-clip-text bg-gradient-to-b from-saffron-200 via-white to-stone-400">
            {data.title}
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 max-w-3xl mx-auto font-light leading-relaxed">
            {data.subtitle}
          </p>
        </motion.div>
      </section>

      {/* The Digital Bridge (Process) */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16 relative">
              {/* Animated Line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-saffron-500 to-transparent opacity-30"></div>
              
              {data.steps && data.steps.map((step: any, i: number) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative z-10 w-full md:w-64"
                >
                  <div className="bg-[#1a1625]/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center hover:border-saffron-500/50 transition-colors shadow-xl group">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-saffron-600 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                       {icons[i] || <Globe size={24} />}
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-stone-800 rounded-full flex items-center justify-center border border-white/10 font-mono text-xs text-saffron-400 font-bold">
                        {i + 1}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-stone-400 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gradient-to-b from-[#0f0c15] to-[#15121e] relative z-10">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-serif font-bold text-white mb-4">{data.packagesTitle}</h2>
                <div className="w-24 h-1 bg-saffron-600 mx-auto rounded-full mb-6"></div>
                
                {/* Search Bar */}
                <div className="max-w-md mx-auto relative">
                    <input 
                        type="text" 
                        placeholder="Search packages..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 focus:outline-none focus:border-saffron-500 text-white placeholder-stone-500 transition-all pl-12"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500" size={20} />
                </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredPackages.length > 0 ? (
                filteredPackages.map((pkg: any, i: number) => (
                <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="relative group rounded-3xl p-[1px] bg-gradient-to-b from-white/20 to-transparent hover:from-saffron-500 hover:to-purple-600 transition-all duration-500"
                >
                    <div className="bg-[#13101a] rounded-[23px] h-full p-8 flex flex-col relative overflow-hidden">
                        {/* Glow Effect */}
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-saffron-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        
                        {/* Icon */}
                        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-saffron-500/20 group-hover:text-saffron-400 transition-colors border border-white/5">
                            {i === 0 ? "🕯️" : i === 1 ? "✈️" : "🏡"}
                        </div>

                        <h3 className="text-2xl font-serif font-bold text-white mb-2">{pkg.name}</h3>
                        {pkg.sub && <p className="text-saffron-400 text-sm font-semibold mb-4 tracking-wide uppercase">{pkg.sub}</p>}
                        
                        <div className="my-6">
                            <span className="text-4xl font-bold text-white tracking-tight">{pkg.price}</span>
                        </div>
                        
                        <div className="space-y-4 mb-8 flex-grow">
                            {pkg.features.map((f: string, idx: number) => (
                                <div key={idx} className="flex items-start gap-3 text-stone-400 text-sm group-hover:text-stone-300 transition-colors">
                                    <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Star size={10} className="text-saffron-500 fill-saffron-500" />
                                    </div>
                                    {f}
                                </div>
                            ))}
                        </div>

                        <button 
                            onClick={() => setSelectedPkg({
                                name: pkg.name,
                                price: pkg.price,
                                features: pkg.features,
                                description: pkg.sub ? `${pkg.sub} Package` : 'Comprehensive Online Puja Service'
                            })}
                            className="w-full py-4 rounded-xl bg-white text-black font-bold text-sm uppercase tracking-wider hover:bg-saffron-500 hover:text-white transition-all shadow-lg flex items-center justify-center gap-2"
                        >
                            Book Now <ArrowRight size={16} />
                        </button>
                    </div>
                </motion.div>
            ))
            ) : (
                <div className="col-span-3 text-center text-stone-500 py-20">No packages found</div>
            )}
            </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={!!selectedPkg} 
        onClose={() => setSelectedPkg(null)} 
        item={selectedPkg}
      />
    </div>
  );
};

export default EPuja;
