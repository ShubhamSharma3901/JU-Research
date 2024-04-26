"use client";
import React from "react";
import CountUp from "react-countup";
function HomePageCards() {
  return (
    <div className="flex xsPhone:flex-col w-full tablet:flex-row justify-center items-center gap-10 p-10">
      <div className="h-auto rounded-lg flex-col text-center p-10 w-[1/3] py-20 border bg-[#DE1819] text-white flex justify-center items-center text-4xl font-montserrat font-bold">
        <div>
          <CountUp end={100} />
          &nbsp;+
        </div>
        <p className="text-lg">Research Grants</p>
      </div>
      <div className="h-auto rounded-lg flex-col w-[1/3] p-10 border bg-[#DE1819] py-20 text-white flex justify-center items-center text-4xl font-montserrat font-bold">
        <div>
          <CountUp end={100} />
          &nbsp;+
        </div>
        <p className="text-lg">Research Publications</p>
      </div>
      <div className="h-auto rounded-lg flex-col w-[1/3] p-10 border bg-[#DE1819] py-20 text-white flex justify-center items-center text-4xl font-montserrat font-bold">
        <div>
          <CountUp end={100} />
          &nbsp;+
        </div>
        <p className="text-lg">Patents Granted</p>
      </div>
    </div>
  );
}

export default HomePageCards;
