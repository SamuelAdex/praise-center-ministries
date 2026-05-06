"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GALLERY_IMAGES = [
  {
    url: "https://res.cloudinary.com/samueladexcloudinary/image/upload/v1778070662/Gemini_Generated_Image_ddisucddisucddis_fmjxzn.png",
    title: "Sacred Space",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    url: "https://res.cloudinary.com/samueladexcloudinary/image/upload/v1778071041/Gemini_Generated_Image_neigq6neigq6neig_v5gp5o.png",
    title: "Heavenly Harmonies",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    url: "https://res.cloudinary.com/samueladexcloudinary/image/upload/v1778070292/PSX_20260325_112949_1_ihqnlg.png",
    title: "Worship in Spirit",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    url: "https://res.cloudinary.com/samueladexcloudinary/image/upload/v1778071527/Gemini_Generated_Image_tnpb86tnpb86tnpb_ht4xem.png",
    title: "Community Gatherings",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    url: "https://res.cloudinary.com/samueladexcloudinary/image/upload/v1778070290/PSX_20260325_113027_jlievl.png",
    title: "Divine Light",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    url: "https://res.cloudinary.com/samueladexcloudinary/image/upload/v1778070290/PSX_20260325_113359_seyblb.png",
    title: "Generational Faith",
    span: "md:col-span-1 md:row-span-1",
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      gsap.from(".exp-title", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".exp-title",
          start: "top 90%",
        },
      });

      // Grid Items Animation
      const items = gsap.utils.toArray(".gallery-item");
      items.forEach((item: any, i) => {
        gsap.fromTo(
          item,
          {
            y: 100,
            opacity: 0,
            scale: 0.9,
            clipPath: "inset(100% 0 0 0)"
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            clipPath: "inset(0% 0 0 0)",
            duration: 1.5,
            delay: i * 0.1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
            },
          }
        );

        // Hover effect using GSAP for smoothness
        const img = item.querySelector("img");
        const overlay = item.querySelector(".item-overlay");

        item.addEventListener("mouseenter", () => {
          gsap.to(img, { scale: 1.1, duration: 1, ease: "power2.out" });
          gsap.to(overlay, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
        });

        item.addEventListener("mouseleave", () => {
          gsap.to(img, { scale: 1, duration: 1, ease: "power2.out" });
          gsap.to(overlay, { opacity: 0, y: 20, duration: 0.5, ease: "power2.out" });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-[#020617] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-2xl">
            <h2 className="exp-title text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none mb-6">
              THE <span className="text-primary-500 italic">EXPERIENCE.</span>
            </h2>
            <p className="exp-title text-slate-400 text-lg regular font-light delay-100">
              Step into a world where faith comes alive. Our gallery captures the moments of profound connection, joyful worship, and the enduring spirit of our community.
            </p>
          </div>
          <div className="exp-title mt-8 md:mt-0 flex flex-col items-end">
            <span className="text-primary-500 font-bold uppercase tracking-[0.3em] text-xs mb-2">View Gallery</span>
            <div className="w-24 h-[1px] bg-primary-500"></div>
          </div>
        </div>

        <div
          ref={gridRef}
          className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none gap-4 md:gap-6 pb-12 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 grid-cols-1 md:grid-cols-4 h-auto md:h-[120vh] scrollbar-hide"
        >
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              className={`gallery-item relative overflow-hidden rounded-sm group cursor-pointer flex-shrink-0 w-[85vw] md:w-full snap-center h-[500px] md:h-full ${img.span}`}
            >
              <Image
                src={img.url}
                alt={img.title}
                fill
                className="object-cover transition-transform duration-1000"
              />
              <div className="item-overlay absolute inset-0 bg-gradient-to-t from-primary-950/90 via-transparent to-transparent opacity-0 translate-y-5 flex flex-col justify-end p-8 transition-all pointer-events-none">
                <span className="text-primary-400 text-xs font-bold uppercase tracking-widest mb-2">Praise Center</span>
                <h3 className="text-2xl font-bold text-white tracking-tight">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
