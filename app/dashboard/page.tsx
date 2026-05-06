"use client";

import React from "react";
import AssetCharts from "./components/elements/AssetCharts";
import Button from "@/components/elements/Button";
import RecentTransactions from "./components/ui/RecentTransactions";

const page = () => {
  return (
    <main className="flex md:flex-row flex-col gap-5">
      <div className="flex-4">
        <div className="flex items-center flex-wrap gap-5">
          <div className="backdrop-blur-sm md:w-[200px] w-full bg-linear-270 from-purple-950/50 to-[rgba(0,0,0,0.1)] border border-gray-900 p-3 rounded-[12px]">
            <div className="md:text-[14px] text-gray-500 semibold">Down</div>
            <div className="flex items-center gap-3 mt-3">
              <div className="text-white text-[12px] regular">35.16</div>
              <div className="text-[10px] regular rounded-[8px] py-1 px-2 bg-red-500/25 text-red-500">
                -0.37%
              </div>
            </div>
          </div>
          <div className="backdrop-blur-sm md:w-[200px] w-full bg-linear-270 from-purple-950/50 to-[rgba(0,0,0,0.1)] border border-gray-900 p-3 rounded-[12px]">
            <div className="md:text-[14px] text-gray-500 semibold">Up</div>
            <div className="flex items-center gap-3 mt-3">
              <div className="text-white text-[12px] regular">35.16</div>
              <div className="text-[10px] regular rounded-[8px] py-1 px-2 bg-purple-500/25 text-purple-500">
                0.37%
              </div>
            </div>
          </div>
          <div className="backdrop-blur-sm md:w-[200px] w-full bg-linear-270 from-purple-950/50 to-[rgba(0,0,0,0.1)] border border-gray-900 p-3 rounded-[12px]">
            <div className="md:text-[14px] text-gray-500 semibold">
              24hrs Low
            </div>
            <div className="flex items-center gap-3 mt-3">
              <div className="text-white text-[12px] regular">35.16</div>
              <div className="text-[10px] regular rounded-[8px] py-1 px-2 bg-red-500/25 text-red-500">
                -0.37%
              </div>
            </div>
          </div>
          <div className="backdrop-blur-sm md:w-[200px] w-full bg-linear-270 from-purple-950/50 to-[rgba(0,0,0,0.1)] border border-gray-900 p-3 rounded-[12px]">
            <div className="md:text-[14px] text-gray-500 semibold">
              24hrs High
            </div>
            <div className="flex items-center gap-3 mt-3">
              <div className="text-white text-[12px] regular">35.16</div>
              <div className="text-[10px] regular rounded-[8px] py-1 px-2 bg-purple-500/25 text-purple-500">
                0.37%
              </div>
            </div>
          </div>
        </div>

        <div className="flex-4 p-6 border border-gray-800 rounded-[30px] bg-[rgba(0,0,0,0.1)] backdrop-blur-sm mt-6 overflow-x-scroll">
          <AssetCharts />
        </div>

        <div className="overflow-x-scroll mt-4">
          <RecentTransactions />
        </div>
      </div>

      <div className="flex gap-5 flex-2">
        <div className="flex-2">
          <div className="bg-linear-270 border border-gray-800 rounded-[30px] from-purple-950/50 to-black p-6 backdrop-blur-sm">
            <Button
              text="Analyze"
              btnStyle="bg-linear-to-tr from-purple-500 to-black p-4 text-white rounded-[30px] w-full"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
