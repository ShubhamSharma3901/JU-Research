import { Conferences } from "@/types";
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

const data: Conferences[] = [
  {
    Sno: 1,
    Name_of_conference: "Research and development",
    Date: "7/10/2023",
    href: "/",
  },
  {
    Sno: 2,
    Name_of_conference: "Research and development",
    Date: "7/10/2023",
    href: "/",
  },
  {
    Sno: 3,
    Name_of_conference: "Research and development",
    Date: "7/10/2023",
    href: "/",
  },
  {
    Sno: 4,
    Name_of_conference: "Research and development",
    Date: "7/10/2023",
    href: "/",
  },
  {
    Sno: 5,
    Name_of_conference: "Research and development",
    Date: "7/10/2023",
    href: "/",
  },
];

export default async function DemoPage() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
