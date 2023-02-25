import React from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { exportButtonInputs } from "./interfaces";

export default function ExportButton({ tableRef }: exportButtonInputs) {
  return (
    <DownloadTableExcel
      filename="user Orders"
      sheet="Orders"
      currentTableRef={tableRef.current}
    >
      <button
        className="flex flex-1 px-6 py-1 rounded-lg"
        style={{ backgroundColor: "#08979C" }}
      >
        <span className="text-center m-auto text-white py-1">
          export to Excel
        </span>
      </button>
    </DownloadTableExcel>
  );
}
