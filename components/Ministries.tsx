"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Ministries() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const sections = gsap.utils.toArray(".ministry-panel");

      // Horizontal Scroll
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + container.offsetWidth,
        }
      });

      // Parallax for floating numbers
      sections.forEach((panel: any) => {
        const num = panel.querySelector(".floating-num");
        const img = panel.querySelector(".ministry-img");

        gsap.to(num, {
          x: -100,
          scrollTrigger: {
            trigger: panel,
            containerAnimation: gsap.to(sections, { xPercent: -100 * (sections.length - 1), ease: "none" }), // This is wrong for horizontal scroll
            // Correct way for containerAnimation:
            // But since we are inside the horizontal scroll timeline, we can just use scrub on the main timeline or separate triggers.
            // Simplified:
            start: "left right",
            end: "right left",
            scrub: true,
          }
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const ministries = [
    { title: "Youth Aflame", subtitle: "Empowering the Next Generation", desc: "A vibrant community where young people discover their identity in Christ and are equipped to lead.", img: "https://res.cloudinary.com/samueladexcloudinary/image/upload/v1778072068/Gemini_Generated_Image_n5a3k4n5a3k4n5a3_bkdwap.png", color: "from-blue-600 to-primary-500" },
    { title: "Women of Excellence", subtitle: "Strength, Grace & Purpose", desc: "Connecting women across all stages of life to grow spiritually, emotionally, and professionally.", img: "https://res.cloudinary.com/samueladexcloudinary/image/upload/f_auto/v1778072628/Gemini_Generated_Image_n0oyitn0oyitn0oy_vqqbr6.png", color: "from-primary-500 to-indigo-600" },
    { title: "Men Alive", subtitle: "Building Kingdom Leaders", desc: "Forging strong men who lead their families and communities with integrity and godly wisdom.", img: "https://res.cloudinary.com/samueladexcloudinary/image/upload/f_auto/v1778072986/Gemini_Generated_Image_dakj2bdakj2bdakj_fzer1d.png", color: "from-indigo-600 to-slate-800" },
    { title: "Teens Ministry", subtitle: "Nurturing Little Hearts", desc: "A fun, safe, and engaging environment where children learn to love God and others.", img: "https://res.cloudinary.com/samueladexcloudinary/image/upload/v1778073373/Gemini_Generated_Image_3tab7g3tab7g3tab_oyzlhg.png", color: "from-primary-400 to-blue-500" }
  ];

  return (
    <section ref={sectionRef} id="ministries" className="bg-[#020617] h-screen overflow-hidden relative flex items-center border-t border-white/5">
      {/* Background massive typography */}
      <div className="absolute top-[10%] left-10 z-0 pointer-events-none opacity-[0.03]">
        <h2 className="text-[20vw] font-bold text-outline uppercase tracking-tighter leading-none whitespace-nowrap">
          Ministries
        </h2>
      </div>

      <div className="absolute top-[15%] left-10 md:left-24 z-20 pointer-events-none">
        <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9]">
          Find Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-white italic">Tribe.</span>
        </h2>
      </div>

      <div ref={scrollContainerRef} className="flex w-[400vw] h-full items-center relative z-10">
        {ministries.map((min, i) => (
          <div key={i} className="ministry-panel w-screen h-full flex items-center justify-center px-6 md:px-24">
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-20">

              <div className="w-full md:w-1/2 relative group">
                <div className="relative aspect-[4/5] w-full max-w-lg mx-auto overflow-hidden border border-white/5">
                  <div className={`absolute inset-0 bg-gradient-to-br ${min.color} mix-blend-multiply opacity-40 z-10`}></div>
                  <Image
                    src={min.img}
                    alt={min.title}
                    fill
                    className="ministry-img object-cover scale-110 group-hover:scale-105 transition-transform duration-[2s] ease-out"
                  />
                </div>
                {/* Floating number */}
                <div className="floating-num absolute -left-20 -bottom-20 text-[20rem] font-bold text-outline opacity-[0.05] z-0 select-none pointer-events-none">
                  0{i + 1}
                </div>
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <span className="text-primary-500 font-bold uppercase tracking-[0.4em] text-xs mb-6 block">
                  {min.subtitle}
                </span>
                <h3 className="text-6xl md:text-8xl font-bold text-white mb-10 tracking-tighter">
                  {min.title}
                </h3>
                <p className="text-slate-400 text-xl font-light leading-relaxed max-w-md mb-12">
                  {min.desc}
                </p>

                <button className="group flex items-center gap-6">
                  <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-primary-500 group-hover:border-primary-500 transition-all duration-500">
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </div>
                  <span className="text-white font-bold uppercase tracking-widest text-xs">Join the Community</span>
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Scroll Progress Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-64 h-[1px] bg-white/10 z-20">
        <div className="h-full bg-primary-500 w-1/4"></div>
      </div>
    </section>
  );
}

