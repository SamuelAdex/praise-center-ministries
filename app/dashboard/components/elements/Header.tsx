"use client";

import Image from 'next/image';
import React from 'react';
import logo from '@/public/img/full purple.png';
import { IoNotificationsOutline } from "react-icons/io5";
import personImg from '@/public/img/logo 22.png';
import { IoIosArrowDown } from "react-icons/io";


const Header = () => {
  return (
    <header className='p-8 flex items-center justify-between w-full'>
      <div className=''>
        <Image src={logo} alt='' className='w-[150px]' />
      </div>
      <div className='flex items-center gap-4'>
        <div className='rounded-[100%] border border-gray-900 p-4 backdrop-blur-sm bg-[rgba(0,0,0,0.1)] hover:bg-[rgba(255,255,255,0.1)] cursor-pointer transition'>
          <IoNotificationsOutline className='text-xl text-gray-500' />
        </div>
        <div className='rounded-[100px] flex items-center gap-2 border border-gray-900 p-2 backdrop-blur-sm bg-[rgba(0,0,0,0.1)] hover:bg-[rgba(255,255,255,0.1)] cursor-pointer transition'>
          <Image src={personImg} alt='' className='w-[35px] h-[35px] rounded-[100%]' />
          <IoIosArrowDown className='text-lg text-gray-500 cursor-pointer' />
        </div>
      </div>
    </header>
  )
}

export default Header;