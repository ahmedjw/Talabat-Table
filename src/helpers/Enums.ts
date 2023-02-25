export type TOrderStatus = "New" | "Cloesed" | "inService" | "ServedToTabel";
export type TOrderType = "Pickup" | "To Go" | "Dine in" | "Delivery";
export type TorderPayment = "Not Paid" | "Paid";
export const orderStatus = {
  New: { name: "New Order", Color: "#389E0D" },
  Cloesed: { name: "Cloesed", Color: "#393230" },
  inService: { name: "In Service", Color: "#D46B08" },
  ServedToTabel: { name: "Served To Table", Color: "#08979C" },
} satisfies Record<TOrderStatus, any>;

export const orderTypes = {
  Pickup: { name: "Pick up", Color: "#D46B08" },
  "To Go": { name: "To Go", Color: "#096DD9" },
  "Dine in": { name: "Dine in", Color: "#096DD9" },
  Delivery: { name: "Delivery", Color: "#C02328" },
} satisfies Record<TOrderType, any>;
export const paymentStatus = {
  "Not Paid": { name: "Not Paid", Color: "#C02328" },
  Paid: { name: "Paid", Color: "#389E0D" },
} satisfies Record<TorderPayment, any>;
