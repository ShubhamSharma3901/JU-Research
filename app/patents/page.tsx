import { patents } from "@/types";
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

const data: patents[] = [
  {
    SNo: 1,
    Name: "P. Shivani Singh",
    Title: "PAPER SOAP TAPE",
    ApplicationNum: "202011027792",

    Status: "	Published",
  },
  {
    SNo: 2,
    Name: "Mohit Kumar Sharma Dr. Arun Kumar Ramandeep Gill",
    Title: "SYSTEM AND METHOD FOR DISTRIBUTING COLLECTED TAX",
    ApplicationNum: "202011027793",

    Status: "	Published",
  },
  {
    SNo: 3,
    Name: "Dr. Dinesh Kumar Sethi",
    Title: "SMART STICK FOR DISABLED PERSON",
    ApplicationNum: "202011027794",

    Status: "	Published",
  },
  {
    SNo: 4,
    Name: "Dr. Dinesh Kumar Dharamdasani",
    Title: "DIGITAL NUMBER PLATE SYSTEM	",
    ApplicationNum: "202211011688",

    Status: "	Published",
  },
  {
    SNo: 5,
    Name: "Dr. Deepak Dembla",
    Title: "AUTOMATED SURFACE RESTORATION AND PAINTING ASSISTIVE DEVICE",
    ApplicationNum: "202211041418",

    Status: "	Published",
  },
  {
    SNo: 6,
    Name: "Dr. Manoj",
    Title: "Ladle",
    ApplicationNum: "361918-001",

    Status: "Design Registered",
  },
];

export default async function DemoPage() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
