"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function FamilySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".family-content",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      gsap.fromTo(
        ".family-img-wrap",
        { opacity: 0, scale: 0.8, rotation: -5 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.2,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-[#020617] overflow-hidden relative min-h-screen flex items-center">
      {/* Massive Background Typography */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-full text-right z-0 pointer-events-none select-none overflow-hidden opacity-20 pr-10">
        <h2 className="text-[20vw] font-bold text-outline uppercase tracking-tighter leading-none mix-blend-overlay">
          Values
        </h2>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">

          <div className="w-full lg:w-1/2 family-content">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-primary-500"></div>
              <span className="text-primary-500 font-bold uppercase tracking-[0.2em] text-sm">
                Family & Community
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold text-white mb-10 leading-[1.1] tracking-tighter">
              Rooted in Love, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-300 italic">Growing Together.</span>
            </h2>

            <div className="text-slate-400 text-xl mb-12 leading-relaxed regular font-light space-y-6">
              <p>
                At Praise Center, we believe that the family is the foundation of a strong church and a healthy society. Pastor Johnathan and his beautiful family exemplify these core values through their unwavering commitment to each other and the congregation.
              </p>
              <p>
                We provide resources, counseling, and fellowship programs designed to strengthen marriages, empower parents, and guide children in the way of the Lord. You are not just joining a church; you are becoming part of a loving family.
              </p>
            </div>

            <ul className="space-y-6 mb-8">
              {['Marriage Enrichment Seminars', 'Youth & Kids Ministry', 'Family Counseling Services'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-6 text-white semibold text-lg tracking-wide">
                  <div className="flex items-center justify-center w-8 h-8 border border-primary-500/50 rounded-full text-primary-400">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-1/2 family-img-wrap relative">
            <div className="relative aspect-[4/5] w-full max-w-md ml-auto rounded-none overflow-hidden shadow-2xl z-10 border-l border-white/10">
              <div className="absolute inset-0 bg-primary-500/20 translate-x-4 -translate-y-4 md:translate-x-8 md:-translate-y-8 z-0 mix-blend-multiply"></div>

              <Image
                src="https://res.cloudinary.com/samueladexcloudinary/image/upload/v1778073668/Gemini_Generated_Image_8o6e3y8o6e3y8o6e_lwsakw.png"
                alt="Founder's Family"
                fill
                className="object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80"></div>
            </div>

            {/* Floating minimal badge */}
            <div className="absolute -bottom-10 right-10 lg:-left-10 z-20 bg-[#020617] border border-primary-500/30 p-8 flex items-center gap-6 shadow-2xl">
              <div className="text-5xl font-bold text-primary-500">40+</div>
              <div className="text-sm font-semibold text-white uppercase tracking-[0.2em] leading-loose">
                Years of<br />Impact
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
