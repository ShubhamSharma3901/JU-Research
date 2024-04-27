"use client";
import React from "react";

const SoftwareTools = () => {
  return (
    <div className="container mx-auto p-4 my-14 font-montserrat">
      <h2 className="text-2xl font-bold mb-4">Software Tools Description:</h2>
      <p className="mb-6">
        The laboratory is equipped with various software tools to facilitate
        research and development in the field of electronics and microprocessor
        programming.
      </p>

      <div>
        <h3 className="text-xl font-semibold mb-2">MATLAB:</h3>
        <p>
          Licensed version 8.4 of MATLAB is available for 30 users. Along with
          MATLAB, Simulink is also provided.
        </p>
        <p>
          <strong>Toolboxes:</strong>
        </p>
        <ul className="list-disc pl-6">
          <li>Simulink</li>
          <li>Signal Processing Toolbox</li>
          <li>DSP System Toolbox</li>
          <li>Control System Toolbox</li>
          <li>Neural Network Toolbox</li>
          <li>Communication System Toolbox</li>
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">MultiSim Software:</h3>
        <p>
          MultiSim software is available for electronic circuit design and
          simulation.
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Keil MicroVision4:</h3>
        <p>
          Keil MicroVision4 software is provided for microprocessor and
          microcontroller programming.
        </p>
      </div>
    </div>
  );
};

export default SoftwareTools;
