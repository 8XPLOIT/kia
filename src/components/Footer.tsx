import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative z-10 mt-20 px-4 sm:px-6 lg:px-8 pb-8">
  <div className="max-w-7xl mx-auto">
    <div className="glass-card p-6 sm:p-8 rounded-3xl text-center">
      {/* Menambahkan flex-wrap agar tidak berantakan di layar HP yang sangat kecil */}
      <p className="font-body text-xs text-gray-400 flex flex-wrap items-center justify-center gap-1.5">
        Copyright © 2026 — Kia Maheswari. Powered by
        <a 
          href="https://8xploit.github.io/cv"
          target="_blank"
          rel="noopener noreferrer"
          /* Menyesuaikan warna hover dengan tema merah/maroon baru */
          className="font-semibold text-gray-200 hover:text-red-500 hover:underline underline-offset-4 transition-all duration-300 cursor-pointer"
        >
          Kapten Nemo
        </a>
      </p>
    </div>
  </div>
</footer>
  );
}
