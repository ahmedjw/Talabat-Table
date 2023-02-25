import {
  TorderPayment,
  TOrderStatus,
  TOrderType,
} from "../../../helpers/Enums";

export interface rowInputs {
  order: Order;
  index: number;
}
export interface Order {
  _id: string;
  supplierId: string;
  restaurantId: {
    _id: string;
    name: string;
    nameAr: string;
  };
  customerId: null | number;
  tableId: any;
  waiterId: null | number;
  kitchenQueueId: {
    _id: string;
    name: string;
    nameAr: string;
  };
  cashierId: null | number;
  groupId: null | number;
  orderNumber: string;
  name: string;
  contactNumber: string;
  source: string;
  orderType: TOrderType;
  status: TOrderStatus;
  isScheduled: boolean;
  isGrouped: boolean;
  scheduledDateTime: string;
  items: [
    {
      menuItem: {
        menuItemId: string;
        name: string;
        nameAr: string;
        description: string;
        descriptionAr: null | string;
        unitPriceBeforeDiscount: number;
        amountBeforeDiscount: number;
        unitPriceDiscount: number;
        discount: number;
        unitPriceAfterDiscount: number;
        amountAfterDiscount: number;
        itemTaxableAmount: number;
        tax: number;
        taxEnabled: number;
        priceInStar: number;
        starGain: 9;
        calories: number;
        image: string;
        alergies: [];
        preparationTime: number;
      };
      additions: [];
      unitPriceBeforeDiscount: number;
      amountBeforeDiscount: number;
      unitPriceDiscount: number;
      discount: number;
      unitPriceAfterDiscount: number;
      amountAfterDiscount: number;
      itemTaxableAmount: number;
      tax: number;
      quantity: number;
      notes: string;
      preparationTime: number;
      preparationStatus: string;
      _id: string;
    }
  ];
  paymentStatus: TorderPayment;
  tableFee: {
    fee: number;
    netBeforeTax: number;
    tax: number;
  };
  summary: {
    totalBeforeDiscount: number;
    discount: number;
    totalWithTax: number;
    totalTaxableAmount: number;
    totalTax: number;
    totalPaid: number;
    totalRefunded: number;
    headerDiscount: number;
  };
  taxRate: number;
  transactions: [];
  menuQrCodeScannedTime: string;
  sentToKitchenTime: null;
  orderReadyTime: null;
  paymentTime: null;
  sittingStartTime: null;
  couponCode: string;
  addedBy: string;
  deliveryAddress: {
    latitude: string;
    longitude: string;
  };
  preparationDetails: {
    preparationTime: number;
    expectedStartTime: string;
    expectedEndTime: string;
    actualStartTime: string;
    actualEndTime: string;
    kitchenSortingNumber: number;
  };
  chefRequestedClarification: false;
  chefInquiry: [];
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}
