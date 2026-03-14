import { Play, Mail, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('feed');

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

      <main>
        {/* HERO SECTION */}
        <section className="container mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
          {/* Headline Utama dengan Animasi Glow */}
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tight text-white max-w-5xl leading-tight mb-10 flex justify-center gap-x-1 md:gap-x-2 whitespace-nowrap">
            {"PORTOFOLIO".split("").map((char, index) => (
              <span key={index} className="animate-glow" style={{ animationDelay: `${index * 0.15}s` }}>
                {char}
              </span>
            ))}
          </h1>
          
          {/* Tombol CTA dengan efek hover menyala (glow) */}
          <a 
            href="#portfolio"
            className="group inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
          >
            Lihat Karya Saya
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </section>

        {/* ABOUT ME SECTION */}
        <section id="about" className="container mx-auto px-6 py-24">
          <div className="bg-neutral-900 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(255,255,255,0.03)]">
            {/* Foto Profil */}
            <div className="w-full md:w-2/5 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 group">
                {/* Animasi Bayangan Biru Berputar */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-800 blur-xl animate-spin-slow opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Kontainer Foto */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-neutral-900 z-10 bg-neutral-900">
                  {/* GANTI URL FOTO PROFIL DI SINI */}
                  <img src="https://picsum.photos/seed/profile/800/800" alt="Foto Profil" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
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
        </section>

        {/* PORTFOLIO SECTION (SHOWCASE) */}
        <section id="portfolio" className="container mx-auto px-6 py-24">
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
          <div className="max-w-5xl mx-auto min-h-[500px]">
            
            {/* KATEGORI 1: INSTAGRAM FEED */}
            {activeTab === 'feed' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-in fade-in zoom-in-95 duration-500">
                {/* Item Feed 1 */}
                <div className="relative aspect-square bg-neutral-900 rounded-[2rem] overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <img src="https://picsum.photos/seed/feed1/800/800" alt="Instagram Feed 1" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <span className="text-white font-medium border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm">Lihat Detail</span>
                  </div>
                </div>
                {/* Item Feed 2 */}
                <div className="relative aspect-square bg-neutral-900 rounded-[2rem] overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <img src="https://picsum.photos/seed/feed2/800/800" alt="Instagram Feed 2" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <span className="text-white font-medium border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm">Lihat Detail</span>
                  </div>
                </div>
                {/* Item Feed 3 */}
                <div className="relative aspect-square bg-neutral-900 rounded-[2rem] overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <img src="https://picsum.photos/seed/feed3/800/800" alt="Instagram Feed 3" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <span className="text-white font-medium border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm">Lihat Detail</span>
                  </div>
                </div>
              </div>
            )}

            {/* KATEGORI 2: INSTAGRAM STORY */}
            {activeTab === 'story' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 animate-in fade-in zoom-in-95 duration-500">
                {/* Item Story 1 */}
                <div className="relative aspect-[9/16] bg-neutral-900 rounded-[2rem] overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <img src="https://picsum.photos/seed/story1/720/1280" alt="Instagram Story 1" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <span className="text-white font-medium border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm">Lihat Story</span>
                  </div>
                </div>
                {/* Item Story 2 */}
                <div className="relative aspect-[9/16] bg-neutral-900 rounded-[2rem] overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <img src="https://picsum.photos/seed/story2/720/1280" alt="Instagram Story 2" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <span className="text-white font-medium border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm">Lihat Story</span>
                  </div>
                </div>
              </div>
            )}

            {/* KATEGORI 3: INSTAGRAM REELS */}
            {activeTab === 'reels' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 animate-in fade-in zoom-in-95 duration-500">
                {/* Item Reels 1 */}
                <div className="relative aspect-[9/16] bg-neutral-900 rounded-[2rem] overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <img src="https://picsum.photos/seed/reels1/720/1280" alt="Instagram Reels 1" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300 group-hover:scale-110">
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>
                  </div>
                </div>
                {/* Item Reels 2 */}
                <div className="relative aspect-[9/16] bg-neutral-900 rounded-[2rem] overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <img src="https://picsum.photos/seed/reels2/720/1280" alt="Instagram Reels 2" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300 group-hover:scale-110">
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* SERVICES / SKILLS SECTION (MARQUEE STYLE) */}
        <section id="services" className="py-24 overflow-hidden bg-neutral-950">
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
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="container mx-auto px-6 py-24 mb-12">
          <div className="bg-neutral-900 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            {/* Efek cahaya dekoratif di background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Mari Berkolaborasi</h2>
              <p className="text-lg text-neutral-400 mb-12 max-w-2xl mx-auto">
                Siap untuk meningkatkan kehadiran brand Anda di media sosial? Mari diskusikan ide-ide hebat bersama.
              </p>
              
              {/* Tombol Kontak */}
              <div className="flex flex-wrap justify-center gap-4">
                {/* GANTI EMAIL DI SINI */}
                <a 
                  href="mailto:hello@example.com" 
                  className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                  <Mail className="w-5 h-5" />
                  Kirim Email
                </a>
                
                {/* GANTI LINK LINKEDIN DI SINI */}
                <a 
                  href="#" 
                  className="flex items-center gap-2 bg-neutral-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-neutral-700 hover:scale-105"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                
                {/* GANTI LINK INSTAGRAM DI SINI */}
                <a 
                  href="#" 
                  className="flex items-center gap-2 bg-neutral-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-neutral-700 hover:scale-105"
                >
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-neutral-900 py-8 text-center text-neutral-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Social Media Specialist. All rights reserved.</p>
      </footer>
    </div>
  );
}
