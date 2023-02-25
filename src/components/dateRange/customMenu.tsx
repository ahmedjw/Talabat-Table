import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import DateRange from ".";

export default function CustomDateMenu({ prop, setOrders }: any) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div className="flex flex-1 top-16 w-56 text-right ">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            className="inline-flex w-full justify-center items-center rounded-full bg-black bg-opacity-20 px-2 xl:px-6 py-2  "
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
                    fontSize: "0.6rem",
                  }
            }
          >
            {startDate.toString().slice(4, 15) +
              " - " +
              endDate.toString().slice(4, 15)}
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Menu.Items className=" absolute  right-0 left-30 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 ">
            <Menu.Item>
              <DateRange
                startDate={startDate}
                setStartDate={setStartDate}
                setOrders={setOrders}
                endDate={endDate}
                setEndDate={setEndDate}
              />
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
}
