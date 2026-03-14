import { Play, Mail, Linkedin, Instagram, ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 font-sans selection:bg-neutral-800">
      {/* HEADER / NAVIGASI */}
      <header className="container mx-auto px-6 py-8 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter text-white">SM.Spec</div>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-neutral-400">
          <a href="#portfolio" className="hover:text-white transition-colors">Karya</a>
          <a href="#services" className="hover:text-white transition-colors">Layanan</a>
          <a href="#contact" className="hover:text-white transition-colors">Kontak</a>
        </nav>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="container mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
          {/* Headline Utama */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white max-w-4xl leading-tight mb-6">
            Elevating Brands through <span className="text-neutral-400">Engaging Social Media</span>
          </h1>
          
          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10">
            Saya adalah Social Media Specialist yang berfokus pada strategi, desain visual, dan pembuatan konten Instagram yang menarik audiens dan membangun komunitas.
          </p>
          
          {/* Tombol CTA dengan efek hover menyala (glow) */}
          <a 
            href="#portfolio"
            className="group inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
          >
            Lihat Karya Saya
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </section>

        {/* PORTFOLIO SECTION (SHOWCASE) */}
        <section id="portfolio" className="container mx-auto px-6 py-24">
          <div className="mb-16 md:text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Karya Terbaik</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">Kurasi konten Instagram yang dirancang untuk interaksi maksimal.</p>
          </div>

          {/* Grid Layout untuk Portfolio */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* KATEGORI 1: INSTAGRAM FEED (Rasio 1:1) */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-semibold text-white mb-2 text-center md:text-left">Instagram Feed</h3>
              
              {/* Item Feed 1 */}
              <div className="relative aspect-square bg-neutral-900 rounded-[2rem] overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                {/* GANTI URL GAMBAR DI SINI: src="URL_GAMBAR_ANDA" */}
                <img src="https://picsum.photos/seed/feed1/800/800" alt="Instagram Feed 1" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                  <span className="text-white font-medium border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm">Lihat Detail</span>
                </div>
              </div>

              {/* Item Feed 2 */}
              <div className="relative aspect-square bg-neutral-900 rounded-[2rem] overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                {/* GANTI URL GAMBAR DI SINI */}
                <img src="https://picsum.photos/seed/feed2/800/800" alt="Instagram Feed 2" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                  <span className="text-white font-medium border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm">Lihat Detail</span>
                </div>
              </div>
            </div>

            {/* KATEGORI 2: INSTAGRAM STORY (Rasio 9:16) */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-semibold text-white mb-2 text-center md:text-left">Instagram Story</h3>
              
              {/* Item Story */}
              <div className="relative aspect-[9/16] bg-neutral-900 rounded-[2rem] overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                {/* GANTI URL GAMBAR DI SINI */}
                <img src="https://picsum.photos/seed/story1/720/1280" alt="Instagram Story" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                  <span className="text-white font-medium border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm">Lihat Story</span>
                </div>
              </div>
            </div>

            {/* KATEGORI 3: INSTAGRAM REELS (Rasio 9:16 dengan Play Icon) */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-semibold text-white mb-2 text-center md:text-left">Instagram Reels</h3>
              
              {/* Item Reels */}
              <div className="relative aspect-[9/16] bg-neutral-900 rounded-[2rem] overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                {/* GANTI URL GAMBAR/THUMBNAIL DI SINI */}
                <img src="https://picsum.photos/seed/reels1/720/1280" alt="Instagram Reels" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" referrerPolicy="no-referrer" />
                
                {/* Ikon Play di tengah */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300 group-hover:scale-110">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SERVICES / SKILLS SECTION (BENTO STYLE) */}
        <section id="services" className="container mx-auto px-6 py-24">
          <div className="mb-16 md:text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Keahlian & Layanan</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">Pendekatan komprehensif untuk mendominasi algoritma dan hati audiens.</p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Skill 1 */}
            <div className="bg-neutral-900 p-8 rounded-[2rem] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,255,255,0.05)]">
              <div className="w-14 h-14 bg-neutral-800 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Content Strategy</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Merancang pilar konten dan kalender editorial yang sejalan dengan tujuan bisnis Anda.</p>
            </div>

            {/* Skill 2 */}
            <div className="bg-neutral-900 p-8 rounded-[2rem] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,255,255,0.05)]">
              <div className="w-14 h-14 bg-neutral-800 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Visual Design</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Menciptakan desain grafis yang estetis, on-brand, dan menghentikan jempol audiens saat scrolling.</p>
            </div>

            {/* Skill 3 */}
            <div className="bg-neutral-900 p-8 rounded-[2rem] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,255,255,0.05)]">
              <div className="w-14 h-14 bg-neutral-800 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">✍️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Copywriting</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Menulis caption yang persuasif, relevan, dan memancing interaksi serta konversi.</p>
            </div>

            {/* Skill 4 */}
            <div className="bg-neutral-900 p-8 rounded-[2rem] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,255,255,0.05)]">
              <div className="w-14 h-14 bg-neutral-800 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🎬</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Video Editing</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Mengedit Reels dan Story yang dinamis, mengikuti tren audio, dan mempertahankan retensi penonton.</p>
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
