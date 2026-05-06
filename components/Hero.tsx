"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "expo.out" }
      });

      // Initial state
      gsap.set(".hero-char", { y: 100, opacity: 0 });
      gsap.set(imageWrapperRef.current, { scale: 1.2, filter: "brightness(0)" });
      gsap.set(".hero-cta", { opacity: 0, y: 20 });

      // Opening Animation
      tl.to(imageWrapperRef.current, {
        scale: 1,
        filter: "brightness(1)",
        duration: 2.5,
        ease: "power4.inOut"
      })
        .to(".hero-char", {
          y: 0,
          opacity: 1,
          stagger: 0.03,
          duration: 1.5,
        }, "-=1.5")
        .to(".hero-cta", {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 1,
        }, "-=0.8");

      // Scroll Parallax & Scale
      gsap.to(imageWrapperRef.current, {
        scale: 1.4,
        y: "20%",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });

      gsap.to(titleRef.current, {
        y: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "50% top",
          scrub: true,
        }
      });

      // Background Text Parallax
      gsap.to(".bg-text-praise", {
        x: -200,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });

      gsap.to(".bg-text-center", {
        x: 200,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const splitText = (text: string) => {
    return text.split("").map((char, i) => (
      <span key={i} className="hero-char inline-block whitespace-pre">
        {char}
      </span>
    ));
  };

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-[#020617] flex items-center justify-center"
    >
      {/* Massive Background Typography */}
      <div className="absolute inset-0 z-0 flex flex-col items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <h2 className="bg-text-praise text-[30vw] font-black uppercase tracking-tighter leading-none whitespace-nowrap">
          Praise
        </h2>
        <h2 className="bg-text-center text-[30vw] font-black uppercase tracking-tighter leading-none whitespace-nowrap">
          Center
        </h2>
      </div>

      {/* Main Cinematic Image */}
      <div
        ref={imageWrapperRef}
        className="absolute inset-0 z-10 w-full h-full"
      >
        <Image
          src="https://res.cloudinary.com/samueladexcloudinary/image/upload/v1778070662/Gemini_Generated_Image_ddisucddisucddis_fmjxzn.png"
          alt="Church Sanctuary"
          fill
          priority
          className="object-cover opacity-[70%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 via-transparent to-[#020617]"></div>
        <div className="absolute inset-0 bg-[#020617]/20 mix-blend-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl">
        <div className="hero-cta mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse shadow-[0_0_10px_#0ea5e9]"></span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary-400">
            Welcome to the Sanctuary
          </span>
        </div>

        <h1
          ref={titleRef}
          className="text-6xl md:text-[8vw] font-bold text-white leading-[0.9] tracking-tighter mb-8"
        >
          <div className="overflow-hidden">
            {splitText("Where Souls")}
          </div>
          <div className="overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-white italic">
            {splitText("Find Home.")}
          </div>
        </h1>

        <div className="hero-cta max-w-2xl mx-auto mb-12">
          <p className="text-xl md:text-xl text-slate-100 font-semibold leading-relaxed">
            Experience the transformative power of God's love. Join a community where every heart matters and every story is sacred.
          </p>
        </div>

        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="group relative px-10 py-5 bg-primary-600 text-white font-bold rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(14,165,233,0.4)]">
            <span className="relative z-10">Start Your Journey</span>
            <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <span className="absolute inset-0 flex items-center justify-center text-primary-950 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">Start Your Journey</span>
          </button>

          <a href="https://web.facebook.com/PraiseCentreMinistries" target="_blank">
            <button className="px-10 py-5 border border-white/20 text-white font-bold rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors">
              Watch Live
            </button>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center opacity-50">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent animate-bounce"></div>
      </div>
    </section>
  );
}

