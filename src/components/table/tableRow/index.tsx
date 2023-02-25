import { orderStatus, orderTypes, paymentStatus } from "../../../helpers/Enums";
import CustomTextInput from "../inputs/customTextInput";
import { rowInputs } from "./interfaces";
import { useSelector } from "react-redux";

export default function TableRow({ order, index }: rowInputs) {
  const page = useSelector((store: any) => store?.orders?.orders?.page);
  const pageCount = (page - 1) * 10 + index;
  return (
    <tr className="hover:bg-gray-50 flex flex-nowrap text-xs lg:text-sm items-center justify-start">
      <td className={pageCount == 10 ? "px-5 py-6" : "px-6 py-6"}>
        {pageCount}
      </td>
      <td className="py-6 px-6 flex-1 " style={{ color: "#2E2E2E" }}>
        {order?.restaurantId?.name}
      </td>
      <CustomTextInput
        content={orderStatus[order?.status]?.name}
        Color={orderStatus[order?.status]?.Color}
      />
      <td
        className="flex flex-1 flex-col px-6   py-4"
        style={{ color: "#A098AE" }}
      >
        <span className="flex text-center ">
          Jan 1, 2022
          {/* {order.createdAt.slice(0, 19)} */}
        </span>
        <span className="flex text-center">08:22 AM</span>
      </td>
      <CustomTextInput
        content={orderTypes[order?.orderType]?.name}
        Color={orderTypes[order?.orderType].Color}
      />
      <td className="py-6 flex-1 " style={{ color: "#2E2E2E" }}>
        {order.tableId != null ? "table" + order?.tableId.name : "No table"}
      </td>
      <td className="py-6 flex-1" style={{ color: "#2E2E2E" }}>
        {order?.orderNumber}
      </td>
      <CustomTextInput
        content={paymentStatus[order?.paymentStatus]?.name}
        Color={paymentStatus[order?.paymentStatus].Color}
      />
      <td className="py-6 flex-1 text-primary" style={{ color: "#2E2E2E" }}>
        {order?.paymentStatus}
      </td>
      <td className="py-6 flex-1" style={{ color: "#2E2E2E" }}>
        {order?.summary?.totalWithTax.toFixed()}
      </td>
      <td className="py-6 flex-1" style={{ color: "#2E2E2E" }}>
        ahmed jwifel
        {/* there is no data for this col in Api so I use mock data here {name is always null} */}
      </td>
      <td className="py-6 px-6 flex-1" style={{ color: "#2E2E2E" }}>
        +0970592588888
        {/* there is no data for this col in Api so I use mock data here {contactNumber is null always} */}
      </td>
    </tr>
  );
}
