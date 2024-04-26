/* eslint-disable react/display-name */
"use client";

import { phd_supervisor } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<phd_supervisor>[] = [
  {
    accessorKey: "SNo",
    header: "S.No.",
    cell: ({ row }) => <p>{row.index + 1}</p>,
  },
  {
    accessorKey: "name",
    header: "Name of Ph.D. Supervisor",
  },
  {
    accessorKey: "designation",
    header: "Designtion of the Ph.D. Supervisor",
  },
  {
    accessorKey: "department",
    header: "Department of the Ph.D. Supervisor",
  },
  {
    accessorKey: "contact_no",
    header: "Phone of the Ph.D. Supervisor",
  },
  {
    accessorKey: "email_id",
    header: "Email of the Ph.D. Supervisor",
  },
];
