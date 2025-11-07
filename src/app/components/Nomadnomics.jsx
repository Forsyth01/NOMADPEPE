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
    <section className=" bg-[#0E2422] relative overflow-hidden py-8 px-4 md:px-6">
      {/* Decorative clouds */}
      <div className="absolute top-0 right-0 w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56">
        <img src="/cloud.png" alt="" className="relative right-8 object-cover" />
      </div>
      <div className="absolute bottom-0 right-0 w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56">
        <img src="/cloud2.png" alt="" className="relative right-10 object-cover" />
      </div>

      <div className="container mx-auto max-w-7xl lucky h-full flex items-center ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full">
          {/* Left side - Pepe Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-md"
          >
            <div className="relative">
              <div className="relative rounded-full overflow-hidden z-10">
                <img src="/nomadnomics.png" alt="Nomad Pepe" className="m-auto w-full h-auto" />
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
            <div className="my-3 sm:my-4 md:mt-10">
              <img src="/$NOMADNOMICS.png" alt="Nomadnomics" className="max-w-full h-12 sm:h-14 md:h-16" />
            </div>

            {/* Total Supply */}
            <div className="mb-3 sm:mb-4 md:mb-5 lg:mb-6">
              <h3 className="text-[#Acc578] text-base sm:text-lg md:text-xl mb-1 sm:mb-2 uppercase">
                TOTAL SUPPLY
              </h3>
              <p className="text-[#e5eed2] text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                1,000,000,000,000
              </p>
            </div>

            {/* Buy/Sell Tax */}
            <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8 flex items-center gap-2 sm:gap-3">
              <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-[#9fd235] rounded-full flex flex-col justify-center flex-shrink-0">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-[#6b8d26] rounded-full m-auto"></div>
              </div>
              <p className="text-[#e5eed2] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                BUY/SELL TAX: 0%
              </p>
            </div>

            {/* Contract Address */}
            <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8">
              <h3 className="lucky text-[#ffffff] text-base sm:text-lg md:text-xl mb-2 sm:mb-3 uppercase tracking-wide">
                CONTRACT ADDRESS
              </h3>

              {/* 3D Duplicate Background Container */}
              <div className="relative w-full max-w-2xl">
                {/* Duplicate layer behind for offset shadow */}
     <div className="w-[85%]">
                {/* Main visible box */}
                <div className="bg-[#1a3a35]/50 border-2 border-[#ACC578] rounded-xl p-2 sm:p-3 md:p-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 w-full">
                  <p className="text-[#e5eed2] lucky text- break-all flex-1 w-full">
                    {contractAddress}
                  </p>

                  {/* Button with duplicate background */}
                  <div className="relative w-full sm:w-auto flex justify-center items-center">
                    {/* Duplicate shadow background */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[#a9c577] rounded-md translate-x-1 translate-y-1 -z-10"
                    ></div>

                    {/* Foreground button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleCopy}
                      className="relative bg-[#6b8d26] hover:bg-[#7ca933] text-[#e5eed2] px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm md:text-base uppercase tracking-wide flex items-center gap-1 sm:gap-2 flex-shrink-0 transition-colors w-full sm:w-auto justify-center"
                    >
                      {copied ? (
                        <>
                          <span className="inline">COPIED</span>
                          <Check size={16} />
                        </>
                      ) : (
                        <>
                          <span className="inline">COPY</span>
                          <Copy size={16} />
                        </>
                      )}
                    </motion.button>
                  </div>
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
              <img src="/$NOMADNOMICSBUTTON.png" alt="Buy Nomad" className="cursor-pointer h-10 sm:h-12 md:h-14" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}