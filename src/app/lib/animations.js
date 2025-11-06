// Animation utilities
const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return scrollY;
};

"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function Nomadnomics() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "MADHPJRN6BP8T7BR5Y7NUSUNWWA2JU8BYPOBZPRHBHV";

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="min-h-screen bg-[#0E2422] relative overflow-hidden py-12 md:py-20 px-4 md:px-6">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#99CC33]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-[#ACC578]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Decorative clouds */}
      <div className="absolute top-0 right-0 w-32 sm:w-40 md:w-48 lg:w-64 xl:w-80">
        <motion.img 
          src="/cloud.png" 
          alt="" 
          className="h-24 sm:h-28 md:h-32 lg:h-32 w-auto"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
      <div className="absolute bottom-0 right-0 w-32 sm:w-40 md:w-48 lg:w-64 xl:w-80">
        <motion.img 
          src="/cloud2.png" 
          alt="" 
          className="h-20 sm:h-24 md:h-28 lg:h-30 w-auto"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        />
      </div>

      <div className="container mx-auto max-w-7xl lucky relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Left side - Pepe Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg"
          >
            <div className="relative">
              {/* Enhanced glowing effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#99CC33] to-[#ACC578] rounded-full blur-3xl opacity-60 scale-85 animate-pulse"></div>
              <div className="absolute inset-0 bg-[#81af33] rounded-full blur-2xl opacity-40 scale-85"></div>
              <div className="absolute inset-0 bg-[#6b8d26] rounded-full blur-xl opacity-30 scale-85"></div>
              
              {/* Main image container with enhanced border */}
              <div className="relative rounded-full overflow-hidden z-10 border-4 border-[#ACC578]/30 shadow-2xl shadow-[#99CC33]/20">
                <img 
                  src="/nomadnomics.png" 
                  alt="Nomadnomics" 
                  className="h-100 m-auto transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Floating particles */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#99CC33] rounded-full blur-sm animate-bounce"></div>
              <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-[#ACC578] rounded-full blur-sm animate-bounce delay-300"></div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-1 w-full"
          >
            {/* Title with enhanced styling */}
            <motion.div 
              className="my-4 sm:my-5 md:my-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src="/$NOMADNOMICS.png" 
                alt="$NOMADNOMICS" 
                className="max-w-full h-auto drop-shadow-2xl"
              />
            </motion.div>

            {/* Total Supply with enhanced design */}
            <motion.div 
              className="mb-4 sm:mb-5 md:mb-6 lg:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-[#ACC578] text-lg sm:text-xl md:text-2xl mb-2 uppercase tracking-wider font-semibold drop-shadow-lg">
                TOTAL SUPPLY
              </h3>
              <p className="text-[#e5eed2] text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight break-words font-bold bg-gradient-to-r from-[#e5eed2] to-[#ACC578] bg-clip-text text-transparent">
                1,000,000,000,000
              </p>
            </motion.div>

            {/* Buy/Sell Tax with enhanced indicator */}
            <motion.div 
              className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 flex items-center gap-2 sm:gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div 
                className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gradient-to-br from-[#9fd235] to-[#7ca933] rounded-full flex flex-col justify-center flex-shrink-0 shadow-lg shadow-[#9fd235]/30"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-5 md:h-5 bg-[#4a6a1a] rounded-full m-auto shadow-inner"></div>
                <div className="absolute inset-0 rounded-full border border-[#e5eed2]/20"></div>
              </motion.div>
              <p className="text-[#e5eed2] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold drop-shadow-lg">
                BUY/SELL TAX: <span className="text-[#99CC33]">0%</span>
              </p>
            </motion.div>

            {/* Contract Address - Premium Styling */}
            <motion.div 
              className="mb-6 sm:mb-8 md:mb-10 lg:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="lucky text-[#ffffff] text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 uppercase tracking-wider font-semibold drop-shadow-lg">
                CONTRACT ADDRESS
              </h3>

              {/* Premium 3D Container */}
              <div className="relative w-full max-w-3xl group">
                {/* Multi-layer shadow effect */}
                <div className="absolute inset-0 translate-x-2 translate-y-2 bg-gradient-to-br from-[#a9c577] to-[#8ba84a] rounded-2xl -z-10 opacity-80 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>
                <div className="absolute inset-0 translate-x-1 translate-y-1 bg-gradient-to-br from-[#a9c577] to-[#7ca933] rounded-2xl -z-10 opacity-60 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-200"></div>

                {/* Main container with gradient border */}
                <div className="bg-gradient-to-br from-[#1a3a35] to-[#0E2422] border-2 border-[#ACC578] rounded-2xl p-3 sm:p-4 md:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 relative overflow-hidden group-hover:border-[#99CC33] transition-colors duration-300 shadow-2xl">
                  
                  {/* Animated background shine */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ACC578]/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  
                  <p className="text-[#e5eed2] lucky text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-mono break-all flex-1 w-full relative z-10 text-center sm:text-left">
                    {contractAddress}
                  </p>

                  {/* Premium button with enhanced effects */}
                  <div className="relative w-full sm:w-auto flex justify-center items-center min-w-[140px]">
                    {/* Button shadow with hover effect */}
                    <motion.div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-br from-[#a9c577] to-[#8ba84a] rounded-md translate-x-1.5 translate-y-1.5 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"
                      whileHover={{ scale: 1.05 }}
                    ></motion.div>

                    {/* Main button */}
                    <motion.button
                      whileHover={{ 
                        scale: 1.05,
                        background: "linear-gradient(135deg, #7ca933, #99CC33)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleCopy}
                      className="relative bg-gradient-to-br from-[#6b8d26] to-[#7ca933] hover:from-[#7ca933] hover:to-[#99CC33] text-[#e5eed2] px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-md text-sm sm:text-base md:text-lg uppercase tracking-wider font-semibold flex items-center gap-2 flex-shrink-0 transition-all duration-300 w-full sm:w-auto justify-center shadow-lg hover:shadow-xl hover:shadow-[#99CC33]/20 border border-[#ACC578]/30"
                    >
                      {copied ? (
                        <>
                          <motion.span 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="inline"
                          >
                            COPIED
                          </motion.span>
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                          >
                            <Check size={18} className="sm:size-5" />
                          </motion.div>
                        </>
                      ) : (
                        <>
                          <span className="inline">COPY</span>
                          <Copy size={18} className="sm:size-5" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Buy Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="relative"
            >
              <motion.a
                href="#"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  filter: "brightness(1.1) drop-shadow(0 10px 20px rgba(153, 204, 51, 0.3))"
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-block relative group"
              >
                <img 
                  src="/$NOMADNOMICSBUTTON.png" 
                  alt="Buy $NOMAD" 
                  className="cursor-pointer w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg transform transition-all duration-300 group-hover:drop-shadow-2xl"
                />
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-[#99CC33] rounded-lg blur-xl opacity-0 group-hover:opacity-30 -z-10 transition-opacity duration-300 scale-110"></div>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}