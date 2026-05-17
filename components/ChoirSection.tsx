"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ChoirSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Character reveal for the title
      const chars = document.querySelectorAll(".choir-char");
      gsap.from(chars, {
        y: 50,
        opacity: 0,
        rotateX: -90,
        stagger: 0.02,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".choir-title-wrap",
          start: "top 80%",
        },
      });

      // Image Reveal and Parallax
      gsap.fromTo(
        imageRef.current,
        { scale: 1.2, clipPath: "inset(0 100% 0 0)" },
        {
          scale: 1,
          clipPath: "inset(0 0% 0 0)",
          duration: 2,
          ease: "expo.inOut",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 70%",
          },
        }
      );

      gsap.to(".choir-bg-img", {
        y: "15%",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });

      // Cards stagger reveal
      gsap.from(".choir-card", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".choir-cards-wrapper",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const splitText = (text: string) => {
    return text.split("").map((char, i) => (
      <span key={i} className="choir-char inline-block whitespace-pre">
        {char}
      </span>
    ));
  };

  return (
    <section ref={sectionRef} className="py-40 bg-[#020617] relative overflow-hidden">

      {/* Cinematic Background Typography */}
      <div className="absolute top-[15%] right-[-5%] w-full text-right z-0 pointer-events-none select-none opacity-[0.05]">
        <h2 className="text-[25vw] font-bold text-outline uppercase tracking-tighter leading-none">
          GLORY
        </h2>
      </div>

      <div className="relative z-10 w-full px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 max-w-7xl mx-auto">
          <div className="choir-title-wrap">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-primary-500"></div>
              <span className="text-primary-500 font-bold uppercase tracking-[0.3em] text-xs">
                The Choir
              </span>
            </div>
            <h2 className="text-6xl md:text-9xl font-bold text-white tracking-tighter leading-[0.9]">
              <div>{splitText("Praise")}</div>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-white italic">
                {splitText("Warriors.")}
              </div>
            </h2>
          </div>

          <p className="text-slate-400 max-w-sm text-lg regular font-light mt-10 md:mt-0 leading-relaxed border-l border-white/10 pl-8">
            Experience the divine presence through soul-stirring worship. Let every melody lift your spirit and every harmony bring you closer to Him.
          </p>
        </div>

        {/* Large Cinematic Image with Reveal */}
        <div
          ref={imageRef}
          className="relative w-full aspect-[21/9] overflow-hidden group border border-white/5"
        >
          <Image
            src="https://res.cloudinary.com/samueladexcloudinary/image/upload/v1778071041/Gemini_Generated_Image_neigq6neigq6neig_v5gp5o.png"
            alt="Praise Center Choir"
            fill
            className="choir-bg-img object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center text-white border border-white/20 transition-all duration-700 hover:bg-primary-500 hover:scale-110 hover:shadow-[0_0_50px_rgba(14,165,233,0.5)]">
              <Play fill="currentColor" size={32} className="ml-1" />
            </button>
          </div>
        </div>

        {/* Info Cards */}
        <div className="choir-cards-wrapper grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-20">
          {[
            { title: "Worship Team", desc: "Leading the congregation into deep realms of spiritual encounter.", icon: "01" },
            { title: "Join The Choir", desc: "Gifted in singing or playing? We welcome you.", icon: "02" },
            { title: "Latest Album", desc: "Stream our live recording 'Glory To Glory'.", icon: "03" }
          ].map((card, idx) => (
            <div key={idx} className="choir-card group p-12 bg-white/[0.02] border border-white/5 hover:border-primary-500/30 transition-all duration-500">
              <span className="text-primary-500/50 font-bold text-4xl mb-6 block group-hover:text-primary-500 transition-colors">{card.icon}</span>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{card.title}</h3>
              <p className="text-slate-400 regular font-light mb-8">{card.desc}</p>
              <div className="w-0 group-hover:w-full h-[1px] bg-primary-500 transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

