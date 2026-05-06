"use client";

import { useSelectedLayoutSegment } from 'next/navigation';
import React from 'react';
import { RiHome6Line, RiUserLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import Image from 'next/image';
import Link from 'next/link';


const Sidebar = () => {
    const activeSegment = useSelectedLayoutSegment();


    const links = [
    {
      id: 1,
      name: "Home",
      href: "/dashboard/",
      isActiveImg: RiHome6Line,
      targetSegment: null,
    },
    {
      id: 2,
      name: "Agents",
      href: "/dashboard/agents",
      isActiveImg: RiUserLine,
      targetSegment: "agents",
    },
    {
      id: 3,
      name: "Settings",
      href: "/dashboard/settings",
      isActiveImg: IoSettingsOutline,
      targetSegment: "settings",
    },
    
  ];


  return (
    <section className='h-screen w-[120px] md:grid hidden fixed top-0 place-items-center'>
        <div className='h-[500px] flex flex-col items-center py-8 backdrop-blur-sm bg-[rgba(0,0,0,0.1))] border border-gray-800 w-[70px] rounded-[80px]'>
          {links.map((link, i) => {
          //const isActive = pathname.startsWith(link.href);
          return (
            <div key={i}>
              <Link
                href={link.href}
                key={link.name}
                className="flex items-center gap-[7.35px] text-[14px] mb-[30px]"
              >
                {activeSegment === link.targetSegment ? (
                  <div className='rounded-[100%] shadow-gray-300 shadow-2xl bg-linear-to-tr from-purple-500 to-black p-2 hover:bg-[rgba(255,255,255,0.1)] cursor-pointer transition'>
                    <link.isActiveImg className="text-gray-300 text-2xl" />
                  </div>
                ) : (
                  <link.isActiveImg className="text-gray-500 text-2xl" />
                )}
              </Link>
            </div>
          );
        })}
        </div>
    </section>
  )
}

export default Sidebar