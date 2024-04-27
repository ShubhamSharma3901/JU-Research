"use client";
import React from "react";
import CountUp from "react-countup";
function HomePageCards() {
  return (
    <div className="w-full flex justify-center items-center" id={"metrics"}>
      <div className=" xsPhone:grid-cols-1 xsPhone:w-full laptop:w-[90%] tablet:flex-row justify-center items-center gap-10 p-10 grid laptop:grid-cols-3 tablet:grid-cols-2">
        <div className="h-auto rounded-lg flex-col w-[1/3] p-10 border bg-[#DE1819] py-20 text-white flex justify-center items-center text-4xl font-montserrat font-bold">
          <div>
            <CountUp start={0} end={1000} scrollSpyOnce />
            &nbsp;+
          </div>
          <p className="text-lg">Research Publications</p>
        </div>
        <div className="h-auto rounded-lg flex-col w-[1/3] p-10 border bg-[#DE1819] py-20 text-white flex justify-center items-center text-4xl font-montserrat font-bold">
          <div>
            <CountUp start={0} end={20000} scrollSpyOnce />
            &nbsp;+
          </div>
          <p className="text-lg">Total Citations</p>
        </div>
        <div className="h-auto rounded-lg flex-col w-[1/3] p-10 border bg-[#DE1819] py-20 text-white flex justify-center items-center text-4xl font-montserrat font-bold">
          <div>
            <CountUp start={0} end={69} scrollSpyOnce />
          </div>
          <p className="text-lg">
            <span className="lowercase">h-index</span>
          </p>
        </div>

        <div className="h-auto rounded-lg flex-col w-[1/3] p-10 border bg-[#DE1819] py-20 text-white flex justify-center items-center text-4xl font-montserrat font-bold">
          <div>
            <CountUp start={0} end={379} scrollSpyOnce />
          </div>
          <p className="text-lg">
            <span className="lowercase">i-10 index</span>
          </p>
        </div>

        <div className="h-auto rounded-lg flex-col text-center p-10 w-[1/3] py-20 border bg-[#DE1819] text-white flex justify-center items-center text-4xl font-montserrat font-bold">
          <div>
            ₹&nbsp;
            <CountUp start={0} end={13.5} scrollSpyOnce />
            &nbsp;Cr.&nbsp;+
          </div>
          <p className="text-lg">Research Grants</p>
        </div>

        <div className="h-auto rounded-lg flex-col w-[1/3] p-10 border bg-[#DE1819] py-20 text-white flex justify-center items-center text-4xl font-montserrat font-bold">
          <div>
            <CountUp start={0} end={30} scrollSpyOnce />
            &nbsp;+
          </div>
          <p className="text-lg">Patents Granted</p>
        </div>
      </div>
    </div>
  );
}

export default HomePageCards;
