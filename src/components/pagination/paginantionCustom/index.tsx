import { useCallback, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { addOrders } from "../../../store/orders";

function CustomButton({ content, onClick, active, disabled }: any) {
  return (
    <button
      className={`flex flex-col cursor-pointer text-red-500 items-center justify-center w-9 h-9  shadow-[0_4px_10px_rgba(0,0,0,0.03)] text-sm font-normal transition-colors rounded-lg 
      ${active ? "bg-red-500 text-white" : "text-red-500"}
      ${
        !disabled
          ? "bg-white hover:bg-red-500 hover:text-white"
          : "text-red-300 bg-white cursor-not-allowed"
      }
      `}
      style={
        active ? { backgroundColor: "#C02328" } : { backgroundColor: "white" }
      }
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

function PaginationNav({
  gotoPage,
  canPreviousPage,
  canNextPage,
  pageCount,
  pageIndex,
  data,
}: any) {
  const renderPageLinks = useCallback((): any => {
    if (pageCount === 0) return null;
    const visiblePageButtonCount = 3;
    let numberOfButtons =
      pageCount < visiblePageButtonCount ? pageCount : visiblePageButtonCount;
    const pageIndices = [pageIndex];
    numberOfButtons--;
    [...Array(numberOfButtons)].forEach((_item, itemIndex) => {
      const pageNumberBefore = pageIndices[0] - 1;
      const pageNumberAfter = pageIndices[pageIndices.length - 1] + 1;
      if (pageNumberAfter <= data?.totalPages) {
        pageIndices.push(pageNumberAfter);
      } else if (
        pageNumberBefore >= 0 &&
        (itemIndex < numberOfButtons / 2 || pageNumberAfter > pageCount - 1)
      ) {
        pageIndices.unshift(pageNumberBefore);
      }
    });
    return pageIndices.map((pageIndexToMap) => (
      <li key={pageIndexToMap}>
        <CustomButton
          data={data}
          pageIndex={pageIndex}
          content={pageIndexToMap}
          onClick={() => gotoPage(pageIndexToMap)}
          active={pageIndexToMap === data?.page}
        />
      </li>
    ));
  }, [pageCount, pageIndex]);
  return (
    <ul className="flex gap-2">
      <li>
        <CustomButton
          content={
            <div className="flex ml-1">
              <FaChevronLeft size="0.6rem" />
              <FaChevronLeft size="0.6rem" className="-translate-x-1/2" />
            </div>
          }
          onClick={() => gotoPage(1)}
          disabled={!canPreviousPage}
        />
      </li>
      {renderPageLinks()}
      <li>
        <CustomButton
          content={
            <div className="flex ml-1">
              <FaChevronRight size="0.6rem" />
              <FaChevronRight size="0.6rem" className="-translate-x-1/2" />
            </div>
          }
          onClick={() => gotoPage(data?.totalPages)}
          disabled={!canNextPage}
        />
      </li>
    </ul>
  );
}

function PaginationCustom() {
  const [pageIndex, setPageIndex] = useState(0);
  const data = useSelector((store: any) => store?.orders?.orders);
  const dispatch = useDispatch();
  const Url = "https://apimenudev.talabatmenu.com/";
  const getOrders = async (pageIndex: any) => {
    await axios
      .get(
        Url +
          `order?status=New%2CProcessing&page=${pageIndex}&limit=10&pagination=true&sortBy=_id&sortDirection=-1`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFhbG11d2FsbGFkQGdtYWlsLmNvbSIsInVzZXJJZCI6IjYzZDMyNWU4MDcwYzY4ODNmOGQzYjgwYyIsInN1cHBsaWVySWQiOiI2M2QzMjVlNzA3MGM2ODgzZjhkM2I4MDgiLCJyb2xlSWQiOiI2M2QyYzc5NWI2MmI5YzM2MzBkNGNmZTkiLCJpYXQiOjE2NzU1MTI4OTl9.0GCewzQdRFGl05dVVLQfrnxQQicyq6culVQ1BGzgzZQ",
          },
        }
      )
      .then((res) => {
        dispatch(addOrders(res?.data?.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (pageIndex >= 0 && pageIndex <= data?.totalPages) {
      getOrders(pageIndex);
    }
  }, [pageIndex]);
  return (
    <div className="flex flex-1 flex-wrap px-5 justify-end">
      <div className=" flex">
        <PaginationNav
          data={data}
          gotoPage={setPageIndex}
          canPreviousPage={data?.prevPage != null}
          canNextPage={data?.nextPage != null}
          pageCount={data?.totalPages}
          pageIndex={data?.page}
        />
      </div>
    </div>
  );
}

export { PaginationCustom };
