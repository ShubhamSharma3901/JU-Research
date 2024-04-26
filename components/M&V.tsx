import React from "react";
import Image from "next/image";
import logo from "../public/9841.webp";

function Mission_Vission() {
  return (
    <div className="h-fit relative w-full  flex flex-col justify-center items-center gap-[5rem] my-[3rem]">
      <div className="w-full laptop:w-[85%] relative rounded-xl flex laptop:flex-row xsPhone:flex-col xsPhone:gap-[5rem] tablet:gap-[8rem] justify-start items-center text-center">
        <div className="tablet:w-[80%] laptop:p-20 laptop:pl-20 bg-[#FFF8F8] rounded-xl xsPhone:text-center tablet:text-start flex flex-col gap-10 laptop:ml-4">
          <div className="space-y-4 px-20 pt-10 laptop:p-0">
            <p className="text-4xl text-start font-bold font-playfair uppercase tracking-wider ">
              Vision
            </p>
            <hr className="h-[0.4rem] tablet:w-[6rem] xsPhone:w-[4rem] rounded-xl bg-red-500" />
          </div>
          <div className="tablet:w-full font-montserrat text-justify xsPhone:px-20 xsPhone:pb-20 laptop:px-0 laptop:pb-0">
            <ul className="list-disc ml-4 space-y-4">
              <li className="pl-2">
                To become a renowned center of higher learning, and work towards
                academic, professional, cultural and social enrichment of the
                lives of individuals and communities.
              </li>
              <li className="pl-2">
                We facilitate collaborative projects with industry leaders,
                driving real-world impact and economic growth through technology
                transfer and industry-sponsored research.
              </li>
              <li className="pl-2">
                Through international partnerships and cross-cultural
                initiatives, we address global challenges and promote
                sustainable development on a global scale.
              </li>
              <li className="pl-2">
                We empower the next generation of researchers and innovators
                through mentorship programs, experiential learning, and
                student-led research projects, ensuring a legacy of positive
                change and ethical innovation.
              </li>
            </ul>
          </div>
        </div>

        <div className="laptop:bg-white bg-[#FFF8F8] h-full laptop:w-[20%] xsPhone:w-[75%] border p-0 laptop:block xsPhone:hidden">
          <Image
            src={logo}
            alt={""}
            className="laptop:absolute laptop:translate-y-[-50%] laptop:top-[50%] laptop:right-0 laptop:w-[30%] w-full rounded-xl"
          />
        </div>
      </div>

      <div className="w-full laptop:w-[85%] relative rounded-xl flex laptop:flex-row xsPhone:flex-col xsPhone:gap-[5rem] tablet:gap-[8rem] justify-start items-center text-center">
        <div className="tablet:w-[80%] laptop:p-20 laptop:pl-20 bg-[#FFF8F8] rounded-xl xsPhone:text-center tablet:text-start flex flex-col gap-10 laptop:ml-4">
          <div className="space-y-4 px-20 pt-10 laptop:p-0">
            <p className="text-4xl text-start font-bold font-playfair uppercase tracking-wider ">
              Mission
            </p>
            <hr className="h-[0.4rem] tablet:w-[6rem] xsPhone:w-[4rem] rounded-xl bg-red-500" />
          </div>
          <div className="tablet:w-full font-montserrat text-justify xsPhone:px-20 xsPhone:pb-20 laptop:px-0 laptop:pb-0">
            <ul className="list-disc ml-4 space-y-4">
              <li className="pl-2">
                To focus on research and spirit of innovation that will drive
                academic orientation and pursuit at JECRC University.
              </li>
              <li className="pl-2">
                To Identify, based on informed perception of Indian, regional
                and global needs, areas of focus and specialization on which the
                University can concentrate.
              </li>
              <li className="pl-2">
                To undertake collaborative projects that offer opportunities for
                long-term interaction between academia and industry.
              </li>
              <li className="pl-2">
                To develop human potential to its fullest extent so that
                intellectually capable and imaginatively gifted leaders can
                emerge in a range of professions.
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="tablet:w-[50%]  xsPhone:text-center tablet:text-start flex flex-col gap-10">
          <p className="text-4xl text-center font-bold font-playfair uppercase tracking-wider">
            Vission
          </p>
          <div className="tablet:w-full font-montserrat text-justify">
            The mission of our research department at JECRC University is to
            advance knowledge, foster innovation, and contribute to societal
            development through rigorous inquiry and collaborative engagement.
            Grounded in excellence and integrity, our department strives to
            promote interdisciplinary research that addresses complex challenges
            and generates meaningful solutions. We are committed to nurturing a
            vibrant research culture that empowers faculty and students to
            explore new frontiers, pursue transformative discoveries, and make
            significant contributions to their fields and communities. With a
            focus on ethical conduct, dissemination of findings, and impactful
            partnerships, we aim to elevate the profile of research at our
            university and beyond, driving positive change and shaping a
            brighter future for generations to come.
          </div>
        </div> */}
        <div className="laptop:bg-white bg-[#FFF8F8] h-full laptop:w-[20%] xsPhone:w-[75%] border p-0 laptop:block xsPhone:hidden">
          <Image
            src={logo}
            alt={""}
            className="laptop:absolute laptop:translate-y-[-50%] laptop:top-[50%] laptop:right-0 laptop:w-[30%] w-full rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Mission_Vission;
