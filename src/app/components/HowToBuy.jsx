"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HowToBuy() {
  const steps = [
    {
      id: 1,
      title: "Download Phantom Wallet",
      text: "Download and install the Phantom Wallet either from the app store on your phone or as a browser extension for desktop.",
      button: "Get Phantom Wallet",
    },
    {
      id: 2,
      title: "Buy Some Solana",
      text: "Purchase $SOL from an exchange or bridge $SOL and send it to your Phantom wallet.",
    },
    {
      id: 3,
      title: "Buy $Nomad",
      text: "Go to Decentralized Exchanges (DEXs): Raydium, and paste the $NOMAD contract address listed on this website to swap your SOL for NOMAD.",
      button: "Buy Nomad",
    },
    {
      id: 4,
      title: "Buy $Nomad",
      text: "Go to Decentralized Exchanges (DEXs): Raydium, and paste the $NOMAD contract address listed on this website to swap your SOL for NOMAD.",
    },
  ];

  return (
    <section className="relative bg-[#4f7a36] py-20 overflow-hidden">
      <div className="flex justify-center items-center absolute">
        <img
          src="/BG htb.png"
          alt="Nomad Pepe"
          className="w-full h-full object-cover relative bottom-90 opacity-47 bg-blend-luminosity"
        />
      </div>
      {/* Section Title */}
      <div className="text-center mb-10">
        <div className="inline-block bg-[#A2C24C] border border-[#0F1C0F] text-[#0F1C0F] text-2xl md:text-3xl font-extrabold uppercase rounded-b-lg px-10 py-3 relative shadow-md">
          <span className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-12 h-4 bg-[#77982F] rounded-t-md"></span>
          How To Buy
        </div>
      </div>

      {/* Content */}
      <div className="relative  mx-auto rounded-[20px] p-10 grid md:grid-cols-3 gap-8">
        {/* Pepe Image */}
        <div className="flex justify-center items-center">
          <Image
            width={340}
            height={300}
            src="/nomad_beach.png"
            alt="Nomad Pepe"
            className="w-[280px] md:w-[340px] object-contain"
          />
        </div>

        {/* Steps */}

        <div className="flex flex-col space-y-6 p-10 col-span-2">
          <div className="">
            <img
              src="/Rectangle 2.png"
              alt="Nomad Pepe"
              className="w-
            full h-full object-cover relative bottom-90 opacity-47 bg-blend-luminosity"
            />
          </div>
          {steps.map((step) => (
            <motion.div
              key={step.id}
              whileHover={{ scale: 1.02, x: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex items-start space-x-4"
            >
              {/* Number Box */}
              <div className="relative">
                <span className="absolute inset-0 bg-[#6B8E23] rounded-[10%] translate-x-[4px] translate-y-[4px]"></span>
                <span className="relative bg-[#E5EED2] border border-[#0F1C0F] text-[#0F1C0F] font-extrabold text-2xl rounded-[10%] px-4 py-2 inline-block">
                  {step.id}
                </span>
              </div>

              {/* Text Block */}
              <div>
                <h3 className="lucky text-[#E5EED2] uppercase text-lg md:text-xl">
                  {step.title}
                </h3>
                <p className="text-[#CFE6B3] text-sm md:text-base leading-snug">
                  {step.text}
                </p>
                {step.button && (
                  <a
                    href="#"
                    className="mt-2 inline-block bg-[#A2C24C] text-[#0F1C0F] border border-[#0F1C0F] font-extrabold text-sm px-4 py-2 rounded-md shadow-[3px_3px_0_#0F1C0F] hover:translate-y-[2px] transition-transform"
                  >
                    {step.button}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tutorial Button */}
      <div className="mt-12 text-center">
        <a
          href="#"
          className="inline-block bg-[#E5EED2] border border-[#0F1C0F] text-[#0F1C0F] font-extrabold text-lg uppercase px-10 py-4 rounded-md shadow-[5px_5px_0_#77982F] hover:translate-y-[3px] transition-transform"
        >
          Watch Tutorial Video on How to Buy
        </a>
      </div>
    </section>
  );
}
