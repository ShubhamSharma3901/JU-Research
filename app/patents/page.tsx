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
    Patent_title: "PAPER SOAP TAPE",
    ApplicationNum: "202011027792",

    Status: "	Published",
  },
  {
    SNo: 2,
    Name: "Mohit Kumar Sharma Dr. Arun Kumar Ramandeep Gill",
    Patent_title: "SYSTEM AND METHOD FOR DISTRIBUTING COLLECTED TAX",
    ApplicationNum: "202011027793",

    Status: "	Published",
  },
  {
    SNo: 3,
    Name: "Dr. Dinesh Kumar Sethi",
    Patent_title: "SMART STICK FOR DISABLED PERSON",
    ApplicationNum: "202011027794",

    Status: "	Published",
  },
  {
    SNo: 4,
    Name: "Dr. Dinesh Kumar Dharamdasani",
    Patent_title: "DIGITAL NUMBER PLATE SYSTEM	",
    ApplicationNum: "202211011688",

    Status: "	Published",
  },
  {
    SNo: 5,
    Name: "Dr. Deepak Dembla",
    Patent_title: "AUTOMATED SURFACE RESTORATION AND PAINTING ASSISTIVE DEVICE",
    ApplicationNum: "202211041418",

    Status: "	Published",
  },
  {
    SNo: 6,
    Name: "Dr. Manoj",
    Patent_title: "Ladle",
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
