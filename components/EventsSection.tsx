"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, Clock, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function EventsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".event-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".event-header", start: "top 80%" },
        }
      );

      gsap.fromTo(
        ".yearly-card",
        { opacity: 0, scale: 0.9, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: { trigger: ".yearly-grid", start: "top 75%" },
        }
      );

      gsap.fromTo(
        ".monthly-card",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: ".monthly-grid", start: "top 80%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const yearlyEvents = [
    {
      title: "Men of Alive",
      date: "June 12 - 13, 2026",
      desc: "Empowering Men to walk in their God-given purpose.",
      img: "https://res.cloudinary.com/samueladexcloudinary/image/upload/v1778070662/Gemini_Generated_Image_ddisucddisucddis_fmjxzn.png" // reusing image for layout completion
    },
    {
      title: "International Convention",
      date: "October 7 - 11, 2026",
      desc: "A week of powerful word, worship, and supernatural encounters.",
      img: "https://res.cloudinary.com/samueladexcloudinary/image/upload/v1778070662/Gemini_Generated_Image_ddisucddisucddis_fmjxzn.png"
    },
  ];

  const monthlyEvents = [
    { title: "Anointing Service", time: "1st Sunday, 8:00 AM", location: "Main Auditorium", icon: Calendar },
    { title: "Monday Bible Study", time: "Every Monday, 5:00 PM", location: "Grace Chapel", icon: Clock },
    { title: "Mid-Week Super Service", time: "Every Wednesday, 5:00 PM", location: "Main Auditorium", icon: MapPin },
    { title: "Night Vigil", time: "Every Third Friday, 09:30 PM", location: "Main Auditorium", icon: MapPin },
  ];

  return (
    <section ref={sectionRef} id="events" className="py-32 bg-[#020617] relative border-t border-white/5 overflow-hidden">
      {/* Massive Ethereal Typography */}
      <div className="absolute top-[10%] left-0 w-full text-center z-0 pointer-events-none select-none overflow-hidden opacity-20">
        <h2 className="text-[18vw] font-bold text-outline uppercase tracking-tighter leading-none">
          Gatherings
        </h2>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 event-header">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-primary-500"></div>
              <span className="text-primary-500 font-bold uppercase tracking-[0.2em] text-sm">
                Get Involved
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[1.1]">
              Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-300 italic">Events.</span>
            </h2>
          </div>
        </div>

        {/* Yearly Events */}
        <div className="mb-32">
          <h3 className="text-2xl font-bold text-white mb-10 tracking-widest uppercase text-primary-400 event-header">
            Major Annual Events
          </h3>
          <div className="yearly-grid grid grid-cols-1 lg:grid-cols-2 gap-12">
            {yearlyEvents.map((event, idx) => (
              <div key={idx} className="yearly-card group relative bg-[#020617] rounded-none overflow-hidden shadow-2xl border border-white/10 transition-all duration-700 hover:border-primary-500/50">
                <div className="relative h-[400px] w-full overflow-hidden">
                  <Image src={event.img} alt={event.title} fill className="object-cover transition-transform duration-[1.5s] group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent mix-blend-multiply"></div>

                  <div className="absolute top-8 left-8 border border-white/20 bg-[#020617]/50 backdrop-blur-md px-6 py-2">
                    <span className="text-white text-sm font-bold tracking-[0.2em] uppercase">
                      {event.date}
                    </span>
                  </div>

                  <div className="absolute bottom-8 left-8 right-8">
                    <h4 className="text-white text-4xl font-bold tracking-tighter mb-4">{event.title}</h4>
                  </div>
                </div>
                <div className="p-8 border-t border-white/10 bg-[#020617]">
                  <p className="text-slate-400 regular text-lg mb-8 leading-relaxed font-light">{event.desc}</p>
                  <button className="group/btn inline-flex items-center gap-4 text-white font-bold uppercase tracking-widest text-xs hover:text-primary-400 transition-colors">
                    Register Now
                    <span className="w-8 h-[1px] bg-white group-hover/btn:bg-primary-400 group-hover/btn:w-12 transition-all"></span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Events */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-10 tracking-widest uppercase text-primary-400 event-header">
            Weekly Programs
          </h3>
          <div className="monthly-grid grid grid-cols-1 md:grid-cols-3 gap-6">
            {monthlyEvents.map((event, idx) => {
              const Icon = event.icon;
              return (
                <div key={idx} className="monthly-card bg-[#020617] border border-white/10 p-10 hover:border-primary-500/50 transition-all duration-500 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="w-16 h-16 border border-primary-500/30 rounded-full flex items-center justify-center mb-8 text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all duration-500">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-3xl font-bold text-white mb-4 tracking-tighter">{event.title}</h4>
                  <div className="space-y-4 mt-8 pt-8 border-t border-white/10">
                    <p className="text-slate-400 text-sm flex items-center gap-4 font-light tracking-wide">
                      <Clock size={16} className="text-primary-500" /> {event.time}
                    </p>
                    <p className="text-slate-400 text-sm flex items-center gap-4 font-light tracking-wide">
                      <MapPin size={16} className="text-primary-500" /> {event.location}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
