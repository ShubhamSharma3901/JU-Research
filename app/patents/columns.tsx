"use client";

import { patents } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<patents>[] = [
  {
    accessorKey: "SNo",
    header: "S.No.",
  },
  {
    accessorKey: "Name",
    header: "Name",
  },
  {
    accessorKey: "Title",
    header: "Title",
  },
  {
    accessorKey: "ApplicationNum",
    header: "Application Number",
  },

  {
    accessorKey: "Status",
    header: "Status",
  },
];
