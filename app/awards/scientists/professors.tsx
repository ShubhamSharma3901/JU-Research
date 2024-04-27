import React from "react";
import Image from "next/image";
import SanjaySir from "@/public/SanjaySir.jpeg";
import JagdevSir from "@/public/JagdevSingh.jpeg";

const Professors = () => {
  return (
    <div className="fkex m-10">
      <div className="flex  flex-col justify-center items-center text-center p-10 text-4xl font-bold font-playfair tracking-wide">
        <p className="tracking-wide font-playfair">
          STANDFORD UNIVERSITY LIST OF WORLD'S TOP{" "}
          <span className="text-[#DE1819]">2%</span> SCIENTISTS{" "}
        </p>
        <hr className="h-[0.4rem] tablet:w-[10rem] xsPhone:w-[7rem] rounded-xl bg-red-500 mt-2" />
      </div>
      <div className="flex w-full justify-center items-center text-center">
        {/* left */}
        <div className="w-[40%] flex flex-col justify-center items-center gap-4 pt-8 pb-4">
          <Image
            src={SanjaySir}
            alt="dp"
            className="border-[#DE1819] border-4"
            height={300}
            width={300}
          />
          <p className="font-semibold font-montserrat text-md">
            Prof. Sanjay K. Sharma, FRSC
            <p className="text-sm font-light">Dean Research & Development</p>
          </p>
        </div>
        {/* right */}
        <div className="w-[60%] pr-5">
          <p className="w-full text-start font-montserrat mb-5">
            Prof. Sanjay K. Sharma, FRSC, holds a Ph.D. from Rajasthan
            University, Jaipur, India, and is a distinguished figure in Organic
            Chemistry with over 25 years of teaching and research experience. He
            has authored 100+ research papers, contributed to 23 books, and
            guided 7 Ph.D. students. His work in Green Chemistry and
            Environmental Sustainability has earned him global recognition,
            including being ranked among the "World Ranking of Top 2%
            Scientists" for four consecutive years by Stanford University. He
            has received prestigious awards such as the Life Time Achievement
            Award by the Association of Chemistry Teachers and the Change Maker
            Humanity Award by Jaipur National University and Bharat Soka Gokkai.
            As Series Editor of Springer's 'Green Chemistry for Sustainability',
            he has overseen 39 titles. Currently, Prof. Sharma serves as a
            Professor of Chemistry and Dean (Research) at JECRC University,
            Jaipur, India, while actively engaging in international professional
            societies.
          </p>
        </div>
      </div>

      <div className="flex w-full justify-center items-center text-center mt-5">
        {/* left */}
        <div className="w-[40%] flex flex-col justify-center items-center gap-4 pt-8 pb-4">
          <Image
            src={JagdevSir}
            alt="dp"
            className="border-[#DE1819] border-4"
            height={300}
            width={300}
          />
          <p className="font-semibold font-montserrat">
            Prof. Jagdev Singh
            <p className="text-sm font-light">HOD Mathematics</p>
          </p>
        </div>
        {/* right */}
        <div className="w-[60%] pr-5">
          <p className="w-full text-start font-montserrat">
            The Department of Mathematics at JECRC University, under the
            leadership of Prof. Jagdev Singh, boasts impressive credentials,
            with Prof. Singh's citations totaling 8783 and an H-index of 55. His
            recognition extends to being ranked among the top 2% of World
            Scientists by Stanford University in 2020, 2021, and 2022, alongside
            prestigious awards like the Obada Prize 2021 and the Riemann Award
            for Young Scientist. The department's commitment to research
            excellence is further evidenced by its active engagement in
            organizing events like the "6th International Conference on
            Mathematical Modeling, Applied Analysis and Computation
            (ICMMAAC-23)" held on 3-5 August, 2023. Through such endeavors, the
            department provides students with invaluable opportunities to engage
            with cutting-edge mathematical research and cultivate their academic
            and professional aspirations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Professors;
