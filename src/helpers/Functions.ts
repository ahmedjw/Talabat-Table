import { Order } from "../components/table/tableRow/interfaces";

export function getTotal(orders: Order[]): number {
  let result = 0;
  for (let order of orders) {
    result += order.summary.totalWithTax;
  }
  return result;
}

export function filterByType(orders: Order[], value: string): Order[] {
  if (value === "") return orders;
  let result = orders.filter((order) => order.orderType === value);
  return result;
}

export function filterByStatus(orders: Order[], value: string): Order[] {
  if (value === "") return orders;
  let result = orders.filter((order) => order.status === value);
  return result;
}
export function filterByPayment(orders: Order[], value: string): Order[] {
  if (value === "") return orders;
  let result = orders.filter((order) => order.paymentStatus === value);
  return result;
}
