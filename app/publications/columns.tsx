"use client";

import { FundedProjects, Publication } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Publication>[] = [
  {
    accessorKey: "Sno",
    header: "S.No.",
  },
  {
    accessorKey: "Name_of_journal",
    header: "Name of the Journal",
  },
  {
    accessorKey: "Title_of_journal",
    header: "Title",
  },
  {
    accessorKey: "Author",
    header: "Author",
  },
  {
    accessorKey: "Department",
    header: "Department",
  },

  {
    accessorKey: "Vol_no",
    header: "Volume No.",
  },
  {
    accessorKey: "Iss_No",
    header: "Issue No.",
  },
  {
    accessorKey: "pg_No",
    header: "Page No.",
  },
  {
    accessorKey: "Year",
    header: "Year",
  },
  {
    accessorKey: "DOI",
    header: "DOI",
  },
];
