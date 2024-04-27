import { Collab_MOU } from "@/types";
import { columns } from "./columns";
import { DataTable } from "./data-table";
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

const data: Collab_MOU[] = [
  // {
  //   Sno: 1,
  //   Name_of_collaborator: "Tanisha Seth",
  //   Address_of_collaborator: "D-147 Durga Marg, Bani Park, Jaipur",
  //   Brief_description_of_collaboration:
  //     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content ",
  //   Date_of_mou: "10/10/2023",
  // },
  // {
  //   Sno: 2,
  //   Name_of_collaborator: "Tanisha Seth",
  //   Address_of_collaborator: "D-147 Durga Marg, Bani Park, Jaipur",
  //   Brief_description_of_collaboration:
  //     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content ",
  //   Date_of_mou: "10/10/2023",
  // },
  // {
  //   Sno: 3,
  //   Name_of_collaborator: "Tanisha Seth",
  //   Address_of_collaborator: "D-147 Durga Marg, Bani Park, Jaipur",
  //   Brief_description_of_collaboration:
  //     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content ",
  //   Date_of_mou: "10/10/2023",
  // },
  // {
  //   Sno: 4,
  //   Name_of_collaborator: "Tanisha Seth",
  //   Address_of_collaborator: "D-147 Durga Marg, Bani Park, Jaipur",
  //   Brief_description_of_collaboration:
  //     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content ",
  //   Date_of_mou: "10/10/2023",
  // },
  // {
  //   Sno: 5,
  //   Name_of_collaborator: "Tanisha Seth",
  //   Address_of_collaborator: "D-147 Durga Marg, Bani Park, Jaipur",
  //   Brief_description_of_collaboration:
  //     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content ",
  //   Date_of_mou: "10/10/2023",
  // },
  // {
  //   Sno: 6,
  //   Name_of_collaborator: "Tanisha Seth",
  //   Address_of_collaborator: "D-147 Durga Marg, Bani Park, Jaipur",
  //   Brief_description_of_collaboration:
  //     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content ",
  //   Date_of_mou: "10/10/2023",
  // },
];

export default async function DemoPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="mb-6">
        <NavBreadCrumbs
          page={[
            {
              name: "COLLABORATIONS & MOU",
              href: "/collab-mou",
            },
          ]}
        />
      </div>
      <DataTable columns={columns} data={data} />
      <div className="my-6">
        <NavBreadCrumbs
          page={[
            {
              name: "COLLABORATIONS & MOU",
              href: "/collab-mou",
            },
          ]}
        />
      </div>
    </div>
  );
}
