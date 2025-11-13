"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function NomadYachtParties() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="yacht-parties"
      ref={ref}
      className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{ backgroundColor: "#1a1f1a" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div
          className="absolute top-1/4 -left-10 w-72 h-72 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(34, 197, 94, 0.15) 0%, transparent 70%)",
          }}
        ></div>
        <div
          className="absolute bottom-1/4 -right-10 w-96 h-96 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)",
          }}
        ></div>
      </div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full border border-green-500/30 bg-green-500/10">
            <span className="text-green-400 text-sm uppercase tracking-wider font-normal">
              Exclusive Events
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 font-normal">
            NOMAD <span className="text-green-400">Yacht Parties</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-normal">
            Where Freedom Meets Connection
          </p>
        </motion.div>

        {/* Hero Video Section - Full Width */}
        <motion.div variants={scaleVariants} className="relative mb-12">
          <div className="relative rounded-3xl overflow-hidden border-2 border-green-500/20 shadow-2xl">
            <div className="w-full h-[400px] bg-black">
              <iframe
                src="https://player.cloudinary.com/embed/?cloud_name=bukkablogimages&public_id=NOMAD_Yacht_Parties_ubq9z9&profile=cld-default&controls=true&logo=false&show_logo=false&bigPlayButton=true&colors[base]=rgba(34,197,94,0.8)&colors[accent]=rgba(34,197,94,1)&floatingWhenNotVisible=false&hideContextMenu=true"
                className="w-full h-full"
                allow="autoplay; fullscreen; encrypted-media"
                allowFullScreen
                title="NOMAD Yacht Parties Video"
                loading="lazy"
                style={{ 
                  background: "transparent", 
                  border: "none"
                }}
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* Asymmetric Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-6 mb-20 mt-16">
          {/* Large Feature Card */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 rounded-3xl p-10 border-2 border-green-500/20 h-full flex flex-col justify-between hover:border-green-500/40 transition-all group">
              <div>
                <h3 className="text-3xl text-white mb-4 font-normal">
                  An Unforgettable Experience
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg font-normal mb-6">
                  Join us for an unforgettable series of exclusive yacht parties bringing together the world's most adventurous creators, entrepreneurs, and digital nomads.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg font-normal">
                  We're kicking things off in Thailand, with regular events set across the islands that blend networking, music, and travel culture into one unique experience.
                </p>
              </div>
              <div className="flex flex-wrap lg:gap-3 gap-2 mt-6">
                <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30 font-normal">
                  Thailand
                </span>
                <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30 font-normal">
                  Miami
                </span>
                <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30 font-normal">
                  Global Network
                </span>
              </div>
            </div>
          </motion.div>

          {/* Stacked Cards */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-black/40 rounded-2xl p-8 border border-green-500/10 hover:border-green-500/30 transition-all backdrop-blur group">
          
              <p className="text-gray-300 font-normal">
                These gatherings aren't just parties; they're opportunities to connect with like-minded explorers, collaborate on new ventures, and celebrate the nomadic lifestyle surrounded by crystal-clear waters and incredible energy.
              </p>
            </div>

            <div className="bg-black/40 rounded-2xl p-8 border border-green-500/10 hover:border-green-500/30 transition-all backdrop-blur group">
          
              <p className="text-gray-300 font-normal">
             Whether you’re a content creator, startup founder, investor, or someone living life on their own terms, the NOMAD Yacht Parties are your invitation to the world’s most vibrant travel network.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Banner */}
        <motion.div variants={itemVariants} className="">
          <div className="bg-black/40 rounded-3xl p-8 border border-green-500/10 backdrop-blur">
            <div className="">
              <h1 className="xl:text-3xl text-xl text-center font-normal text-white">
                Next stop: <span className="text-green-400">Miami</span>, with more global destinations to be announced soon. Stay tuned for RSVP links and exclusive access.
              </h1>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}