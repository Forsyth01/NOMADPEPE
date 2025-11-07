"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SocialIcons from "./SocialIcons";

export default function Hero() {
  return (
    <section
      className=""
      style={{
        backgroundImage: 'url("/assets/herobg.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "full",
      }}
    >
      <div className="z-10 items-center">
        <div className="w-full text-center">
          <div className="flex justify-center items-center lg:h-screen ">
            {/* FIXED FLEX CONTAINER */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8 lg:gap-0">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="lg:pl-12"
              >
                <div>
                  {/* Logo */}
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                  >
                    <Image
                      src="/assets/logo.png"
                      alt="Logo"
                      width={900}
                      height={300}
                      quality={90}
                      className="relative lg:top-12"
                      priority
                    />
                  </motion.div>

                  {/* Tagline */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    <p className="relative lg:bottom-4 xl:bottom:6 lucky text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] px-4 sm:px-8 lg:px-0">
                      Hop On. Explore the Chain.
                    </p>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                >
                  <a href="#" className="">
                    <img src="/buynomad.png" alt="" className="m-auto h-20" />
                  </a>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.9 }}
                  className="py-3 sm:py-4 mt-3 sm:mt-4 lg:mt-0"
                >
                  <SocialIcons />
                </motion.div>
              </motion.div>

              {/* Right Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                className="relative h-120 w-94  sm:w-80 md:w-[20rem] lg:w-[50rem] xl:w-[48rem] 2xl:w-[50rem]  sm:h-80 md:h-[28rem] lg:h-[36rem] xl:h-[45rem] 2xl:h-[50rem] mx-auto"
              >
                <Image
                  src="/assets/image2.png"
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
      </div>
    </section>
  );
}
