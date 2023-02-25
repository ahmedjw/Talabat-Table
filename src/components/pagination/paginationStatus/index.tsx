import React from "react";
import { useSelector } from "react-redux";

export default function PaginationStatus() {
  const data = useSelector((store: any) => store?.orders?.orders);
  return (
    <div className="flex flex-1 px-5" style={{ color: "#A098AE" }}>
      <p className="text-sm">
        {"Showing "}
        <span className="font-medium text-black">
          {data.page * data.limit - 9}
        </span>
        {" - "}
        <span className="font-medium text-black">
          {" "}
          {data.page * data.limit}{" "}
        </span>
        of
        <span className="font-medium text-black"> {data.totalDocs} </span>
        data
      </p>
    </div>
  );
}
