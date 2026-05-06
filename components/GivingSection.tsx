"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, Globe2, Users2, Building2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function GivingSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const numbers = gsap.utils.toArray(".count-up");
      
      numbers.forEach((num: any) => {
        const targetValue = parseInt(num.getAttribute("data-target") || "0", 10);
        gsap.to(num, {
          innerHTML: targetValue,
          duration: 3,
          ease: "power2.out",
          snap: { innerHTML: 1 },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
          onUpdate: function() {
            num.innerHTML = Math.ceil(this.targets()[0].innerHTML).toLocaleString() + (num.getAttribute("data-suffix") || "");
          }
        });
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: Globe2, label: "Nations Reached", value: 12, suffix: "+" },
    { icon: Users2, label: "Lives Impacted", value: 50000, suffix: "+" },
    { icon: Building2, label: "Campuses", value: 4, suffix: "" },
    { icon: Heart, label: "Outreach Programs", value: 150, suffix: "+" }
  ];

  return (
    <section ref={sectionRef} className="py-40 bg-[#020617] relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTIwIDBjMTEuMDQ2IDAgMjAgOC45NTQgMjAgMjBTMzEuMDQ2IDQwIDIwIDQwIDAgMzEuMDQ2IDAgMjAgOC45NTQgMCAyMCAweiIgZmlsbD0icmdiYSgzLDg2LDE0OCwwLjAyKSIvPgo8L3N2Zz4=')] opacity-20 z-0"></div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-primary-500/10 rounded-full blur-[200px] z-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-primary-500"></div>
              <span className="text-primary-500 font-bold uppercase tracking-[0.2em] text-sm">
                Partner With Us
              </span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[1.1] mb-10">
              Give & <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-300 italic">Impact.</span>
            </h2>
            
            <p className="text-slate-400 text-xl font-light leading-relaxed max-w-lg mb-12">
              Your generosity fuels our mission to spread love, hope, and the teachings of Christ globally. Every seed sown changes a life.
            </p>

            <a href="#" className="relative inline-flex group items-center justify-center">
              <div className="absolute inset-0 w-full h-full rounded-full bg-primary-500 blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white text-[#020617] px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-sm hover:scale-105 transition-transform duration-300">
                Give Online Now
              </div>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="bg-[#020617]/50 backdrop-blur-md border border-white/10 p-10 flex flex-col justify-center items-center text-center group hover:border-primary-500/50 transition-colors">
                  <Icon className="text-primary-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                  <div className="text-5xl font-bold text-white mb-2 tracking-tighter flex items-center justify-center">
                    <span className="count-up" data-target={stat.value} data-suffix={stat.suffix}>0</span>
                  </div>
                  <p className="text-slate-400 uppercase tracking-widest text-xs font-bold">{stat.label}</p>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
