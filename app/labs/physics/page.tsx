"use client";
import React from "react";

const SynthesisLab = () => {
  return (
    <div className="container mx-auto p-4 my-14 font-montserrat">
      <h2 className="text-2xl font-bold mb-4">
        Synthesis Laboratory Description:
      </h2>
      <p className="mb-6">
        The Synthesis Laboratory is primarily set up with primary synthesization
        equipment for preparing Nano-Composite Materials and micro Thin Films.
        It also includes specific application units for testing their properties
        by LCR (Inductance, Capacitance, and Resistance) and Gas Sensing unit.
      </p>

      <div>
        <h3 className="text-xl font-semibold mb-2">Equipment and Tools:</h3>
        <ul className="list-disc pl-6">
          <li>Hydraulic Press For FTIR 10 Tons + Evaluable KBr DIE Set</li>
          <li>Hydrothermal Autoclave</li>
          <li>Programmable Spin Coating Unit</li>
          <li>1200°C Muffle Furnace</li>
          <li>Microprocessor controller-based pH Meter</li>
          <li>Double distillation water unit Borosilicate and quartz made</li>
          <li>Ultrasonic Cleaner</li>
          <li>Magnetic Stirrer with various stirring paddles</li>
          <li>Bench Top Centrifuge Laboratory Centrifuge using Swing Rotor</li>
          <li>LCR Meter with Probe</li>
          <li>Table Top Gas Sensor Unit</li>
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Software:</h3>
        <p>
          WIEN2k (Multi User License): This is the most dominant software for
          calculating electronic structure and properties of solids along with
          additional salient features. Developed by Institute of Materials
          Chemistry, Vienna University of Technology, Austria.
        </p>
      </div>
    </div>
  );
};

export default SynthesisLab;
