import { Dispatch, SetStateAction } from "react";
import { Order } from "../table/tableRow/interfaces";

export interface menuInputs {
  prop: String;
  options: String[];
  filterHandler?: any;
  setOrders?: any | Dispatch<SetStateAction<Order[]>> | undefined;
  filterData?: filterData;
  filterType?: string;
}

export interface filterData {
  orderStatus?: string;
  orderType?: string;
  payment?: string;
}
