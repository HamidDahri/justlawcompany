"use client";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="bg-[url('/images/jlc.jpg')] bg-center bg-cover bg-no-repeat w-full h-dvh ">
      <div className="bg-black/50 w-full h-full flex flex-col justify-center items-center text-center px-4">
        <Image alt="logo" src={"/images/logo.png"} width={280} height={280} />

        {/* <h1 className="text-3xl md:text-6xl font-medium text-white mt-4">
            Just Law Company
          </h1> */}

        {/* Under Construction */}
        <div className="mt-6 flex items-center gap-2">
          <p className="text-lg md:text-6xl text-yellow-400 font-semibold animate-pulse">
            Under Construction
          </p>

          {/* animated dots */}
          <div className="flex gap-1 mt-2 pt-2">
            <span className="w-2 h-2 md:w-4 md:h-4 bg-yellow-400 rounded-full animate-bounce [animation-delay:0ms]"></span>
            <span className="w-2 h-2 md:w-4 md:h-4 bg-yellow-400 rounded-full animate-bounce [animation-delay:150ms]"></span>
            <span className="w-2 h-2 md:w-4 md:h-4 bg-yellow-400 rounded-full animate-bounce [animation-delay:300ms]"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
