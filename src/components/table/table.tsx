import { treeInputs } from "./interfaces";
import TableHead from "./tableHead";
import TableRow from "./tableRow";

export default function Table({ orders, tableRef }: treeInputs) {
  return (
    <div className="w-full rounded-lg border border-gray-200 shadow-md overflow-x-auto bg-white ">
      <table
        className="bg-white text-left text-sm text-gray-500 w-screen"
        ref={tableRef}
      >
        <TableHead />
        <tbody className="divide-y divide-gray-100 border-t border-gray-100 flex-nowrap ">
          {orders?.map((order, index) => (
            <TableRow order={order} index={index + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
