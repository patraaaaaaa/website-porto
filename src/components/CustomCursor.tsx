import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // 1. Deteksi perangkat layar sentuh (HP/Tablet)
    if (window.matchMedia("(pointer: coarse)").matches || 'ontouchstart' in window) {
      setIsTouchDevice(true);
      return;
    }

    // 2. Sembunyikan kursor bawaan sistem secara global
    const style = document.createElement('style');
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let circleX = mouseX;
    let circleY = mouseY;
    let isHovering = false;

    // Set transisi CSS hanya untuk efek hover (glow & background), BUKAN untuk transform (posisi)
    if (circleRef.current) {
      circleRef.current.style.transition = 'box-shadow 0.3s ease, background-color 0.3s ease';
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Deteksi jika kursor berada di atas elemen yang bisa diklik
      const target = e.target as HTMLElement;
      isHovering = !!target.closest('a, button, [role="button"], .cursor-pointer');

      // Update posisi kursor utama (titik putih) secara instan tanpa delay
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    let animationFrameId: number;

    // 3. Animasi Trailing menggunakan requestAnimationFrame (60fps)
    const render = () => {
      // Smooth Lerp (Interpolasi Linear) untuk kursor ekor
      circleX += (mouseX - circleX) * 0.15; // Angka 0.15 mengatur kecepatan/kelenturan pegas
      circleY += (mouseY - circleY) * 0.15;

      if (circleRef.current) {
        // Logika Hover Effect
        const scale = isHovering ? 1.5 : 1;
        const glow = isHovering ? '0 0 15px rgba(255,255,255,0.4)' : 'none';
        const bg = isHovering ? 'rgba(255,255,255,0.1)' : 'transparent';
        
        // Aplikasikan posisi dan skala
        circleRef.current.style.transform = `translate3d(${circleX}px, ${circleY}px, 0) translate(-50%, -50%) scale(${scale})`;
        circleRef.current.style.boxShadow = glow;
        circleRef.current.style.backgroundColor = bg;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Cleanup saat komponen dilepas
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
      document.head.removeChild(style);
    };
  }, []);

  // Jika perangkat sentuh, jangan render kursor kustom
  if (isTouchDevice) return null;

  return (
    <>
      {/* Kursor Ekor (Trailing Circle) */}
      <div
        ref={circleRef}
        className="fixed top-0 left-0 w-10 h-10 border border-white/50 rounded-full pointer-events-none z-[9998]"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      {/* Kursor Utama (Solid Dot) */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999]"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
}
