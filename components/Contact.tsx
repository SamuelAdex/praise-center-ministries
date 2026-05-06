"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-elem",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: ".contact-form-wrapper", start: "top 80%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      gsap.fromTo(".success-msg", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" });
      
      // Reset after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section ref={sectionRef} id="contact" className="py-32 bg-[#020617] relative border-t border-white/5 overflow-hidden">
      {/* Massive Ethereal Typography */}
      <div className="absolute top-[20%] right-0 w-full text-right z-0 pointer-events-none select-none overflow-hidden opacity-20 pr-10">
        <h2 className="text-[18vw] font-bold text-outline uppercase tracking-tighter leading-none mix-blend-overlay">
          Connect
        </h2>
      </div>
      
      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="contact-elem">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-primary-500"></div>
              <span className="text-primary-500 font-bold uppercase tracking-[0.2em] text-sm">
                Prayer Requests & Contact
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[1.1] mb-8">
              Let Us Pray <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-300 italic">With You.</span>
            </h2>
            <p className="text-slate-400 regular text-lg font-light max-w-md leading-relaxed">
              We are here to stand with you in faith. Whether you have a prayer request, a question, or simply want to connect, drop us a message below.
            </p>
          </div>

          <div className="bg-[#020617]/80 backdrop-blur-2xl p-10 md:p-12 border border-white/10 contact-elem relative shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary-500 to-transparent"></div>
            
            {status === "success" ? (
              <div className="success-msg flex flex-col items-center justify-center py-20 text-center">
                <div className="w-20 h-20 border border-green-500/50 rounded-full flex items-center justify-center mb-8">
                  <CheckCircle2 className="text-green-500" size={32} />
                </div>
                <h3 className="text-4xl font-bold text-white mb-4 tracking-tighter">Message Sent.</h3>
                <p className="text-slate-400 text-lg font-light">Our team will keep your request in prayers.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-8">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      required
                      className="peer w-full px-0 py-4 bg-transparent border-b border-white/20 text-white placeholder-transparent focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="Full Name"
                    />
                    <label htmlFor="name" className="absolute left-0 -top-3.5 text-sm font-semibold text-slate-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary-400 uppercase tracking-widest">Full Name</label>
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      required
                      className="peer w-full px-0 py-4 bg-transparent border-b border-white/20 text-white placeholder-transparent focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="Email Address"
                    />
                    <label htmlFor="email" className="absolute left-0 -top-3.5 text-sm font-semibold text-slate-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary-400 uppercase tracking-widest">Email Address</label>
                  </div>
                </div>
                
                <div className="relative mt-8">
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="peer w-full px-0 py-4 bg-transparent border-b border-white/20 text-white placeholder-transparent focus:outline-none focus:border-primary-500 transition-colors resize-none"
                    placeholder="Message"
                  ></textarea>
                  <label htmlFor="message" className="absolute left-0 -top-3.5 text-sm font-semibold text-slate-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary-400 uppercase tracking-widest">Prayer Request / Message</label>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full mt-10 bg-white hover:bg-primary-500 text-[#020617] hover:text-white font-bold py-5 transition-all flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-[0.2em] text-sm group"
                >
                  {status === "submitting" ? "Sending..." : (
                    <>
                      Send Message <Send size={18} className="group-hover:translate-x-2 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
