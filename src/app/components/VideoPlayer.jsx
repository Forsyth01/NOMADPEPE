"use client";
import { useState, useRef } from "react";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className=" flex items-center justify-center p-8" style={{ backgroundColor: '#242B24' }}>
      <div className="w-full max-w-5xl">
        {/* Video Container */}
        <div className="relative group">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500"></div>
          
          {/* Video wrapper */}
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
            <video
              ref={videoRef}
              className="w-full aspect-video object-contain bg-black"
              onClick={handlePlayPause}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              controls={false}
            >
              <source src="/Nomad - Final.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Custom Play/Pause Overlay */}
            {!isPlaying && (
              <div 
                onClick={handlePlayPause}
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center cursor-pointer transition-opacity duration-300"
              >
                <div className="relative">
                  {/* Pulse effect */}
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                  
                  {/* Play button */}
                  <div className="relative bg-white rounded-full p-8 shadow-2xl hover:scale-110 transition-transform duration-300">
                    <svg 
                      className="w-12 h-12 text-green-600 ml-1" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
              <div className="flex items-center gap-4">
                {/* Play/Pause Button */}
                <button
                  onClick={handlePlayPause}
                  className="text-white hover:text-green-400 transition-colors"
                >
                  {isPlaying ? (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                  ) : (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>

                {/* Title */}
                <div className="flex-1">
                  <h3 className="text-white text-lg">How to buy $NOMAD</h3>
                  <p className="text-gray-400 text-sm">Click to play</p>
                </div>

                {/* Fullscreen Button */}
                <button
                  onClick={() => videoRef.current?.requestFullscreen()}
                  className="text-white hover:text-green-400 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}