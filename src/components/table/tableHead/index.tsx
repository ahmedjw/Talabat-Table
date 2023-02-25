import React from "react";
import Head from "../inputs/headtextInput";

export default function TableHead() {
  return (
    <thead>
      <tr className="flex items-center flex-nowrap text-xs lg:text-sm">
        <Head content="#" Style="px-6 py-4 font-bold " />
        <Head content="Branch" Style="px-6 py-4 font-bold flex-1" />
        <Head content="Order Status" Style=" py-4 font-bold flex-1 " />
        <Head content="Time" Style="py-4 px-6 font-bold flex-1" />
        <Head content="Order Type" Style="py-4 font-bold flex-1" />
        <Head content="Table" Style=" py-4 font-bold flex-1" />
        <Head content="Order No." Style=" py-4 font-bold flex-1" />
        <Head content="Payment" Style=" py-4 font-bold flex-1 " />
        <Head content="Payment Method" Style=" py-4 font-bold flex-1" />
        <Head content="Total" Style=" py-4 font-bold flex-1" />
        <Head content="Customer Name" Style=" py-4 font-bold flex-1 " />
        <Head content="Customer Number" Style=" px-6 py-4  font-bold flex-1" />
      </tr>
    </thead>
  );
}
