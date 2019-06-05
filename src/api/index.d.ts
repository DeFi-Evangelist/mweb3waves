export interface Coupon {
  id: number;
  rating: number;
  ratings: number;
  title: string;
  shortDescription: string;
  name: string;
  couponPrice: number;
  couponTerm: string;
  oldPrice: string;
  newPrice: string;
  priceTerm: string;
  discount: number;
  longTitle: string;
  longDescription: string;
  status: string;
}

export declare const getCoupons: () => Promise<Coupon[]>;
