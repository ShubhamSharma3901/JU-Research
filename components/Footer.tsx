"use client";

import { Footer } from "flowbite-react";
import Image from "next/image";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import logo from "@/public/JU-Logo.png";

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

export default function JUFooter() {
  return (
    <Footer container className="outline outline-red-400 rounded-none">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="grid p-6 w-[90%] justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="font-montserrat flex flex-col gap-8">
            <Image src={logo} alt={""} className="w-[10rem]" />
            <p className="text-slate-500 w-[50%] text-[0.9rem]">
              JECRC University Campus: Plot No.IS-2036 to 2039, Ramchandrapura
              Industrial Area, Vidhani, Sitapura Extension, Jaipur - 303905
              Rajasthan, India
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="" />
              <Footer.LinkGroup col>
                <Footer.Link href="">Home</Footer.Link>
                <Footer.Link href="">Links</Footer.Link>
                <Footer.Link href="">Metrics</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="" />
              <Footer.LinkGroup col>
                <Footer.Link href="">Overview</Footer.Link>
                <Footer.Link href="">Messages</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="" />
              <Footer.LinkGroup col>
                <Footer.Link href="">Vision</Footer.Link>
                <Footer.Link href="">Mission</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider className="w-[90%]" />
        <div className="w-[90%] sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Copyright JECRC.™" year={2023} />
        </div>
      </div>
    </Footer>
  );
}
