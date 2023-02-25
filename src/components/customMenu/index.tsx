import { useEffect, useState } from "react";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { menuInputs } from "./interfaces";
import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";
// import { addOrders } from "../../store/orders";

export default function CustomMenu({
  prop,
  options,
  filterHandler,
  setOrders,
}: // filterType,
// filterData,
menuInputs) {
  const [value, setValue] = useState("");
  const Orders = useSelector((store: any) => store?.orders?.orders?.docs);
  // const dispatch = useDispatch();
  // const getOrders = async (filterData: any) => {
  //   await axios
  //     .get(
  //       `https://apimenudev.talabatmenu.com/order?status=${filterData.orderStatus}&orderType=${filterData.orderType}&page=1&paymentStatus=${filterData.payment}&limit=10&pagination=true&sortBy=_id&sortDirection=-1`,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Accept: "application/json",
  //           Authorization:
  //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFhbG11d2FsbGFkQGdtYWlsLmNvbSIsInVzZXJJZCI6IjYzZDMyNWU4MDcwYzY4ODNmOGQzYjgwYyIsInN1cHBsaWVySWQiOiI2M2QzMjVlNzA3MGM2ODgzZjhkM2I4MDgiLCJyb2xlSWQiOiI2M2QyYzc5NWI2MmI5YzM2MzBkNGNmZTkiLCJpYXQiOjE2NzU1MTI4OTl9.0GCewzQdRFGl05dVVLQfrnxQQicyq6culVQ1BGzgzZQ",
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       dispatch(addOrders(res?.data?.data));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   if (value != "") {
  //     switch (filterType) {
  //       case "filterByType":
  //         const ByType = { ...filterData, orderType: value };
  //         getOrders(ByType);
  //         break;
  //       case "filterByStatus":
  //         const ByStatus = { ...filterData, orderStatus: value };
  //         getOrders(ByStatus);
  //         break;
  //       case "filterByPayment":
  //         filterData.payment = value;
  //         const ByPayment = { ...filterData, payment: value };
  //         getOrders(ByPayment);
  //         break;
  //       default:
  //         break;
  //     }
  //   }
  // }, [value]);

  useEffect(() => {
    const FilteredOrders = filterHandler(Orders, value);
    setOrders(FilteredOrders);
  }, [value]);

  return (
    <div className="flex flex-1 top-16 w-56 text-right ">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            className="inline-flex w-full justify-center rounded-full bg-black bg-opacity-20 px-2 xl:px-6 py-2  "
            style={
              window.innerWidth < 1000
                ? {
                    color: "#AEAEAE",
                    backgroundColor: "#f5f5f5",
                    fontSize: "0.6rem",
                  }
                : {
                    color: "#AEAEAE",
                    backgroundColor: "#f5f5f5",
                    fontSize: "1rem",
                  }
            }
          >
            {prop}
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Menu.Items className=" absolute  right-0 left-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {options.map((option) => (
            <div className="py-1 ">
              <Menu.Item>
                <button
                  className={`group flex w-full items-center justify-center rounded-md px-2 py-2 text-sm`}
                  onClick={(e: any) => setValue(e.target.innerText)}
                >
                  {option}
                </button>
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
}
