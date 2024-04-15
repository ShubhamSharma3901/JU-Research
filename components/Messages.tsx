"use client";
import Image from "next/image";
import arpitSir from "@/public/1693227319516.jpeg";
import "react-slideshow-image/dist/styles.css";
import { Slide, SlideshowRef } from "react-slideshow-image";
import { useRef } from "react";
import { Carousel } from "flowbite-react";
import { Quote, QuoteIcon } from "lucide-react";

export default function Messages() {
  const slideRef = useRef<SlideshowRef>(null);
  return (
    <div className="relative h-[30rem] bg-[#DE1819] text-white flex flex-col justify-center items-center">
      <Carousel slideInterval={3000} pauseOnHover>
        <div className=" w-[85%]  flex justify-center items-center">
          <div className="w-[30%] flex flex-col justify-center items-center gap-8">
            <Image src={arpitSir} alt={""} className="rounded-full w-[70%]" />
            <p className="uppercase text-xl font-montserrat font-bold tracking-wide">
              Shri Arpit Agrawal
            </p>
          </div>
          <div className="w-[70%] px-10 text-justify font-montserrat text-lg flex flex-col gap-5">
            <div className="w-full flex justify-end">
              <QuoteIcon />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        <div className=" w-[85%]  flex justify-center items-center">
          <div className="w-[30%] flex flex-col justify-center items-center gap-8">
            <Image src={arpitSir} alt={""} className="rounded-full w-[70%]" />
            <p className="uppercase text-xl font-montserrat font-bold tracking-wide">
              Prof. Sanjay Kr. Sharma
            </p>
          </div>
          <div className="w-[70%] px-10 text-justify font-montserrat text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>

        <div className=" w-[85%]  flex justify-center items-center">
          <div className="w-[30%] flex flex-col justify-center items-center gap-8">
            <Image src={arpitSir} alt={""} className="rounded-full w-[70%]" />
            <p className="uppercase text-xl font-montserrat font-bold tracking-wide">
              Prof. Victor Gambhir
            </p>
          </div>
          <div className="w-[70%] px-10 text-justify font-montserrat text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </Carousel>
      <div className="absolute bottom-0 px-[2rem] pb-6 w-full flex justify-end text-5xl font-montserrat font-bold text-transparent bg-clip-text bg-white/20">
        Messages
      </div>
    </div>
  );
}
