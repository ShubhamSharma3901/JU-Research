"use client";

import { Conferences } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Conferences>[] = [
  {
    accessorKey: "Sno",
    header: "S.No.",
  },
  {
    accessorKey: "href",
    header: "Name of Conference",
    // eslint-disable-next-line react/display-name
    cell: ({ row }) => {
      return <a href={row.original.href}>{row.original.Name_of_conference}</a>;
    },
  },
  {
    accessorKey: "Date",
    header: "Date",
  },
];
