// app/page.tsx
import Image from "next/image";
import { motion } from "framer-motion";

export default function Expedition() {
  return (
    <div
      className="min-h-screen bg-[#456631] flex items-center justify-center p-6"
      style={{
        background: `linear-gradient(rgba(69,102,49,0.6), rgba(69,102,49,0.8)), url('/nomad_expedition_frame_bg.png') center/cover no-repeat`,
        backgroundSize: "cover", // ← this = object-cover
        backgroundPosition: "center", // ← centered
        backgroundRepeat: "no-repeat", // ← no tiling
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <div className="absolute inset-0 bg-[#E5EED2]/50"></div> */}
      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-7xl w-full overflow-hidden "
      >
        <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12">
          {/* Left: Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex flex-col justify-center space-y-6 text-[#E5EED2]"
          >
            <h1 className="text-5xl ">
              CASH THE HOP! START <br />
              THE EXPEDITION!
            </h1>

            <p className="text-xl md:text-xl text-[#E5EED2] lucky">
              Join the most epic tap-to-earn adventure in the crypto space.{" "}
              <span className="text-[#E5EED2]">$NOMAD</span> is your ticket to
              the real world of decentralized fun!
            </p>

            <ul className="space-y-4 text-xl lucky">
              {[
                "Be part of a rapidly growing community of $NOMAD EXPLORERS (currently 500K+).",
                "Unlock ancient treasures with daily quests & traveler challenges.",
                "Fuel your journey and claim massive weekly reward drops!",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.2 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-2xl text-[#E5EED2]">■</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 w-fit"
            >
              <div className="relative group">
                <div className="">
                  <img
                    src="/launchthenomad.png"
                    alt=""
                    className="h-20 object-cover"
                  />
                </div>
              </div>
            </motion.button>
          </motion.div>

          {/* Right: Image Frame */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="md:relative"
          >
            {/* Golden Frame */}
            <div className="absolute inset-0 -m-4">
              <Image
                src="/nomad_expedition_frame.png" // ← Your golden frame
                alt="Golden Frame"
                fill
                className="object-conver"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
