import React from 'react';
import { NavLink } from 'react-router-dom';
import { Star, ShieldCheck, Globe, ArrowRight, Activity, Calendar } from 'lucide-react';
import { HERO_IMAGE, PANDIT_IMAGE } from '../constants';
import { ResponsiveContainer, RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { name: 'Career', uv: 90, fill: '#d97200' },
  { name: 'Health', uv: 80, fill: '#f59300' },
  { name: 'Marriage', uv: 85, fill: '#ffb314' },
  { name: 'Finance', uv: 75, fill: '#ffd047' },
  { name: 'Spirituality', uv: 95, fill: '#ffe685' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50 }
  }
};

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-saffron-50 pt-12 md:pt-0">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-saffron-200/50 to-transparent skew-x-12 translate-x-32 z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-saffron-300/20 rounded-full blur-3xl -translate-x-20 translate-y-20 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-2xl"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-saffron-200 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-saffron-500 animate-pulse"></span>
                <span className="text-saffron-800 tracking-wide uppercase text-xs font-bold">Shree Ambika Jyotish Kendra</span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-[1.1] text-stone-900">
                Where Your Destiny Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-600 to-orange-500">Divine Will</span>
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-xl text-stone-600 mb-8 leading-relaxed font-light">
                Bridge the gap between human effort <span className="italic font-serif text-saffron-700">(Purusharth)</span> and divine grace <span className="italic font-serif text-saffron-700">(Kripa)</span> with Pandit Anil Kumar Vyas.
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                <NavLink to="/contact">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-gradient-to-r from-saffron-600 to-saffron-500 text-white text-lg px-8 py-4 rounded-full font-bold shadow-xl shadow-saffron-500/30 flex items-center justify-center gap-2"
                  >
                    Book Consultation <ArrowRight size={20} />
                  </motion.button>
                </NavLink>
                <NavLink to="/pujas">
                  <motion.button 
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-white/50 backdrop-blur-sm border border-saffron-200 text-saffron-800 text-lg px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center hover:shadow-lg"
                  >
                    Explore Pujas
                  </motion.button>
                </NavLink>
              </motion.div>

              <motion.div variants={itemVariants} className="mt-12 flex items-center gap-8 text-stone-500">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-stone-200 flex items-center justify-center text-xs overflow-hidden">
                       <img src={`https://randomuser.me/api/portraits/men/${i*10}.jpg`} alt="Client" className="w-full h-full object-cover grayscale opacity-70" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-saffron-100 flex items-center justify-center text-xs font-bold text-saffron-700">+2k</div>
                </div>
                <div className="text-sm">Trusted by <span className="font-bold text-stone-800">2000+</span> Devotees</div>
              </motion.div>
            </motion.div>

            {/* Image Layering Effect */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-[600px] hidden md:block"
            >
               {/* Background Glow */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-b from-saffron-200 to-orange-100 rounded-full blur-3xl opacity-60"></div>
               
               {/* Arch Frame */}
               <div className="absolute inset-0 border-[20px] border-white/50 rounded-t-[200px] shadow-2xl backdrop-blur-sm z-10"></div>
               
               {/* Main Image */}
               <img 
                 src={PANDIT_IMAGE} 
                 alt="Pandit Anil Kumar Vyas" 
                 className="absolute inset-x-0 bottom-0 mx-auto h-[95%] object-contain drop-shadow-2xl z-20"
               />

               {/* Floating Cards */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 className="absolute top-20 -left-10 bg-white p-4 rounded-xl shadow-lg border border-saffron-50 z-30"
               >
                 <div className="flex items-center gap-3">
                   <div className="bg-orange-100 p-2 rounded-lg text-orange-600"><Star size={20} fill="currentColor" /></div>
                   <div>
                     <div className="text-xs text-stone-500 font-bold uppercase">Experience</div>
                     <div className="font-serif font-bold text-lg">25+ Years</div>
                   </div>
                 </div>
               </motion.div>

               <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-32 -right-10 bg-white p-4 rounded-xl shadow-lg border border-saffron-50 z-30"
               >
                 <div className="flex items-center gap-3">
                   <div className="bg-green-100 p-2 rounded-lg text-green-600"><ShieldCheck size={20} /></div>
                   <div>
                     <div className="text-xs text-stone-500 font-bold uppercase">Rituals</div>
                     <div className="font-serif font-bold text-lg">100% Vedic</div>
                   </div>
                 </div>
               </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Promise - Glassmorphism */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-serif font-bold text-saffron-900 mb-6">The Ambika Promise</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-saffron-500 to-transparent mb-8"></div>
              
              <blockquote className="text-2xl font-serif text-stone-600 mb-8 leading-relaxed italic border-l-4 border-saffron-300 pl-6 py-2 bg-saffron-50/50 rounded-r-lg">
                "We do not sell fear; we offer solutions. We bridge the gap between human effort and divine grace."
              </blockquote>
              
              <p className="text-stone-600 mb-8 text-lg">
                Whether you are battling a stagnant career, marital discord, or health crises, our rituals are performed with 100% Shastra-Suddha Vidhi.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-md border border-stone-100 hover:border-saffron-200 transition-colors">
                  <div className="bg-saffron-100 p-3 rounded-lg text-saffron-600"><ShieldCheck size={24} /></div>
                  <div>
                    <span className="font-bold text-stone-900 block mb-1">Authentic Vidhi</span>
                    <span className="text-sm text-stone-500">No shortcuts, pure scripture based.</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-md border border-stone-100 hover:border-saffron-200 transition-colors">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600"><Globe size={24} /></div>
                  <div>
                    <span className="font-bold text-stone-900 block mb-1">Global Reach</span>
                    <span className="text-sm text-stone-500">Live streaming for NRIs worldwide.</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Visual Flair: Planetary Chart */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="bg-stone-900 rounded-3xl p-8 shadow-2xl relative overflow-hidden text-white"
            >
               <div className="absolute top-0 right-0 p-32 bg-saffron-500 opacity-10 blur-3xl rounded-full translate-x-10 -translate-y-10"></div>
              <h3 className="text-xl font-serif font-bold text-saffron-100 mb-4 relative z-10">Holistic Life Balance</h3>
              <div className="h-72 w-full relative z-10">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="100%" barSize={15} data={data}>
                    <RadialBar
                      label={{ position: 'insideStart', fill: '#fff', fontSize: '10px' }}
                      background={{ fill: '#333' }}
                      dataKey="uv"
                    />
                    <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={{top: '50%', right: 0, transform: 'translate(0, -50%)', lineHeight: '24px', color: '#ccc'}} />
                    <Tooltip contentStyle={{backgroundColor: '#333', border: 'none', borderRadius: '8px', color: '#fff'}} />
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-xs text-center text-stone-400 mt-4 relative z-10">Visual representation of improved life aspects.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview Cards */}
      <section className="py-24 bg-saffron-50 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-saffron-900 mb-4">Divine Services</h2>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg">Ancient wisdom tailored for modern problems. Choose your path to clarity.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Vedic Astrology", icon: <Star className="w-10 h-10" />, desc: "Precise Kundali analysis for career, marriage, and health.", link: "/services", color: "from-purple-500 to-indigo-600" },
              { title: "Karmakand Rituals", icon: <div className="text-3xl">🕉️</div>, desc: "Dosha Nivaran, Havan, and Pujas performed with purity.", link: "/pujas", color: "from-saffron-500 to-orange-600" },
              { title: "Vastu Shastra", icon: <div className="text-3xl">🏡</div>, desc: "Balance the energy of your space using Panch Mahabhuta.", link: "/vastu", color: "from-emerald-500 to-teal-600" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
                <div className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-3 text-stone-800">{item.title}</h3>
                  <p className="text-stone-600 mb-8 leading-relaxed">{item.desc}</p>
                  <NavLink to={item.link} className="inline-flex items-center text-saffron-700 font-bold hover:text-saffron-600 group-hover:gap-2 transition-all">
                    Explore Service <ArrowRight size={18} className="ml-1" />
                  </NavLink>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;