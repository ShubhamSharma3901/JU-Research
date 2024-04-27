/* eslint-disable react/display-name */
"use client";

import { FacultyAwards, phd_supervisor } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<FacultyAwards>[] = [
  {
    accessorKey: "SNo",
    header: "S.No.",
    cell: ({ row }) => <p>{row.index + 1}</p>,
  },
  {
    accessorKey: "name",
    header: "Name of Faculty Members",
  },
  {
    accessorKey: "reg_no",
    header: "Designtion of the Faculty Members",
  },
  {
    accessorKey: "department",
    header: "Department of the Faculty Members",
  },
  {
    accessorKey: "award_name",
    header: "Name of the Award",
  },
  {
    accessorKey: "award_date",
    header: "Date of Award",
  },
  {
    accessorKey: "award_body",
    header: "Awarding Body",
  },
];
