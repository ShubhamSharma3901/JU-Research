import { phd_supervisor } from "@/types";
import { columns } from "./columns";
import { DataTable } from "./data-table";

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

const data: phd_supervisor[] = [
  {
    SNo: 1,
    Name: "Dr. Hardik Pathak",
    Designation: "Professor",
    Department: "Biotechnology",
  },
  {
    SNo: 2,
    Name: "Dr. Ekta Menghani",
    Designation: "Professor",
    Department: "Biotechnology",
  },
  {
    SNo: 3,
    Name: "Dr. Nidhi Verma",
    Designation: "Assistant Professor-I",
    Department: "Biotechnology",
  },
  {
    SNo: 4,
    Name: "Dr. Mamta Nathuram Kumawat",
    Designation: "Assistant Professor-I",
    Department: "Biotechnology",
  },
];

export default async function DemoPage() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
