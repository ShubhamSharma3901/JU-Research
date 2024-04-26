"use client";

import { Collab_MOU } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Collab_MOU>[] = [
  {
    accessorKey: "Sno",
    header: "S.No.",
  },
  {
    accessorKey: "Name_of_collaborator",
    header: "Name of Collaborator",
  },
  {
    accessorKey: "Address_of_collaborator",
    header: "Address of Collaborator",
  },
  {
    accessorKey: "Brief_description_of_collaboration",
    header: "Brief Description",
  },

  {
    accessorKey: "Date_of_mou",
    header: "Date of MOU",
  },
];
