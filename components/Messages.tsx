"use client";
import Image from "next/image";
import arpitSir from "@/public/1693227319516.jpeg";
import VCSir from "@/public/VCSIR.jpeg";
import SanjaySir from "@/public/SanjaySir.jpeg";
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
              As the Director of JECRC University, I am immensely proud to
              showcase the vibrant research ecosystem that thrives within our
              institution. At JECRC, we are committed to fostering a culture of
              innovation and intellectual curiosity, where cutting-edge research
              intersects with real-world challenges to drive meaningful impact.
              Our dedicated faculty members, state-of-the-art facilities, and
              collaborative partnerships create an environment where
              groundbreaking discoveries and transformative ideas flourish. Join
              us at JECRC University, where innovation knows no bounds and the
              pursuit of knowledge is limitless.
            </p>
          </div>
        </div>

        <div className=" w-[85%]  flex justify-center items-center">
          <div className="w-[30%] flex flex-col justify-center items-center gap-8">
            <Image src={VCSir} alt={""} className="rounded-full w-[70%]" />
            <p className="uppercase text-xl font-montserrat font-bold tracking-wide">
              Prof. Victor Gambhir
            </p>
          </div>
          <div className="w-[70%] px-10 text-justify font-montserrat text-lg">
            <div className="w-full flex justify-end">
              <QuoteIcon />
            </div>
            As the Vice Chancellor of JECRC University, it is my privilege to
            highlight the dynamic research ecosystem that distinguishes our
            institution. At JECRC, we prioritize research excellence, providing
            our faculty and students with the resources and support necessary to
            explore new frontiers of knowledge across a diverse array of
            disciplines. Through interdisciplinary collaboration and a
            commitment to addressing global challenges, we empower our research
            community to make significant contributions to society. Join us at
            JECRC University, where innovation thrives, and together, we shape
            the future through discovery.
          </div>
        </div>

        <div className=" w-[85%]  flex justify-center items-center">
          <div className="w-[30%] flex flex-col justify-center items-center gap-8">
            <Image
              src={SanjaySir}
              alt={""}
              className="rounded-full w-[70%] h-auto object-cover"
            />
            <p className="uppercase text-xl font-montserrat font-bold tracking-wide">
              Prof. Sanjay Kr. Sharma
            </p>
          </div>
          <div className="w-[70%] px-10 text-justify font-montserrat text-lg">
            <div className="w-full flex justify-end">
              <QuoteIcon />
            </div>
            As the Dean of Research at JECRC University, I am delighted to
            showcase the robust and vibrant research ecosystem that defines our
            institution. Here at JECRC, research is not just a pursuit, but a
            passion that drives us to push the boundaries of knowledge and make
            meaningful contributions to society. Our dedicated faculty members
            lead pioneering research initiatives across various fields,
            supported by cutting-edge facilities and collaborative partnerships.
            Through fostering a culture of innovation and curiosity, we empower
            our researchers to explore, discover, and innovate. Join us at JECRC
            University, where research excellence is at the heart of everything
            we do, shaping a better tomorrow through impactful discoveries.
          </div>
        </div>
      </Carousel>
      <div className="absolute bottom-0 px-[2rem] pb-6 w-full flex justify-end text-5xl font-montserrat font-bold text-transparent bg-clip-text bg-white/20">
        Messages
      </div>
    </div>
  );
}
