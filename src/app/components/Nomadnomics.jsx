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
      {/* Decorative clouds */}
      <div className="absolute top-0 right-0 w-32 sm:w-40 md:w-48 lg:w-64 xl:w-80">
        <img src="/cloud.png" alt="" className="relative right-10 object-cover" />
      </div>
      <div className="absolute bottom-0 right-0 w-32 sm:w-40 md:w-48 lg:w-64 xl:w-80">
        <img src="/cloud2.png" alt="" className="relative right-14 object-cover" />
      </div>

      <div className="container mx-auto max-w-7xl lucky py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Left side - Pepe Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg"
          >
            <div className="relative">
              {/* <div className="absolute inset-0 bg-[#99CC33] rounded-full blur-3xl opacity-50 scale-85"></div>
              <div className="absolute inset-0 bg-[#81af33] rounded-full blur-2xl opacity-40 scale-85"></div> */}
              <div className="relative rounded-full overflow-hidden z-10">
                <img src="/nomadnomics.png" alt="" className=" m-auto" />
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full"
          >
            {/* Title */}
            <div className="my-4 sm:my-5 md:my-6">
              <img src="/$NOMADNOMICS.png" alt="" className="max-w-full h-16" />
            </div>

            {/* Total Supply */}
            <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8">
              <h3 className="text-[#Acc578] text-lg sm:text-xl md:text-2xl mb-2 uppercase">
                TOTAL SUPPLY
              </h3>
              <p className="text-[#e5eed2] text-2xl sm:text-3xl md:text-4xl lg:text-5xl break-words">
                1,000,000,000,000
              </p>
            </div>

            {/* Buy/Sell Tax */}
            <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 flex items-center gap-2 sm:gap-3">
              <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-[#9fd235] rounded-full flex flex-col justify-center flex-shrink-0">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-5 md:h-5 bg-[#6b8d26] rounded-full m-auto"></div>
              </div>
              <p className="text-[#e5eed2] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                BUY/SELL TAX: 0%
              </p>
            </div>

            {/* Contract Address */}
            <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
              <h3 className="lucky text-[#ffffff] text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 uppercase tracking-wide">
                CONTRACT ADDRESS
              </h3>

              {/* === 3D Duplicate Background Container === */}
              <div className="relative w-full max-w-3xl">
                {/* Duplicate layer behind for offset shadow */}
                <div className="absolute inset-0 translate-x-2 translate-y-2 bg-[#a9c577] rounded-2xl border-2 border-[#a9c577] -z-10"></div>

                {/* Main visible box */}
                <div className="bg-[#1a3a35]/50 border-2 border-[#ACC578] rounded-2xl p-3 sm:p-4 md:p-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                  <p className="text-[#e5eed2] lucky text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl  break-all flex-1 w-full">
                    {contractAddress}
                  </p>

                  {/* Button with duplicate background */}
                  <div className="relative w-full sm:w-auto flex justify-center items-center">
                    {/* Duplicate shadow background */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[#a9c577] rounded-md translate-x-1.5 translate-y-1.5 -z-10"
                    ></div>

                    {/* Foreground button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleCopy}
                      className="relative bg-[#6b8d26] hover:bg-[#7ca933] text-[#e5eed2] px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-md text-sm sm:text-base md:text-lg uppercase tracking-wide flex items-center gap-2 flex-shrink-0 transition-colors w-full sm:w-auto justify-center"
                    >
                      {copied ? (
                        <>
                          <span className="inline">COPIED</span>
                          <Check size={18} />
                        </>
                      ) : (
                        <>
                          <span className="inline">COPY</span>
                          <Copy size={18} />
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>

            {/* Buy Button */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <img src="/$NOMADNOMICSBUTTON.png" alt="" className="cursor-pointer" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
