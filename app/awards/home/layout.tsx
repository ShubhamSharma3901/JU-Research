import Banner from "@/components/Banner";
import NavBar from "@/components/NavBar";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <NavBar />
      <Banner />
      <div className="w-full flex flex-col justify-center items-center gap-4 mt-[5rem]">
        <h1 className="uppercase font-semibold font-playfair tracking-wide tablet:text-4xl xsPhone:text-2xl">
          Achievements & Awards
        </h1>
        <hr className="h-[0.4rem] tablet:w-[6rem] xsPhone:w-[4rem] rounded-xl bg-red-500" />
      </div>
      <div>{children}</div>
    </div>
  );
}

export default layout;
