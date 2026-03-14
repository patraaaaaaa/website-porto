import { Play, Mail, Linkedin, Instagram, ArrowRight, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';

const ParallaxSection = ({ children, id, className, isHero = false, disable3D = false }: any) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: isHero ? ["start start", "end start"] : ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y = useTransform(
    smoothProgress, 
    isHero ? [0, 1] : [0, 0.5, 1], 
    isHero ? [0, 200] : [150, 0, -150]
  );
  
  const scale = useTransform(
    smoothProgress, 
    isHero ? [0, 1] : [0, 0.5, 1], 
    isHero ? [1, 0.8] : [0.8, 1, 0.8]
  );
  
  const rotateX = useTransform(
    smoothProgress, 
    isHero ? [0, 1] : [0, 0.5, 1], 
    isHero ? [0, 15] : [25, 0, -25]
  );
  
  const opacity = useTransform(
    smoothProgress, 
    isHero ? [0, 0.8] : [0, 0.2, 0.8, 1], 
    isHero ? [1, 0] : [0, 1, 1, 0]
  );

  return (
    <motion.section
      id={id}
      ref={ref}
      style={{
        y: disable3D ? 0 : y,
        scale: disable3D ? 1 : scale,
        rotateX: disable3D ? 0 : rotateX,
        opacity: disable3D ? 1 : opacity,
        transformStyle: disable3D ? "flat" : "preserve-3d"
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('feed');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Prevent scrolling when popup is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  // Animation variants for staggered grid items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 font-sans selection:bg-neutral-800">
      {/* HEADER / NAVIGASI */}
      <header className="container mx-auto px-6 py-8 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter text-white">PatraaPorto</div>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-neutral-400">
          <a href="#about" className="hover:text-white transition-colors">Tentang Saya</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Karya</a>
          <a href="#services" className="hover:text-white transition-colors">Layanan</a>
          <a href="#contact" className="hover:text-white transition-colors">Kontak</a>
        </nav>
      </header>

      <main style={{ perspective: "1200px" }}>
        {/* HERO SECTION */}
        <ParallaxSection 
          isHero={true}
          className="container mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center"
        >
          {/* Headline Utama dengan Animasi Glow */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tight text-white max-w-5xl leading-tight mb-10 flex justify-center gap-x-1 md:gap-x-2 whitespace-nowrap">
            {"PORTOFOLIO".split("").map((char, index) => (
              <span key={index} className="animate-glow" style={{ animationDelay: `${index * 0.15}s` }}>
                {char}
              </span>
            ))}
          </h1>
          
          {/* Tombol CTA dengan efek hover menyala (glow) */}
          <a 
            href="#portfolio"
            className="group relative inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base transition-all duration-300 overflow-hidden"
          >
            {/* Outline yang redup terang */}
            <div className="absolute inset-0 rounded-full border border-white/50 animate-border-pulse group-hover:opacity-0 transition-opacity duration-300"></div>
            
            {/* Fill color yang muncul saat hover */}
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Bayangan biru berputar di belakang tombol saat hover */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-800 blur-md animate-spin-slow opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>

            <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">Lihat Karya Saya</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 relative z-10 text-white group-hover:text-black group-hover:translate-x-1 transition-all duration-300" />
          </a>
        </ParallaxSection>

        {/* ABOUT ME SECTION */}
        <ParallaxSection 
          id="about" 
          className="container mx-auto px-6 py-24"
        >
          <div className="bg-neutral-900 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(255,255,255,0.03)]">
            {/* Foto Profil */}
            <div className="w-full md:w-2/5 flex justify-center">
              <div className="relative w-64 md:w-80 aspect-[3/4] rounded-[2rem] p-1 group overflow-hidden bg-neutral-900">
                {/* Animasi Bayangan Biru Berputar (Stroke) */}
                <div className="absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#3b82f6_100%)] animate-[spin_4s_linear_infinite] opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Kontainer Foto */}
                <div className="relative w-full h-full rounded-[calc(2rem-4px)] overflow-hidden z-10 bg-neutral-900">
                  {/* GANTI URL FOTO PROFIL DI SINI */}
                  <img src="https://github.com/user-attachments/assets/d3f95128-beec-43d4-90ff-fb80474ade00" alt="Foto Profil" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
            
            {/* Informasi Biodata */}
            <div className="w-full md:w-3/5">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Tentang Saya</h2>
              <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                Halo! Saya adalah seorang Social Media Specialist yang bersemangat dalam menceritakan kisah brand melalui visual yang memukau dan strategi konten yang cerdas. Dengan pengalaman dalam mengelola berbagai akun media sosial, saya memahami bagaimana mengubah audiens biasa menjadi komunitas yang loyal dan interaktif.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-neutral-950 p-5 rounded-2xl border border-neutral-800/50">
                  <span className="block text-sm text-neutral-500 mb-1">Nama</span>
                  <span className="text-white font-medium">Moh. Alif Fadhilah Patrayasa</span>
                </div>
                <div className="bg-neutral-950 p-5 rounded-2xl border border-neutral-800/50">
                  <span className="block text-sm text-neutral-500 mb-1">Lokasi</span>
                  <span className="text-white font-medium">Surabaya, Indonesia</span>
                </div>
              </div>
            </div>
          </div>
        </ParallaxSection>

        {/* PORTFOLIO SECTION (SHOWCASE) */}
        <ParallaxSection 
          id="portfolio" 
          className="container mx-auto px-6 py-24"
          disable3D={true}
        >
          <div className="mb-16 md:text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-glow-slow">Karya Terbaik</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">Kurasi konten Instagram yang dirancang untuk interaksi maksimal.</p>
          </div>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              onClick={() => setActiveTab('feed')} 
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'feed' ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105' : 'bg-neutral-900 text-neutral-400 hover:bg-neutral-800 hover:text-white animate-border-pulse'}`}
            >
              Instagram Feed
            </button>
            <button 
              onClick={() => setActiveTab('story')} 
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'story' ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105' : 'bg-neutral-900 text-neutral-400 hover:bg-neutral-800 hover:text-white animate-border-pulse'}`}
            >
              Instagram Story
            </button>
            <button 
              onClick={() => setActiveTab('reels')} 
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'reels' ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105' : 'bg-neutral-900 text-neutral-400 hover:bg-neutral-800 hover:text-white animate-border-pulse'}`}
            >
              Instagram Reels
            </button>
          </div>

          {/* Tab Content */}
          <div className="max-w-5xl mx-auto relative">
            {/* Top Gradient Shadow */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-neutral-950 to-transparent z-10 pointer-events-none"></div>
            
            {/* Bottom Gradient Shadow */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-neutral-950 to-transparent z-10 pointer-events-none"></div>

            <div className="max-h-[80vh] overflow-y-auto pr-2 pb-8 pt-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
            
            {/* KATEGORI 1: INSTAGRAM FEED */}
            {activeTab === 'feed' && (
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              >
                {/* Item Feed 1 */}
                <motion.div variants={itemVariants} className="relative aspect-square bg-neutral-900 rounded-[2rem] overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <img src="https://github.com/user-attachments/assets/11602d5f-1a9f-432c-a4d8-d16281e593ed" alt="Instagram Feed 1" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <button 
                      onClick={() => setSelectedImage("https://github.com/user-attachments/assets/11602d5f-1a9f-432c-a4d8-d16281e593ed")}
                      className="text-white font-medium border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors"
                    >
                      Lihat Detail
                    </button>
                  </div>
                </motion.div>
                {/* Item Feed 2 */}
                <motion.div variants={itemVariants} className="relative aspect-square bg-neutral-900 rounded-[2rem] overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <img src="https://github.com/user-attachments/assets/eb64479a-2b44-4c04-bf5c-02ad69aec404" alt="Instagram Feed 2" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <button 
                      onClick={() => setSelectedImage("https://github.com/user-attachments/assets/eb64479a-2b44-4c04-bf5c-02ad69aec404")}
                      className="text-white font-medium border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors"
                    >
                      Lihat Detail
                    </button>
                  </div>
                </motion.div>
                {/* Item Feed 3 */}
                <motion.div variants={itemVariants} className="relative aspect-square bg-neutral-900 rounded-[2rem] overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <img src="https://github.com/user-attachments/assets/04f1beb8-f0ab-492f-8aa3-37dfa9bd5f2e" alt="Instagram Feed 3" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <button 
                      onClick={() => setSelectedImage("https://github.com/user-attachments/assets/04f1beb8-f0ab-492f-8aa3-37dfa9bd5f2e")}
                      className="text-white font-medium border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors"
                    >
                      Lihat Detail
                    </button>
                  </div>
                </motion.div>
                {/* Item Feed 4 */}
                <motion.div variants={itemVariants} className="relative aspect-square bg-neutral-900 rounded-[2rem] overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <img src="https://github.com/user-attachments/assets/1278588d-d430-4c95-b129-7b737ea8c9e6" alt="Instagram Feed 4" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <button 
                      onClick={() => setSelectedImage("https://github.com/user-attachments/assets/1278588d-d430-4c95-b129-7b737ea8c9e6")}
                      className="text-white font-medium border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors"
                    >
                      Lihat Detail
                    </button>
                  </div>
                </motion.div>
                {/* Item Feed 5 */}
                <motion.div variants={itemVariants} className="relative aspect-square bg-neutral-900 rounded-[2rem] overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <img src="https://github.com/user-attachments/assets/547151e5-9d29-4b59-8454-92cd12a53804" alt="Instagram Feed 5" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <button 
                      onClick={() => setSelectedImage("https://github.com/user-attachments/assets/547151e5-9d29-4b59-8454-92cd12a53804")}
                      className="text-white font-medium border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors"
                    >
                      Lihat Detail
                    </button>
                  </div>
                </motion.div>
                {/* Item Feed 6 */}
                <motion.div variants={itemVariants} className="relative aspect-square bg-neutral-900 rounded-[2rem] overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <img src="https://github.com/user-attachments/assets/b78232c9-cf47-4d65-91de-518d08c51907" alt="Instagram Feed 6" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <button 
                      onClick={() => setSelectedImage("https://github.com/user-attachments/assets/b78232c9-cf47-4d65-91de-518d08c51907")}
                      className="text-white font-medium border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors"
                    >
                      Lihat Detail
                    </button>
                  </div>
                </motion.div>
                {/* Item Feed 7 */}
                <motion.div variants={itemVariants} className="relative aspect-square bg-neutral-900 rounded-[2rem] overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <img src="https://github.com/user-attachments/assets/55f0c320-8d1a-45fc-87b8-b89393404f13" alt="Instagram Feed 7" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <button 
                      onClick={() => setSelectedImage("https://github.com/user-attachments/assets/55f0c320-8d1a-45fc-87b8-b89393404f13")}
                      className="text-white font-medium border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors"
                    >
                      Lihat Detail
                    </button>
                  </div>
                </motion.div>
                {/* Item Feed 8 */}
                <motion.div variants={itemVariants} className="relative aspect-square bg-neutral-900 rounded-[2rem] overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <img src="https://github.com/user-attachments/assets/44439303-372b-42fe-b7e0-ef860d4943e6" alt="Instagram Feed 8" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <button 
                      onClick={() => setSelectedImage("https://github.com/user-attachments/assets/44439303-372b-42fe-b7e0-ef860d4943e6")}
                      className="text-white font-medium border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors"
                    >
                      Lihat Detail
                    </button>
                  </div>
                </motion.div>
                {/* Item Feed 9 */}
                <motion.div variants={itemVariants} className="relative aspect-square bg-neutral-900 rounded-[2rem] overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <img src="https://github.com/user-attachments/assets/6f506d73-1cfb-4e9f-a5e2-bfda95293b15" alt="Instagram Feed 9" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <button 
                      onClick={() => setSelectedImage("https://github.com/user-attachments/assets/6f506d73-1cfb-4e9f-a5e2-bfda95293b15")}
                      className="text-white font-medium border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors"
                    >
                      Lihat Detail
                    </button>
                  </div>
                </motion.div>
                {/* Item Feed 10 */}
                <motion.div variants={itemVariants} className="relative aspect-square bg-neutral-900 rounded-[2rem] overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <img src="https://github.com/user-attachments/assets/eba64013-c88b-4478-a2fd-5a48d238358e" alt="Instagram Feed 10" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <button 
                      onClick={() => setSelectedImage("https://github.com/user-attachments/assets/eba64013-c88b-4478-a2fd-5a48d238358e")}
                      className="text-white font-medium border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors"
                    >
                      Lihat Detail
                    </button>
                  </div>
                </motion.div>
                {/* Item Feed 11 */}
                <motion.div variants={itemVariants} className="relative aspect-square bg-neutral-900 rounded-[2rem] overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <img src="https://github.com/user-attachments/assets/3232cf91-74a7-42cf-aaeb-4462d055291b" alt="Instagram Feed 11" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <button 
                      onClick={() => setSelectedImage("https://github.com/user-attachments/assets/3232cf91-74a7-42cf-aaeb-4462d055291b")}
                      className="text-white font-medium border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors"
                    >
                      Lihat Detail
                    </button>
                  </div>
                </motion.div>
                {/* Item Feed 12 */}
                <motion.div variants={itemVariants} className="relative aspect-square bg-neutral-900 rounded-[2rem] overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <img src="https://github.com/user-attachments/assets/38d92df9-d79c-48af-995d-2c2b0d98c0e3" alt="Instagram Feed 12" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <button 
                      onClick={() => setSelectedImage("https://github.com/user-attachments/assets/38d92df9-d79c-48af-995d-2c2b0d98c0e3")}
                      className="text-white font-medium border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors"
                    >
                      Lihat Detail
                    </button>
                  </div>
                </motion.div>
                {/* Item Feed 13 */}
                <motion.div variants={itemVariants} className="relative aspect-square bg-neutral-900 rounded-[2rem] overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <img src="https://github.com/user-attachments/assets/7c367776-8c50-46db-af36-84b6fa037042" alt="Instagram Feed 13" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <button 
                      onClick={() => setSelectedImage("https://github.com/user-attachments/assets/7c367776-8c50-46db-af36-84b6fa037042")}
                      className="text-white font-medium border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors"
                    >
                      Lihat Detail
                    </button>
                  </div>
                </motion.div>
                {/* Item Feed 14 */}
                <motion.div variants={itemVariants} className="relative aspect-square bg-neutral-900 rounded-[2rem] overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <img src="https://github.com/user-attachments/assets/a66436d3-193e-4dbf-86f1-860daf356de9" alt="Instagram Feed 14" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <button 
                      onClick={() => setSelectedImage("https://github.com/user-attachments/assets/a66436d3-193e-4dbf-86f1-860daf356de9")}
                      className="text-white font-medium border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors"
                    >
                      Lihat Detail
                    </button>
                  </div>
                </motion.div>
                {/* Item Feed 15 */}
                <motion.div variants={itemVariants} className="relative aspect-square bg-neutral-900 rounded-[2rem] overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <img src="https://github.com/user-attachments/assets/6e00867f-7b6a-4817-abd6-10cfbec53dea" alt="Instagram Feed 15" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <button 
                      onClick={() => setSelectedImage("https://github.com/user-attachments/assets/6e00867f-7b6a-4817-abd6-10cfbec53dea")}
                      className="text-white font-medium border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors"
                    >
                      Lihat Detail
                    </button>
                  </div>
                </motion.div>
                {/* Item Feed 16 */}
                <motion.div variants={itemVariants} className="relative aspect-square bg-neutral-900 rounded-[2rem] overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <img src="https://github.com/user-attachments/assets/3ccaa8a9-c051-4d6a-98e7-74e7a30c1aae" alt="Instagram Feed 16" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <button 
                      onClick={() => setSelectedImage("https://github.com/user-attachments/assets/3ccaa8a9-c051-4d6a-98e7-74e7a30c1aae")}
                      className="text-white font-medium border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors"
                    >
                      Lihat Detail
                    </button>
                  </div>
                </motion.div>
                {/* Item Feed 17 */}
                <motion.div variants={itemVariants} className="relative aspect-square bg-neutral-900 rounded-[2rem] overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <img src="https://github.com/user-attachments/assets/858ad571-e412-476e-943a-fe0806d250a5" alt="Instagram Feed 17" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <button 
                      onClick={() => setSelectedImage("https://github.com/user-attachments/assets/858ad571-e412-476e-943a-fe0806d250a5")}
                      className="text-white font-medium border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors"
                    >
                      Lihat Detail
                    </button>
                  </div>
                </motion.div>
                {/* Item Feed 18 */}
                <motion.div variants={itemVariants} className="relative aspect-square bg-neutral-900 rounded-[2rem] overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <img src="https://github.com/user-attachments/assets/eda523b3-17e1-4cd8-9d1e-3efc9c1b98cb" alt="Instagram Feed 18" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <button 
                      onClick={() => setSelectedImage("https://github.com/user-attachments/assets/eda523b3-17e1-4cd8-9d1e-3efc9c1b98cb")}
                      className="text-white font-medium border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors"
                    >
                      Lihat Detail
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* KATEGORI 2: INSTAGRAM STORY */}
            {activeTab === 'story' && (
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
              >
                {/* Item Story 1 */}
                <motion.div variants={itemVariants} className="relative aspect-[9/16] bg-neutral-900 rounded-[2rem] overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <img src="https://picsum.photos/seed/story1/720/1280" alt="Instagram Story 1" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <button 
                      onClick={() => setSelectedImage("https://picsum.photos/seed/story1/720/1280")}
                      className="text-white font-medium border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors"
                    >
                      Lihat Story
                    </button>
                  </div>
                </motion.div>
                {/* Item Story 2 */}
                <motion.div variants={itemVariants} className="relative aspect-[9/16] bg-neutral-900 rounded-[2rem] overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <img src="https://picsum.photos/seed/story2/720/1280" alt="Instagram Story 2" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <button 
                      onClick={() => setSelectedImage("https://picsum.photos/seed/story2/720/1280")}
                      className="text-white font-medium border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors"
                    >
                      Lihat Story
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* KATEGORI 3: INSTAGRAM REELS */}
            {activeTab === 'reels' && (
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
              >
                {/* Item Reels 1 */}
                <motion.div 
                  variants={itemVariants} 
                  className="relative aspect-[9/16] bg-neutral-900 rounded-[2rem] overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                  onClick={() => setSelectedImage("https://picsum.photos/seed/reels1/720/1280")}
                >
                  <img src="https://picsum.photos/seed/reels1/720/1280" alt="Instagram Reels 1" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300 group-hover:scale-110">
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>
                  </div>
                </motion.div>
                {/* Item Reels 2 */}
                <motion.div 
                  variants={itemVariants} 
                  className="relative aspect-[9/16] bg-neutral-900 rounded-[2rem] overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                  onClick={() => setSelectedImage("https://picsum.photos/seed/reels2/720/1280")}
                >
                  <img src="https://picsum.photos/seed/reels2/720/1280" alt="Instagram Reels 2" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300 group-hover:scale-110">
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
            </div>
          </div>
        </ParallaxSection>

        {/* SERVICES / SKILLS SECTION (MARQUEE STYLE) */}
        <ParallaxSection 
          id="services" 
          className="py-24 overflow-hidden bg-neutral-950"
        >
          <div className="mb-16 md:text-center container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Keahlian & Layanan</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">Pendekatan komprehensif untuk mendominasi algoritma dan hati audiens.</p>
          </div>

          {/* Looping Marquee */}
          <div className="relative flex overflow-x-hidden w-full whitespace-nowrap py-10 border-y border-neutral-900 bg-neutral-950/50">
            <div className="animate-marquee flex gap-16 items-center px-8">
              {/* Set 1 */}
              <span className="text-5xl md:text-6xl font-light text-neutral-300">Content Strategy</span>
              <span className="text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-neutral-100">Visual Design</span>
              <span className="text-4xl md:text-5xl font-serif italic text-neutral-400">Copywriting</span>
              <span className="text-6xl md:text-7xl font-black text-white tracking-widest uppercase">Illustration</span>
              <span className="text-5xl md:text-6xl font-medium text-neutral-500">Photography</span>
              {/* Set 2 (Duplicate for seamless loop) */}
              <span className="text-5xl md:text-6xl font-light text-neutral-300">Content Strategy</span>
              <span className="text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-neutral-100">Visual Design</span>
              <span className="text-4xl md:text-5xl font-serif italic text-neutral-400">Copywriting</span>
              <span className="text-6xl md:text-7xl font-black text-white tracking-widest uppercase">Illustration</span>
              <span className="text-5xl md:text-6xl font-medium text-neutral-500">Photography</span>
            </div>
          </div>
        </ParallaxSection>

        {/* CONTACT SECTION */}
        <ParallaxSection 
          id="contact" 
          className="container mx-auto px-6 py-24 mb-12 relative z-20"
          disable3D={true}
        >
          <div className="bg-neutral-900 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            {/* Efek cahaya dekoratif di background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-30">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Mari Berkolaborasi</h2>
              <p className="text-lg text-neutral-400 mb-12 max-w-2xl mx-auto">
                Siap untuk meningkatkan kehadiran brand Anda di media sosial? Mari diskusikan ide-ide hebat bersama.
              </p>
              
              {/* Tombol Kontak */}
              <div className="flex flex-wrap justify-center gap-4 relative z-40">
                <a 
                  href="mailto:fhadulbilqis@gmail.com" 
                  className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 overflow-hidden cursor-pointer pointer-events-auto"
                >
                  <div className="absolute inset-0 rounded-full border border-white/50 animate-border-pulse group-hover:opacity-0 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-800 blur-md animate-spin-slow opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
                  
                  <Mail className="w-5 h-5 relative z-10 text-white group-hover:text-black transition-colors duration-300" />
                  <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">Kirim Email</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/fadhilah-patrayasa-a987a3309/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 overflow-hidden cursor-pointer pointer-events-auto"
                >
                  <div className="absolute inset-0 rounded-full border border-white/50 animate-border-pulse group-hover:opacity-0 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-800 blur-md animate-spin-slow opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
                  
                  <Linkedin className="w-5 h-5 relative z-10 text-white group-hover:text-black transition-colors duration-300" />
                  <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">LinkedIn</span>
                </a>
                
                <a 
                  href="https://www.instagram.com/fadhilahptrys.__/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 overflow-hidden cursor-pointer pointer-events-auto"
                >
                  <div className="absolute inset-0 rounded-full border border-white/50 animate-border-pulse group-hover:opacity-0 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-800 blur-md animate-spin-slow opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
                  
                  <Instagram className="w-5 h-5 relative z-10 text-white group-hover:text-black transition-colors duration-300" />
                  <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </ParallaxSection>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-neutral-900 py-8 text-center text-neutral-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Social Media Specialist. All rights reserved.</p>
      </footer>

      {/* IMAGE POPUP MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.8, rotateX: 20, y: 50, opacity: 0 }}
              animate={{ scale: 1, rotateX: 0, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, rotateX: -20, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full max-h-[90vh] bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl"
              style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
                {/* Image Container */}
                <div className="w-full md:w-3/5 bg-black flex items-center justify-center overflow-hidden">
                  <img 
                    src={selectedImage} 
                    alt="Portfolio Detail" 
                    className="w-full h-full object-contain max-h-[50vh] md:max-h-[90vh]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Description Container */}
                <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col overflow-y-auto">
                  <h3 className="text-2xl font-bold text-white mb-2">Detail Karya</h3>
                  <p className="text-neutral-400 text-sm mb-6">Dipublikasikan pada {new Date().toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })}</p>
                  
                  <div className="space-y-4 text-neutral-300">
                    <p>
                      Ini adalah deskripsi detail untuk karya portofolio yang dipilih. Konten ini dirancang khusus untuk memaksimalkan interaksi (engagement) dan menyampaikan pesan brand dengan cara yang visual dan menarik.
                    </p>
                    <p>
                      <strong>Strategi:</strong> Menggunakan palet warna yang konsisten dengan identitas brand, dipadukan dengan copywriting yang memancing rasa ingin tahu audiens.
                    </p>
                    <div className="pt-4 mt-4 border-t border-neutral-800">
                      <h4 className="text-white font-medium mb-2">Hasil (Metrics):</h4>
                      <ul className="list-disc list-inside text-sm text-neutral-400 space-y-1">
                        <li>Peningkatan Reach sebesar 45%</li>
                        <li>Engagement Rate: 8.2%</li>
                        <li>+120 Pengikut Baru</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
