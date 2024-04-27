import React from "react";

function Overview() {
  return (
    <div
      id={"overview"}
      className="flex flex-col gap-10 w-full laptop:px-[10rem] xsPhone:px-[2rem] py-[5rem] justify-center items-center text-justify text-wrap font-montserrat">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="font-semibold font-playfair tracking-wide tablet:text-4xl xsPhone:text-2xl">
          OVERVIEW
        </h1>
        <hr className="h-[0.4rem] tablet:w-[6rem] xsPhone:w-[4rem] rounded-xl bg-red-500" />
      </div>

      <div>
        <p className="tablet:text-lg xsPhone:text-md leading-relaxed">
          The <b>research and development cell</b> at JECRC University is a
          dynamic hub of multidisciplinary inquiry, driven by a diverse faculty
          with expertise spanning engineering, sciences, humanities, and
          management. Equipped with state-of-the-art facilities including
          specialized laboratories and research centers, the department fosters
          a culture of innovation and collaboration. It actively seeks funding
          and grants to support cutting-edge research endeavors, encourages
          interdisciplinary collaboration, and promotes ethical research
          practices. With a focus on publication, dissemination, and community
          engagement, it empowers students and faculty to address pressing
          challenges and contribute to knowledge creation with local and global
          impact, thereby garnering recognition and fostering a culture of
          excellence in research.
        </p>
      </div>
    </div>
  );
}

export default Overview;
