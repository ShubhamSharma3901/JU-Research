import { FundedProjects } from "@/types";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import data from "@/json/funded_projects.json";
import NavBreadCrumbs from "@/components/NavBreadCrumbs";

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
      <div className="mb-6">
        <NavBreadCrumbs
          page={[
            {
              name: "Funded-Projects",
              href: "/funded-projects",
            },
          ]}
        />
      </div>
      <DataTable columns={columns} data={data} />
      <div className="my-6">
        <NavBreadCrumbs
          page={[
            {
              name: "Funded-Projects",
              href: "/funded-projects",
            },
          ]}
        />
      </div>
    </div>
  );
}
