"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutFounder() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal animation
      gsap.fromTo(
        ".founder-img",
        { opacity: 0, scale: 0.9, x: -50 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".founder-img",
            start: "top 80%",
          },
        }
      );

      // Text stagger animation
      gsap.fromTo(
        ".founder-text",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".founder-content",
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-32 bg-white dark:bg-[#020617] overflow-hidden relative min-h-screen flex items-center">
      {/* Massive Background Typography */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full text-left z-0 pointer-events-none select-none overflow-hidden opacity-30 dark:opacity-20 pl-10">
        <h2 className="text-[20vw] font-bold text-outline-dark dark:text-outline uppercase tracking-tighter leading-none mix-blend-overlay">
          Founder
        </h2>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

          {/* Cinematic Image Side */}
          <div className="w-full lg:w-5/12 founder-img relative">
            <div className="relative aspect-[3/4] w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-primary-500/20 translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8 rounded-none z-0 mix-blend-multiply"></div>

              <div className="relative z-10 w-full h-full rounded-none overflow-hidden shadow-2xl clip-diagonal">
                <Image
                  src="https://res.cloudinary.com/samueladexcloudinary/image/upload/v1778070336/Gemini_Generated_Image_sr4ytlsr4ytlsr4y_mo5001.png"
                  alt="Bishop Stafford Sibige Nwaogu - Founder"
                  fill
                  className="object-cover scale-110"
                />
                <div className="absolute inset-0 bg-primary-900/20 mix-blend-overlay"></div>
              </div>
            </div>

            {/* Cinematic Floating Quote */}
            <div className="absolute -bottom-12 -right-4 md:-right-12 bg-[#020617] p-8 md:p-10 shadow-2xl max-w-sm z-20 border-l-4 border-primary-500">
              <p className="text-white regular text-lg leading-relaxed">
                "Faith is taking the first step even when you don't see the whole staircase."
              </p>
              <h4 className="mt-6 font-bold text-primary-400 text-sm uppercase tracking-widest">
                Bishop Stafford Sibige Nwaogu
              </h4>
            </div>
          </div>

          {/* Elevated Content Side */}
          <div className="w-full lg:w-7/12 founder-content mt-24 lg:mt-0 lg:pl-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-primary-500"></div>
              <span className="text-primary-500 font-bold uppercase tracking-[0.2em] text-sm">
                Meet Our Founder
              </span>
            </div>

            <h3 className="founder-text text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-10 leading-[1.1] tracking-tighter">
              A Visionary <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-300 italic">Heart for God.</span>
            </h3>

            <div className="founder-text space-y-6 text-slate-600 dark:text-slate-300 text-xl leading-relaxed regular font-light max-w-2xl">
              <p>
                Bishop Stafford Sibige Nwaogu founded the Praise Center Ministry over Four decades ago with a simple yet profound mission: to create a spiritual home where every soul is welcomed, nurtured, and empowered.
              </p>
              <p>
                {"Bishop Stafford Sibige Nwaogu, the Presiding Bishop of Praise Centre Ministries and his amenable wife, Evang. Mrs Augustina Ego Nwaogu, Int'l President of Women of Excellence of Praise Centre Church Int'l."}
              </p>
            </div>

            <div className="founder-text mt-12">
              <a href="#contact" className="group inline-flex items-center gap-4 px-10 py-5 bg-[#020617] dark:bg-white text-white dark:text-[#020617] rounded-none font-bold transition-all hover:bg-primary-500 hover:text-white uppercase tracking-widest text-sm">
                Connect with the Bishop
                <span className="w-8 h-[1px] bg-white dark:bg-[#020617] group-hover:bg-white transition-colors group-hover:w-12"></span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
