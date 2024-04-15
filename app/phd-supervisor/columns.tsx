"use client";

import { phd_supervisor } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<phd_supervisor>[] = [
  {
    accessorKey: "SNo",
    header: "S.No.",
  },
  {
    accessorKey: "Name",
    header: "Name of Ph.D. Supervisor",
  },
  {
    accessorKey: "Designation",
    header: "Designtion of the Ph.D. Supervisor",
  },
  {
    accessorKey: "Department",
    header: "Department of the Ph.D. Supervisor",
  },
];
