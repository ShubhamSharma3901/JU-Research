import React from "react";
import Image from "next/image";
import SanjaySir from "@/public/SanjaySir.jpeg";
// import JagdevSir from "@/public/Ja.jpeg";

const Professors = () => {
  return (
    <div>
      <div className="flex w-[90%] justify-center items-center text-center">
        {/* left */}
        <div className="w-[]">
          <Image
            src={SanjaySir}
            alt="dp"
            className=""
            height={400}
            width={400}
          />
          <p>Prof. Sanjay K. Sharma, FRSC</p>
        </div>
        {/* right */}
        <div className="w-2/3">
          <p className="w-">
            Prof. Sanjay K. Sharma, FRSC, a Fellow of the Royal Society of
            Chemistry (UK), is a distinguished figure in the field of Organic
            Chemistry, with a Ph.D. from Rajasthan University, Jaipur, India.
            With over 25 years of teaching and research experience, he has
            authored over 100 research papers, contributed to 23 books from
            esteemed publication houses, and guided 7 Ph.D. students, with 4
            currently under his supervision. His significant contributions to
            Green Chemistry and Environmental Sustainability have earned him
            recognition, including inclusion in the "World Ranking of Top 2%
            Scientists" for four consecutive years (2019, 2020, 2022, and 2023)
            by Stanford University, USA. Noteworthy accolades include the Life
            Time Achievement Award by the Association of Chemistry Teachers, the
            Change Maker Humanity Award by Jaipur National University and Bharat
            Soka Gokkai, and the Choice OAT Award Winner 2021 for his title
            'Bioremediation: A Sustainable Approach to Preserving Earth’s
            Water'. As Series Editor of Springer's 'Green Chemistry for
            Sustainability', he has overseen the editing of 39 titles. Prof.
            Sharma is currently serving as a Professor of Chemistry and Dean
            (Research) at JECRC University, Jaipur, India, while being an active
            member of various international professional societies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Professors;
