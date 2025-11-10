"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SocialIcons from "./SocialIcons";

export default function NomadBadge() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeSlideVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center justify-center bg-[#E5EED2] pb-4 bg-contain"
      style={{
        backgroundImage: "url('/nomadbadge_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for slight tint */}
      <div className="absolute inset-0 bg-[#E5EED2]/40"></div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Badge - Scroll fade in + floating animation */}
        <motion.div
          variants={fadeSlideVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, -2, 2, -2, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src="/website 5.png"
              alt="Nomad Badge"
              className="md:h-120 object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Social Icons - Smooth scroll in */}
        <motion.div
          variants={fadeSlideVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.4 }}
          className="mt-4"
        >
          <SocialIcons />
        </motion.div>

        {/* CTA Button - Smooth scroll in */}
        <motion.div
          variants={fadeSlideVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.7 }}
          className="flex justify-center mt-4"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/buynomadbtn.png" alt="Buy Nomad" className="h-16" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
