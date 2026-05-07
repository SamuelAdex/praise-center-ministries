import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { FaTiktok } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#020617] text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary-500/10 blur-[150px] pointer-events-none rounded-[100%]"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

          {/* Brand Info */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-tr from-primary-600 to-primary-400 rounded-xl flex items-center justify-center text-white bold text-xl shadow-[0_0_15px_rgba(1,125,208,0.5)] group-hover:shadow-[0_0_25px_rgba(1,125,208,0.7)] transition-shadow">
                P
              </div>
              <span className="text-2xl bold text-white tracking-tight">
                Praise Center
              </span>
            </Link>
            <p className="text-slate-400 regular mb-8 leading-relaxed font-light">
              Empowering lives, restoring hope, and building a community rooted in unconditional love and faith.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://web.facebook.com/PraiseCentreMinistries" target="_blank" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary-500 hover:border-primary-500 transition-all text-slate-300 hover:text-white hover:-translate-y-1">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary-500 hover:border-primary-500 transition-all text-slate-300 hover:text-white hover:-translate-y-1">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary-500 hover:border-primary-500 transition-all text-slate-300 hover:text-white hover:-translate-y-1">
                <FaTiktok size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary-500 hover:border-primary-500 transition-all text-slate-300 hover:text-white hover:-translate-y-1">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#home" className="text-slate-400 hover:text-primary-400 transition-colors regular flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary-500/50"></span>Home</Link></li>
              <li><Link href="#about" className="text-slate-400 hover:text-primary-400 transition-colors regular flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary-500/50"></span>About Us</Link></li>
              <li><Link href="#events" className="text-slate-400 hover:text-primary-400 transition-colors regular flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary-500/50"></span>Events & Programs</Link></li>
              <li><Link href="#testimonies" className="text-slate-400 hover:text-primary-400 transition-colors regular flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary-500/50"></span>Testimonies</Link></li>
              <li><Link href="#contact" className="text-slate-400 hover:text-primary-400 transition-colors regular flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary-500/50"></span>Prayer Request</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-white">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-500 shrink-0">
                  <MapPin size={18} />
                </div>
                <span className="text-slate-400 regular pt-2">#11 Ralph Uwazuruike Street, Area G, New Owerri , Owerri, Imo State, Nigeria</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-500 shrink-0">
                  <Phone size={18} />
                </div>
                <span className="text-slate-400 regular">+234 813 701 2927</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-500 shrink-0">
                  <Mail size={18} />
                </div>
                <span className="text-slate-400 regular">pcciowerri@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-white">Service Times</h4>
            <ul className="space-y-0 bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <li className="flex justify-between items-center text-sm border-b border-white/5 p-4 bg-white/5">
                <span className="text-slate-300 font-semibold">Sunday Service</span>
                <span className="text-primary-400 font-bold bg-primary-500/10 px-3 py-1 rounded-full">8:00 AM</span>
              </li>
              <li className="flex justify-between items-center text-sm border-b border-white/5 p-4">
                <span className="text-slate-300 font-semibold">Wednesday Bible</span>
                <span className="text-primary-400 font-bold bg-primary-500/10 px-3 py-1 rounded-full">6:00 PM</span>
              </li>
              <li className="flex justify-between items-center text-sm p-4">
                <span className="text-slate-300 font-semibold">Friday Prayer</span>
                <span className="text-primary-400 font-bold bg-primary-500/10 px-3 py-1 rounded-full">10:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="text-center border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm regular mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Praise Center Ministry. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
