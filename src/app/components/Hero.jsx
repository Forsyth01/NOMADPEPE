"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SocialIcons from "./SocialIcons";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Mobile Background */}
      <div
        className="block md:hidden absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/assets/Frame 70.png")',
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backgroundBlendMode: "multiply",
          opacity: 0.8,
        }}
      ></div>
      <div
        className="block md:hidden absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/assets/herobg2.png")',
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backgroundBlendMode: "multiply",
          opacity: 0.8,
        }}
      ></div>
      {/* Desktop Background */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/assets/herobg2.png")',
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
          opacity: 0.8,
        }}
      ></div>

      {/* Centered Content */}
      <div className="relative z-10 w-full px-6 py-12 h-full">
        <div className="max-w-7xl mx-auto h-full">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 h-full">
            {/* Left Content */}
            <motion.div
              className="relative z-20 text-center lg:text-left lg:left-10 pt-4 lg:pt-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
                {/* Logo */}
                <div className="flex justify-center lg:justify-start">
                  <Image
                    src="/assets/logo.png"
                    alt="Logo"
                    width={900}
                    height={300}
                    quality={90}
                    className="h-auto w-[353px] sm:w-[250px] md:w-[450px] lg:w-[500px] xl:w-[650px]"
                  />
                </div>
              <div className="relative bottom-10 ">
                <div className="">
                  {/* Tagline */}
                  <p className="lucky pt-2 lg:pt-0 text-lg text-center sm:text-2xl md:text-3xl lg:text-3xl xl:text-[35px] rotate-[-2deg]">
                    Freedom has a currency.
                  </p>
                </div>

                {/* Buy Button */}
                <div className="mt-8 hidden lg:block">
                  <motion.a
                    href="#howtobuy"
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.95 }}
                    className=""
                  >
                    <Image
                      src="/buynomad.png"
                      alt="Buy Nomad"
                      width={200}
                      height={80}
                      className="m-auto h-20 "
                    />
                  </motion.a>
                </div>

                {/* Social Icons */}
                <div className="mt-6 hidden lg:block">
                  <SocialIcons />
                </div>
              </div>
            </motion.div>
            {/* Right Image */}
            <motion.div
              className="relative w-[500px] h-[500px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] 
              lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] mt-auto lg:mt-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="/assets/hero.png"
                alt="Nomad Pepe"
                fill
                className="object-contain"
                priority
                quality={90}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}