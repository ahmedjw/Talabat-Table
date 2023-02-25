import {
  filterByType,
  filterByPayment,
  filterByStatus,
} from "../../helpers/Functions";
import CustomMenu from "../customMenu";
import CustomDateMenu from "../dateRange/customMenu";
import ExportButton from "../exportButton";
import { headerInputs } from "./interfaces";

//there is 2 ways to filter one from redux and commented one for api (api filter is not working on some categories)
//missed icons is not availble to download in the xd
export default function Header({ tableRef, setOrders }: headerInputs) {
  const ordersTypes = ["New", "Closed", "In Service", "Served To Table"];
  // const defaultData = {
  //   orderStatus: "New%2CProcessing",
  //   orderType: "Pickup",
  //   payment: "paid%2CNot%2CPaid",
  // };
  return (
    <div className="bg-white w-full flex p-5 mt-3 items-center">
      <h1 className="flex-1 flex text-sm lg:text-xl font-bold">
        General Report
      </h1>
      <CustomMenu
        prop="Order type"
        options={["Pickup", "To Go"]}
        filterHandler={filterByType}
        setOrders={setOrders}
        // filterData={defaultData}
        // filterType="filterByType"
      />
      <CustomMenu
        prop="Order status"
        options={ordersTypes}
        filterHandler={filterByStatus}
        setOrders={setOrders}
        // filterData={defaultData}
        // filterType="filterByStatus"
      />
      <CustomMenu
        prop="Payment"
        options={["paid", "Not Paid"]}
        filterHandler={filterByPayment}
        setOrders={setOrders}
        // filterData={defaultData}
        // filterType="filterByPayment"
      />
      <CustomDateMenu prop="01/01/2023 - 06/01/2023" setOrders={setOrders} />
      <ExportButton tableRef={tableRef} />
    </div>
  );
}
