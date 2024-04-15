/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import * as banner from "@/public/HomePageBanner.png";
import building from "@/public/building.png";

function Banner() {
  return (
    <div className="relative h-fit w-full border">
      <Image
        src={building}
        className="tablet:h-auto xsPhone:h-[55ch] w-fit object-cover filter brightness-50 "
        alt="dp"
      />
      <p className="z-[200] text-pretty text-shadow absolute text-white translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] font-bold font-montserrat text-4xl drop-shadow-lg">
        Research and Development Cell
      </p>
      {/* <div className="absolute z-[200] translate-x-[-50%] left-[50%] bottom-0 translate-y-[50%]">
        <HomePageCards />
      </div> */}
    </div>
  );
}

export default Banner;
