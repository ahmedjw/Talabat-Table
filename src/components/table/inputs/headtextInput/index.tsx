import React from "react";
import HeadProps from "./interfaces";

export default function Head({ content, Style }: HeadProps) {
  return (
    <th scope="col flex-1" className={Style} style={{ color: "#2E2E2E" }}>
      {content}
    </th>
  );
}
