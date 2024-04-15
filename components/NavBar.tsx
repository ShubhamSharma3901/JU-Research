import React from "react";
import Image from "next/image";
import JECRC_Logo from "@/public/JECRC_Logo.png";

function NavBar() {
  return (
    <div className="w-full bg-[#DE1819] relative tablet:h-[4rem] xsPhone:h-[3rem]">
      <div className=" absolute z-[200] translate-x-[-50%] left-[50%]">
        <Image
          src={JECRC_Logo}
          alt={""}
          className="laptop:w-[20rem] tablet:w-[15rem] xsPhone:w-[12rem]"
        />
      </div>
      <a> Home</a>
      <a> About</a>
      <a> Contact</a>
    </div>
  );
}

export default NavBar;
