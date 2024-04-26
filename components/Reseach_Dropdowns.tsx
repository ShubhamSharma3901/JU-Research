"use client";
import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import Select from "react-select";
import data from "@/json/schools_dept.json";
import dataSupervisor from "@/json/supervisors.json";

function Reseach_Dropdowns({
  setDepartmentToShow,
}: {
  setDepartmentToShow: Dispatch<SetStateAction<string>>;
}) {
  const [school, setSchool] = useState<{
    SchoolName: string;
    Departments: {
      DepartmentName: string;
    }[];
  }>();
  const [department, setDepartment] = useState<{
    DepartmentName: string;
  }>();
  const [departmentsList, setDepartmentsList] = useState<any>([]);

  const handleSchoolChange = (obj: {
    SchoolName: string;
    Departments: {
      DepartmentName: string;
    }[];
  }) => {
    setSchool(obj);
    setDepartmentsList(obj.Departments);
    setDepartment({ DepartmentName: "" });
  };
  const handleDepartmentChange = (obj: { DepartmentName: string }) => {
    setDepartment(obj);
    setDepartmentToShow(obj.DepartmentName);
  };
  console.log(school, department, departmentsList);
  return (
    <div className="font-montserrat pb-20">
      <b>Schools:</b>
      <Select
        placeholder="Select Schools"
        value={school}
        options={data}
        onChange={(obj) => handleSchoolChange(obj!)}
        className="font-montserrat"
        getOptionLabel={(x) => x.SchoolName}
        getOptionValue={(x) => x.SchoolName}
      />
      <br />
      <b>Departments:</b>
      <Select
        placeholder="Select Department"
        value={department}
        className="font-montserrat"
        options={departmentsList}
        onChange={(obj) => handleDepartmentChange(obj!)}
        getOptionLabel={(x) => x.DepartmentName}
        getOptionValue={(x) => x.DepartmentName}
      />
    </div>
  );
}

export default Reseach_Dropdowns;
