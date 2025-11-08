"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Send, Instagram, Twitter, Youtube } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuItems = ["About/Tokenomics", "About $Nomad", "Why $Nomad"];
  const socialIcons = [
    {
      icon: Send,
      label: "Telegram",
      link: "https://t.me/nomadpepecoin",
    },
    {
      icon: Instagram,
      label: "Instagram",
      link: "https://www.instagram.com/nomadcoinhq?igsh=OTlrY3VwcXo0eXlq",
    },
    {
      icon: Twitter,
      label: "X",
      link: "https://x.com/nomadcoinhq?s=21",
    },
    {
      icon: Youtube,
      label: "YouTube",
      link: "https://youtube.com/@soullabsofficial?si=lfFTcx0w61gbC-d-",
    },
  ];

  return (
    <div className="absolute z-50 w-full">
      <motion.nav
        className={`w-full sm:w-[60%] md:w-[50%] lg:w-[50%] xl:w-[45%] 2xl:w-[40%] m-auto my-2 sm:my-3 md:my-4 transition-all duration-500 py-2 sm:py-3 rounded-lg md:rounded-xl md:border border-[#CCE697] ${
          scrolled ? "" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 flex justify-between items-center">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="text-[#E5EED2] text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] font-medium transition-colors whitespace-nowrap"
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Desktop BUY $NOMAD Button */}
          <motion.a
            href="#howtobuy"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="relative hidden md:inline-block font-bold text-[#0F1C0F] text-[14px] lg:text-[16px] xl:text-lg uppercase tracking-wide"
          >
            <span className="absolute inset-0 bg-[#58731f] rounded-md translate-x-[3px] lg:translate-x-[4px] translate-y-[3px] lg:translate-y-[4px]"></span>
            <span className="relative bg-[#99CC33] rounded-md border border-[#0F1C0F] px-4 lg:px-5 xl:px-6 py-1.5 lg:py-2 inline-block text-sm lg:text-base">
              BUY $NOMAD
            </span>
          </motion.a>

          {/* Mobile Menu Toggle */}
          <div className="flex justify-end w-full md:hidden">
            <motion.button
              className="text-[#0F1C0F] bg-[#99CC33] hover:bg-[#8BC033] rounded-2xl p-2 mr-2 shadow-lg border-2 border-[#0F1C0F]"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? (
                <X size={24} className="text-[#0F1C0F]" />
              ) : (
                <Menu size={24} className="text-[#0F1C0F]" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Slide Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              />

              {/* Menu Panel */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 200,
                }}
                className="fixed top-0 right-0 h-full w-[280px] max-w-[85vw] bg-gradient-to-b from-[#1a3a35] to-[#0E2422] border-l border-[#99CC33]/30 shadow-2xl z-50 md:hidden overflow-y-auto"
              >
                {/* Header */}
                <div className="p-4 border-b border-[#99CC33]/20">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-[#99CC33] lucky">
                      Menu
                    </h2>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-1 rounded-full bg-[#99CC33]/20 hover:bg-[#99CC33]/30 transition-colors"
                    >
                      <X size={18} className="text-[#99CC33]" />
                    </button>
                  </div>
                </div>

                {/* Menu Links */}
                <div className="px-4 py-6 space-y-3">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      whileHover={{ x: 4 }}
                      className="block w-full text-center p-3 rounded-xl bg-[#2a4a45] hover:bg-[#99CC33]/20 border border-[#99CC33]/10 text-[#E5EED2] text-base font-medium transition-all duration-300"
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>

                {/* Social Section */}
                <div className="px-4 py-4 mt-auto border-t border-[#99CC33]/20 bg-[#0F1C0F]/20">
                  <h3 className="text-[#99CC33] text-xs font-semibold mb-3 text-center uppercase tracking-wider">
                    Join Community
                  </h3>
                  <div className="flex justify-center gap-3 flex-wrap">
                    {socialIcons.map(({ icon: Icon, label, link }, index) => (
                      <motion.a
                        key={label}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2.5 bg-[#99CC33] rounded-xl text-[#0F1C0F] shadow border border-[#0F1C0F] hover:bg-[#8BC033] transition-colors"
                      >
                        <Icon size={18} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}