import { getTotal } from "../../helpers/Functions";
import StatusHeader from "../statusHeader";
import { useSelector } from "react-redux";

export default function StatusHeaders() {
  const orders = useSelector((store: any) => store?.orders?.orders);

  return (
    <div className=" flex-1 justify-start mb-5 mt-5">
      <div className="py-2 flex lg:flex-1 gap-y-3 lg:gap-x-5 lg:flex-row flex-col ">
        <StatusHeader
          Status="Order type"
          imgPath="Images/Activity.svg"
          StatusValue="All"
          customStyle={{ backgroundColor: "#FAFAFA" }}
          customClassName="border px-2"
        />
        <StatusHeader
          Status="Total Orders"
          imgPath="Images/onshoping.svg"
          StatusValue={orders?.totalDocs}
          customClassName="text-red-800 font-bold ml-3"
          customImageStyle="h-1/2"
        />
        <StatusHeader
          Status="Total Amounts "
          imgPath="Images/Activity.svg"
          StatusValue={getTotal(orders?.docs)}
          customClassName="text-orange-400 font-bold ml-3"
        />
      </div>
    </div>
  );
}
