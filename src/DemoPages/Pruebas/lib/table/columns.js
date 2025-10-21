import React from "react";
import { ArrowUpDownIcon } from "../../components/Icons";
import "./columns.css";

export const columns = [
  {
    accessorKey: "fecha",
    header: ({ column }) => {
      return (
        <button
          className="button-sort"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Fecha
          <ArrowUpDownIcon className="arrow-icon" />
        </button>
      );
    }
  },
  {
    accessorKey: "d0",
    header: "d0"
  },
  {
    accessorKey: "d1",
    header: "d1"
  },
  {
    accessorKey: "d2",
    header: "d2"
  },
  {
    accessorKey: "d3",
    header: "d3"
  },
  {
    accessorKey: "d4",
    header: "d4"
  },
  {
    accessorKey: "d5",
    header: "d5"
  },
  {
    accessorKey: "d6",
    header: "d6"
  },
  {
    accessorKey: "d7",
    header: "d7"
  },
  {
    accessorKey: "d8",
    header: "d8"
  },
  {
    accessorKey: "d9",
    header: "d9"
  },
  {
    accessorKey: "d10",
    header: "d10"
  },
  {
    accessorKey: "d11",
    header: "d11"
  },
  {
    accessorKey: "d12",
    header: "d12"
  },
  {
    accessorKey: "d13",
    header: "d13"
  },
  {
    accessorKey: "d14",
    header: "d14"
  },
  {
    accessorKey: "d15",
    header: "d15"
  },
  {
    accessorKey: "d16",
    header: "d16"
  },
  {
    accessorKey: "d17",
    header: "d17"
  },
  {
    accessorKey: "d18",
    header: "d18"
  },
  {
    accessorKey: "d19",
    header: "d19"
  },
  {
    accessorKey: "d20",
    header: "d20"
  }
];
