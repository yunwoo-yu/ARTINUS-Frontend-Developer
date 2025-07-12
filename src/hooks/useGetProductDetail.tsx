import { useSuspenseQuery } from '@tanstack/react-query';
import { PRODUCTS_QUERY_KEY } from '../constants/queryKeys';
import { http } from '../utils/http';

export interface Review {
  comment: string;
  date: string;
  rating: number;
  reviewerEmail: string;
  reviewerName: string;
}

export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  tags: string[];
  availabilityStatus: string;
  dimensions: Dimensions;
  meta: Meta;
  minimumOrderQuantity: number;
  returnPolicy: string;
  reviews: Review[];
  shippingInformation: string;
  sku: string;
  warrantyInformation: string;
  weight: number;
}

const getProductDetail = async (id: number) => {
  const response = await http.get<Product>(`/products/${id}`);

  return response;
};

export const useGetProductDetail = (id: number) => {
  return useSuspenseQuery({
    queryKey: PRODUCTS_QUERY_KEY.detail([id]),
    queryFn: () => getProductDetail(id),
  });
};
