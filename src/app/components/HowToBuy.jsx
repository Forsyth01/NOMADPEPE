"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HowToBuy() {
  return (
    <div
      className="pb-5"
      style={{
        background: `linear-gradient(rgba(69,102,49,0.5), rgba(69,102,49,0.8)), url('/BG htb.png') center/cover no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        
        alignItems: "center",
        justifyContent: "center",
      }}
    >
    
      <section className="lg:grid grid-cols-2 pb-6 ">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hidden lg:flex  flex-col justify-end"
        >
          <div className="">
            <Image
              src="/nomad_beach.png"
              alt="Nomad Beach"
              width={500}
            height={500}
            className="object-contain w-[300px] sm:w-[400px] lg:w-[600px] xl:w-[880px] relative"
              quality={100}
              priority
            />
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex flex-col items-center justify-center text-center "
        >
          <Image
            src="/howtobuy.png"
            alt="How to Buy"
            width={500}
            height={500}
            className="object-contain w-[437px] h-[507px sm:w-[400px] lg:w-[600px] xl:w-[880px] lg:relative right-20"
            quality={90}
          />
        </motion.div>
      </section>
      {/* Tutorial Button */}
      <motion.a
        href="#"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className=""
      >
        <Image
          src="/Btn htb.png"
          alt="Watch Tutorial"
          width={220}
          height={80}
          className="h-[48.1112060546875px] md:h-20 lg:h-[120px] w-[351px] lg:w-[800px] m-auto "
          quality={90}
        />
      </motion.a>
    </div>
  );
}
