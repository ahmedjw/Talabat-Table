import { PaginationCustom } from "../paginantionCustom";
import PaginationStatus from "../paginationStatus";

export default function Pagination() {
  return (
    <div className=" flex-1 flex ">
      <div className="py-2 flex flex-1 items-center justify-center lg:gap-x-5 bg-white p-5">
        <PaginationStatus />
        <PaginationCustom />
      </div>
    </div>
  );
}
