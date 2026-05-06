"use client";

import Button from "@/components/elements/Button";
import Link from "next/link";
import React from "react";
import { FaDiscord, FaRobot } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { RiSkull2Line, RiTelegram2Fill } from "react-icons/ri";

const Agents = () => {
  return (
    <section className="px-8">
      <div className="">
        <div className="inline-flex items-center text-white semibold md:text-[16px] text-[14px] gap-3">
          <div className="bg-linear-to-tr from-purple-500 grid place-items-center rounded-[100%] to-black p-3 hover:bg-[rgba(255,255,255,0.1)] cursor-pointer transition">
            <FaRobot className="text-xl" />
          </div>
          Add An Agent
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <AgentCard title="Risk Agent" description="Risk Agent continuously analyzes market volatility, liquidity
              shifts, and on-chain signals to surface potential downside
              exposure in real time." />
          <AgentCard title="Macro Agent" description="Risk Agent continuously analyzes market volatility, liquidity
              shifts, and on-chain signals to surface potential downside
              exposure in real time." />
          <AgentCard title="Social Agent" description="Risk Agent continuously analyzes market volatility, liquidity
              shifts, and on-chain signals to surface potential downside
              exposure in real time." />
          <AgentCard title="On-chain analyst" description="Risk Agent continuously analyzes market volatility, liquidity
              shifts, and on-chain signals to surface potential downside
              exposure in real time." />
          <AgentCard title="Execution Agent" description="Risk Agent continuously analyzes market volatility, liquidity
              shifts, and on-chain signals to surface potential downside
              exposure in real time." />
        </div>
      </div>
    </section>
  );
};

export default Agents;



function AgentCard({title, description}: any){

    return (
        <div className="flex-4 p-6 border border-gray-800 bg-[rgba(0,0,0,0.1)] backdrop-blur-sm rounded-[15px] cursor-pointer">
            <div className="">
              <div className="bg-linear-to-bl w-[40px] h-[40px] from-purple-500 grid place-items-center rounded-[100%] to-black hover:bg-[rgba(255,255,255,0.1)] cursor-pointer transition">
                <RiSkull2Line className="text-xl text-white" />
              </div>
            </div>

            <div className="text-white md:text-[18px] mt-2 semibold">
              {title}
            </div>
            <p className="md:text-[14px] text-[12px] text-gray-500 regular mt-2">
              {description}
            </p>

            <div className="mt-6 flex md:flex-row flex-col justify-between items-center">
              <Button
                text="Launch"
                btnStyle="bg-linear-to-tr from-purple-500/50 md:w-[120px] backdrop-blur-sm to-black px-3 text-white rounded-[8px] w-full"
              />

              <div className="flex items-center justify-center gap-4 md:mt-0 mt-3">
                <Link
                  href={"#"}
                  className="backdrop-blur-md border border-gray-500 rounded-[100%] bg-[rgba(255,255,255,0.1)] p-2"
                >
                  <IoLogoTwitter className="text-gray-300 md:text-xl text-xl" />
                </Link>
                <Link
                  href={"#"}
                  className="backdrop-blur-md border border-gray-500 rounded-[100%] bg-[rgba(255,255,255,0.1)] p-2"
                >
                  <FaDiscord className="text-gray-300 md:text-xl text-xl" />
                </Link>
                <Link
                  href={"#"}
                  className="backdrop-blur-md border border-gray-500 rounded-[100%] bg-[rgba(255,255,255,0.1)] p-2"
                >
                  <RiTelegram2Fill className="text-gray-300 md:text-xl text-xl" />
                </Link>
              </div>
            </div>
          </div>
    )
}