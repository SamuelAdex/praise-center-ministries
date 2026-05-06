"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function SermonsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(videoRef.current,
        { scale: 0.8, opacity: 0.5, borderRadius: "50%" },
        {
          scale: 1,
          opacity: 1,
          borderRadius: "0%",
          duration: 1.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "top top",
            scrub: true
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#020617] relative min-h-[150vh] flex flex-col">
      <div className="h-[30vh] w-full flex items-center justify-center text-center px-6">
        <div>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-primary-500"></div>
            <span className="text-primary-500 font-bold uppercase tracking-[0.2em] text-sm">
              Latest Message
            </span>
            <div className="h-[1px] w-12 bg-primary-500"></div>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[1.1]">
            Watch <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-300 italic">Online.</span>
          </h2>
        </div>
      </div>

      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-10 p-0 md:p-10">
        <div ref={videoRef} className="relative w-full h-full max-w-screen-2xl max-h-[85vh] overflow-hidden shadow-[0_0_100px_rgba(1,125,208,0.2)] bg-black group border border-white/5">
          <Image
            src="https://res.cloudinary.com/samueladexcloudinary/image/upload/v1778070662/Gemini_Generated_Image_ddisucddisucddis_fmjxzn.png"
            alt="Latest Sermon"
            fill
            className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-1000 scale-105 group-hover:scale-100 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
            {/* Pulsing Play Button */}
            <div className="relative mb-12">
              <div className="absolute inset-0 bg-primary-500 rounded-full animate-ping opacity-20"></div>
              <div className="absolute -inset-4 bg-primary-500 rounded-full animate-pulse opacity-10"></div>
              <button className="relative w-28 h-28 glass-panel rounded-full flex items-center justify-center text-white hover:bg-primary-500 hover:scale-110 transition-all duration-500 group/play">
                <Play fill="currentColor" size={40} className="ml-2 group-hover/play:scale-110 transition-transform" />
              </button>
            </div>

            <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4 text-center px-4">
              The Power of Unseen Faith
            </h3>
            <p className="text-primary-400 font-bold uppercase tracking-[0.2em] text-sm">
              Bishop Stafford Sibige Nwaogu • Sunday Service
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
