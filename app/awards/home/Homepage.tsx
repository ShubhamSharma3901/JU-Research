"use client";
import React from "react";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const navList = [
  {
    title: "Faculty Members",
    href: "/awards/faculty",
  },
  {
    title: "Research Scholars",
    href: "/awards/scholars",
  },
  {
    title: "Standford University List of World's 2% Scientists",
    href: "/awards/scientists",
  },
];

function Homepage() {
  const router = useRouter();
  return (
    <div className="w-full flex flex-col justify-center items-center pt-[5rem] gap-10">
      <div className="grid tablet:w-[85%] xsPhone:w-full laptop:grid-cols-3 tablet:grid-cols-2 xsPhone:grid-cols-2 grid-rows-auto gap-6 tablet:px-10 xsPhone:px-6">
        {navList.map((navItem, index) => {
          return (
            <>
              <div className="relative group">
                <div
                  className={cn(
                    "absolute inset-[-0.05rem] rounded-lg bg-white blur-sm  group-hover:bg-[#DE1819] group-hover:blur-md transition "
                  )}></div>
                <div
                  className="rounded-xl border group-hover:bg-[#DE1819] group-hover:text-white group-hover:font-bold tracking-wider relative bg-white text-wrap w-full h-[10rem] px-10 uppercase font-montserrat tablet:text-xs  xsPhone:text-[11px] text-center flex justify-center items-center hover:scale-105 transition cursor-pointer"
                  key={index}
                  onClick={() => router.push(navItem.href || "")}>
                  {navItem.title}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Homepage;
