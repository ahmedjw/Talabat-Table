import { Dispatch, SetStateAction } from "react";
import { Order } from "../table/tableRow/interfaces";

export interface headerInputs {
  tableRef: any;
  setOrders:
    | any
    | Dispatch<SetStateAction<Order[]>>
    | SetStateAction<undefined>;
}
