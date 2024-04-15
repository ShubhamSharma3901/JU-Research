import { FundedProjects } from "@/types";
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

const data: FundedProjects[] = [
  {
    SNo: 1,
    ProjectName:
      "Rural Women Technology Park in Vidhani Village (Sanganer Block, Jaipur District, Rajasthan)",
    Investigator:
      "Prof. J. K. Sharma, Prof. Sapna Sharma,Dr. Ekta Menghani, Prof. Rishi Sharma",
    FundingAgency: "Department of Science and Technology, New Delhi",
    Department: "Biotechnology, Chemistry , Management",
    Award: "2015-16",
    Funds: 70,
    Duration: "36 months",
  },
  {
    SNo: 2,
    ProjectName:
      "Improving and Characterizing the dispersion of multi walled carbon nanotubes in epoxy resin for preparing multifunctional carbon nanotube epoxy with improved mechanical, thermal and electrical properties",
    Investigator: "Dr. Murari Lal Gupta",
    FundingAgency: "Department of Science and Technology, New Delhi",
    Department: "Mechanical Engineering",
    Award: "2015-16",
    Funds: 26.5,
    Duration: "24 Months",
  },
  {
    SNo: 3,
    ProjectName:
      "Search for secondary metabolites with therapeutic potentials from cucurbitaceae plants ",
    Investigator: "Prof. Ekta Menghani",
    FundingAgency:
      "Department of Science and Technology, Government of Rajasthan, Jaipur",
    Department: "Biotechnology",
    Award: "2015-16",
    Funds: 0.1,
    Duration: "12 Months",
  },
  {
    SNo: 4,
    ProjectName:
      'United States-India Science and Technology Endowment Fund Award for funging project "Jaipur Belt (Belt System for body support" ',
    Investigator: "Prof. Aalok Pandeya (Co-Principal Investigator)",
    FundingAgency: "Indo-US Science and Technology Forum (IUSSTF)",
    Department: "Physics ",
    Award: "2015-16",
    Funds: 197.39,
    Duration: "12 Months",
  },
];

export default async function DemoPage() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
