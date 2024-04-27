import { patents } from "@/types";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import data from "@/json/patents.json";

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

export default async function DemoPage() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data as patents[]} />
    </div>
  );
}
