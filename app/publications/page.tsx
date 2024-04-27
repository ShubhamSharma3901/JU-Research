import { FundedProjects, Publication } from "@/types";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import axios from "axios";
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

const data: Publication[] = [
  // {
  //   Sno: 1,
  //   Name_of_journal: "International Journal of Nanotechnology",
  //   Author: "Sanjay Sharma",
  //   Title_of_journal: "Nanomaterials",
  //   Vol_no: 1,
  //   Iss_No: 1,
  //   pg_No: 1,
  //   Year: "2008",
  //   DOI: "10.1016/j.ijnanot.2008.04.002",
  //   Department: "Chemistry",
  // },
  // {
  //   Sno: 1,
  //   Name_of_journal: "International Journal of Nanotechnology",
  //   Author: "Sanjay Sharma",
  //   Title_of_journal: "Nanomaterials",
  //   Vol_no: 1,
  //   Iss_No: 1,
  //   pg_No: 1,
  //   Year: "2008",
  //   DOI: "10.1016/j.ijnanot.2008.04.002",
  //   Department: "Chemistry",
  // },
  // {
  //   Sno: 1,
  //   Name_of_journal: "International Journal of Nanotechnology",
  //   Author: "Sanjay Sharma",
  //   Title_of_journal: "Nanomaterials",
  //   Vol_no: 1,
  //   Iss_No: 1,
  //   pg_No: 1,
  //   Year: "2008",
  //   DOI: "10.1016/j.ijnanot.2008.04.002",
  //   Department: "Chemistry",
  // },
];

export default async function DemoPage() {
  // const apiData = await axios.post(
  //   `${process.env.NEXT_PUBLIC_APP_URL}/api/publications`
  // );

  return (
    <div className="container mx-auto py-10">
      <div className="mb-6">
        <NavBreadCrumbs
          page={[
            {
              name: "Publications",
              href: "/publications",
            },
          ]}
        />
      </div>
      <DataTable columns={columns} data={data} />
      <div className="my-6">
        <NavBreadCrumbs
          page={[
            {
              name: "Publications",
              href: "/publications",
            },
          ]}
        />
      </div>
    </div>
  );
}
