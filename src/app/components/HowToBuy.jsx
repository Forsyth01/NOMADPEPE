"use client";
import { motion } from "framer-motion";

export default function HowToBuy() {
  const steps = [
    {
      number: "1",
      title: "DOWNLOAD PHANTOM WALLET",
      description:
        "Download and install the Phantom Wallet either from the app store on your phone or as a browser extension for desktop.",
      button: "GET PHANTOM WALLET",
    },
    {
      number: "2",
      title: "BUY SOME SOLANA",
      description:
        "Purchase $SOL from an exchange or bridge $SOL and send it to your Phantom wallet",
      button: null,
    },
    {
      number: "3",
      title: "BUY $NOMAD",
      description:
        "Go to Decentralized Exchanges (DEXs): Raydium, and paste the $NOMAD contract address listed on this website to swap your SOL for NOMAD",
      button: "BUY NOMAD",
    },
    {
      number: "4",
      title: "BUY $NOMAD",
      description:
        "Go to Decentralized Exchanges (DEXs): Raydium, and paste the $NOMAD contract address listed on this website to swap your SOL for NOMAD",
      button: null,
    },
  ];

  return (
    <section
      className="min-h-screen bg-[#4f7a36] relative overflow-hidden py-12 md:py-20 px-4 md:px-6"
      style={{
         background: `linear-gradient(rgba(69,102,49,0.5), rgba(69,102,49,0.8)), url('/BG htb.png') center/cover no-repeat`,
        backgroundSize: "cover", //
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat", // ← no tiling
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
          {/* Left side - Pepe Character */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-auto lg:sticky lg:top-24 flex justify-center lg:justify-start"
          >
            <div className="relative w-64 md:w-80 lg:w-100">
              <div className="relative">
                <img src="/nomad_beach.png" alt="" className="absolute" />
              </div>
            </div>
          </motion.div>

          {/* Right side - Clipboard with Steps */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-3xl mx-auto lg:mx-0"
          >
            <div className="relative">
              
              {/* Clipboard body */}
              <div
                className=""
                style={{
                  backgroundImage: "url('/rec htb.png')",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat", // ← no tiling
                  display: "flex",
                  // alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="space-y-6 md:space-y-8">
                  {steps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="flex gap-4 md:gap-6"
                    >
                      {/* Number badge */}
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 md:w-16 md:h-16 bg-[#B7D74B] rounded-2xl flex items-center justify-center border-4 border-[#2a3a2a] shadow-lg">
                          <span className="text-[#1a2a1a] text-3xl md:text-4xl lucky">
                            {step.number}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-white text-xl md:text-2xl lucky mb-2 uppercase tracking-tight">
                          {step.title}
                        </h3>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-3">
                          {step.description}
                        </p>
                        {step.button && (
                          <motion.a
                            href="#"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block bg-[#99CC33] hover:bg-[#8BC033] text-[#1a2a1a] px-4 md:px-6 py-2 md:py-2.5 rounded-lg lucky text-xs md:text-sm uppercase tracking-wide transition-colors shadow-md"
                          >
                            {step.button}
                          </motion.a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tutorial Video Button */}
          </motion.div>
        </div>
        <motion.a
          href="#"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className=""
        >
          <img src="/Btn htb.png" alt="" className="h-20 m-auto mt-10 " />
        </motion.a>
      </div>
    </section>
  );
}
