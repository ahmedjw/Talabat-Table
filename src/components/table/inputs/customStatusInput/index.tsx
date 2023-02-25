import React from "react";
import statusInputProps from "./interfaces";

export default function CustomStatusInput({
  content,
  Color,
}: statusInputProps) {
  return (
    <td className="px-6 py-4">
      <span
        className={`inline-flex items-center gap-1 rounded-full  px-2 py-1 text-xs font-semibold ${Color}`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
        {content}
      </span>
    </td>
  );
}
