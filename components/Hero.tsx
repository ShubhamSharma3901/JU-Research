"use client";
import React from "react";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const navList = [
  {
    title: "Publications",
    href: "/publications",
  },
  {
    title: "Research Supervisors",
    href: "/research_supervisor",
  },
  {
    title: "Funded Projects",
    href: "/funded-projects",
  },
  {
    title: "Patents",
    href: "/patents",
    // fields: [
    //   {
    //     name: "Created",
    //   },
    //   {
    //     name: "Published",
    //   },
    //   {
    //     name: "Submitted",
    //   },
    // ],
  },
  {
    title: "Collaborations & MOU",
    href: "/collab-mou",
  },
  {
    title: "Achievements & awards",
  },
  {
    title: "Policies & Guidelines",
    href: "/Policy-Guidelines",
  },
  {
    title: "Research Laboratories",
  },
  {
    title: "Conferences",
    href: "/Conferences",
  },
  {
    title: "Invited Talks",
  },
];

function Hero() {
  const router = useRouter();
  return (
    <div className="w-full flex flex-col justify-center items-center pt-[5rem] gap-10">
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <h1 className="uppercase font-semibold font-playfair tracking-wide tablet:text-4xl xsPhone:text-2xl">
          Quick Links
        </h1>
        <hr className="h-[0.4rem] tablet:w-[6rem] xsPhone:w-[4rem] rounded-xl bg-red-500" />
      </div>

      <div className="grid tablet:w-[85%] xsPhone:w-full laptop:grid-cols-5 tablet:grid-cols-2 xsPhone:grid-cols-2 grid-rows-auto gap-6 tablet:px-10 xsPhone:px-6">
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

export default Hero;
