'use client';

export default function Footer() {
  return (
    <footer className="bg-[#02221D] text-center py-12 px-4 text-xl">
      {/* Top Navigation Links */}
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-6  text-white ">
        <a href="#about" className="hover:text-[#99CC33] transition-colors duration-200">
          ABOUT $NOMAD
        </a>
        <span className="text-[#99CC33]">|</span>
        <a href="#howtobuy" className="hover:text-[#99CC33] transition-colors duration-200">
          HOW TO BUY
        </a>
        <span className="text-[#99CC33]">|</span>
        <a href="#nomadnomics" className="hover:text-[#99CC33] transition-colors duration-200">
          NOMADNOMICS
        </a>
        <span className="text-[#99CC33]">|</span>
        <a href="#faq" className="hover:text-[#99CC33] transition-colors duration-200">
          FAQ
        </a>
      </div>

      {/* Disclaimer */}
      <p className="max-w-3xl mx-auto  text-white mb-6">
        DISCLAIMER: $NOMAD is a meme coin created for fun with absolutely no intrinsic value or any
        expectation of financial return. The token for entertainment purposes only and we take zero
        responsibility for the value of this token. $NOMAD is inspired by NOMAD to be the king of
        meme coins.
      </p>

      {/* Copyright */}
      <p className="text-[#9fd235]">
        2025 NOMAD PEPE. All right reserved.
      </p>
    </footer>
  );
}
