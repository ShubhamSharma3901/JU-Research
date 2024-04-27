"use client";
import React from "react";
import Image from "next/image";
import JECRC_Logo from "@/public/JECRC_Logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
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
    href: "/awards/home",
  },
  {
    title: "Policies & Guidelines",
    href: "/Policy-Guidelines",
  },
  {
    title: "Research Laboratories",
    href: "/labs/home",
  },
  {
    title: "Conferences",
    href: "/Conferences",
  },
  {
    title: "Invited Talks",
    href: "/talks",
  },
];

function NavBar() {
  const router = useRouter();
  return (
    <div className="w-full bg-[#DE1819] sticky top-0 tablet:h-[4rem] xsPhone:h-[3rem] z-[400]">
      <div className=" absolute z-[200] translate-x-[-50%] left-[50%]">
        <Image
          src={JECRC_Logo}
          alt={""}
          onClick={() => router.push("https://www.jecrcuniversity.edu.in")}
          className="laptop:w-[15rem] tablet:w-[15rem] xsPhone:w-[12rem] cursor-pointer"
        />
      </div>
      <div className="flex  w-fit h-full justify-between items-center gap-10 text-white font-montserrat font-semibold ml-8">
        <a href="/" className="cursor-pointer">
          {" "}
          Home
        </a>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex justify-center items-center">
            Links <ChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="font-montserrat z-[400]">
            <DropdownMenuLabel>Links</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {navList.map((link, index) => {
              return (
                <Link key={index} href={(link.href as string) || "/"}>
                  <DropdownMenuItem className="cursor-pointer">
                    {link.title}
                  </DropdownMenuItem>
                </Link>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
        <Link href={"#metrics"}>Research Metrics</Link>
      </div>
    </div>
  );
}

export default NavBar;
