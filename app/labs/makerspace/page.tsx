"use client";
import React from "react";

const Makerspace = () => {
  return (
    <div className="container mx-auto p-4 my-14 font-montserrat">
      <h2 className="text-2xl font-bold mb-4">MAKERSPACE Description:</h2>
      <p className="mb-6">
        MAKERSPACE is a pioneering concept in India, providing students with a
        platform to showcase their innovative ideas and transform them into
        reality. Rajasthan’s first MAKERSPACE was established in JECRC
        University and was inaugurated by Mr. Hastikaji, Vice President of TCS,
        on 16th August 2018. It is fully equipped with a wide array of tools and
        resources, providing a collaborative environment for students with a
        penchant for invention and innovation.
      </p>

      <div>
        <h3 className="text-xl font-semibold mb-2">Collaborations:</h3>
        <p>
          JUMakerspace has signed Memorandums of Understanding (MOUs) with
          several esteemed organizations, including:
        </p>
        <ul className="list-disc pl-6">
          <li>TechMahindra</li>
          <li>Cisco</li>
          <li>Nasscom</li>
          <li>Aerobott</li>
          {/* Add more collaborators if necessary */}
        </ul>
      </div>
    </div>
  );
};

export default Makerspace;
