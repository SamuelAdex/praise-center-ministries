"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonies() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testimony-card",
        { opacity: 0, scale: 0.95, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: { trigger: ".testimony-grid", start: "top 80%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const testimonies = [
    {
      name: "Sarah Jenkins",
      text: "Coming to Praise Center completely turned my life around. The warmth of the community and the powerful teachings helped me find my true purpose.",
      img: "/images/testimony_person_1_1777830675090.png"
    },
    {
      name: "Michael Roberts",
      text: "I walked in broken, but through the continuous prayer and support of the pastoral team, my family was restored. Truly a place of healing.",
      img: null // fallback initials
    },
    {
      name: "Emily Davis",
      text: "The worship here is incredible. Every service feels like a direct encounter with God. I'm so blessed to call this my home church.",
      img: null // fallback initials
    }
  ];

  return (
    <section ref={sectionRef} id="testimonies" className="py-32 bg-[#020617] text-white relative overflow-hidden">
      {/* Massive Background Typography */}
      <div className="absolute top-[20%] right-0 w-full text-right z-0 pointer-events-none select-none overflow-hidden opacity-20 pr-10">
        <h2 className="text-[18vw] font-bold text-outline uppercase tracking-tighter leading-none mix-blend-overlay">
          Grace
        </h2>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none z-0">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600 rounded-full blur-[150px] opacity-20"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-400 rounded-full blur-[150px] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 testimony-header">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-primary-500"></div>
              <span className="text-primary-500 font-bold uppercase tracking-[0.2em] text-sm">
                Stories of Grace
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1]">
              Changed <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-300 italic">Lives.</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-lg regular font-light mt-8 md:mt-0">
            Read the incredible stories of transformation, healing, and divine encounters from our beloved church family.
          </p>
        </div>

        <div className="testimony-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonies.map((t, i) => (
            <div key={i} className="testimony-card bg-[#020617]/80 backdrop-blur-2xl p-10 border border-white/10 hover:border-primary-500/50 transition-all duration-500 group relative">
              <Quote className="absolute top-8 right-8 text-primary-500/10 group-hover:text-primary-500/20 transition-colors duration-500" size={80} />
              
              <div className="relative z-10">
                <p className="text-slate-300 text-xl mb-12 leading-relaxed font-light regular italic min-h-[120px]">
                  "{t.text}"
                </p>
                
                <div className="flex items-center gap-6 mt-auto">
                  {t.img ? (
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border border-primary-500/30 group-hover:border-primary-500 transition-colors duration-500 filter grayscale group-hover:grayscale-0">
                      <Image src={t.img} alt={t.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-primary-900/50 flex items-center justify-center border border-primary-500/30 text-xl font-bold text-primary-400 group-hover:border-primary-500 transition-colors duration-500">
                      {t.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h4 className="font-bold text-lg text-white tracking-wide">{t.name}</h4>
                    <span className="text-xs text-primary-400 semibold uppercase tracking-[0.2em]">Church Member</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
