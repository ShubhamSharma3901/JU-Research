"use client";

import { FundedProjects } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<FundedProjects>[] = [
  {
    accessorKey: "SNo",
    header: "S.No.",
  },
  {
    accessorKey: "ProjectName",
    header: "Name of the Scheme/Project/ Endowments/ Chairs",
  },
  {
    accessorKey: "Investigator",
    header:
      "Name of the Principal Investigator/ Co Investigator (if applicable)",
  },
  {
    accessorKey: "FundingAgency",
    header: "Name of the Funding agency",
  },

  {
    accessorKey: "Department",
    header: "Department",
  },
  {
    accessorKey: "Award",
    header: "Year of Award",
  },
  {
    accessorKey: "Funds",
    header: "Funds provided (INR in lakhs)",
  },
  {
    accessorKey: "Duration",
    header: "Duration of the project",
  },
];
