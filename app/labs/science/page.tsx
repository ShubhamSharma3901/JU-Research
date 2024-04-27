"use client";
import React, { useState } from "react";

const LaboratoryFacility = () => {
  // Define state variables for equipment and internship count
  const [equipment, setEquipment] = useState([
    "GC-MSUV-VIS SPECTROPHOTOMETER",
    "MICROSCOPE WITH PHOTOGRAPHIC ATTACHMENT",
    "PCR",
    "GEL ELECTROPHORESIS",
    "TRANSILLUMINATOR",
    "CENTRIFUGE",
    "AUTOCLAVE",
    "ULTRASONICATOR",
  ]);
  const [internshipCount, setInternshipCount] = useState(21);

  return (
    <div className="container mx-auto p-4 font-montserrat my-10">
      <h2 className="text-2xl font-bold mb-4">
        Laboratory Facility Description:
      </h2>
      <p className="mb-6">
        The Laboratory is a centralized facility designed to serve students and
        teachers of Science and Life Science subjects. It boasts a comprehensive
        range of sophisticated equipment tailored to facilitate advanced
        research and experimentation.
      </p>

      <div>
        <h3 className="text-xl font-semibold mb-2">Equipment Available:</h3>
        <ul className="list-disc pl-6">
          {equipment.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Internship Program:</h3>
        <p>
          The laboratory has hosted a total of {internshipCount} international
          interns who have successfully completed their internship program,
          gaining hands-on experience and exposure to cutting-edge scientific
          research methodologies.
        </p>
      </div>
    </div>
  );
};

export default LaboratoryFacility;
