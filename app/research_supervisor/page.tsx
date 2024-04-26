"use client";
import Reseach_Dropdowns from "@/components/Reseach_Dropdowns";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import dataSuperviser from "@/json/supervisors.json";
import { useEffect, useState } from "react";

// async function getData(): Promise<FundedProjects[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//     // ...
//   ];
// }

export default function DemoPage() {
  const [departmentToShow, setDepartmentToShow] = useState<string>("");
  const [data, setData] = useState<any>();

  useEffect(() => {
    setData(
      dataSuperviser.filter((item) => item.department === departmentToShow)
    );
  }, [departmentToShow]);
  return (
    <div className="container mx-auto py-10">
      <Reseach_Dropdowns setDepartmentToShow={setDepartmentToShow} />
      {data && departmentToShow != "" && (
        <DataTable columns={columns} data={data} />
      )}
    </div>
  );
}
