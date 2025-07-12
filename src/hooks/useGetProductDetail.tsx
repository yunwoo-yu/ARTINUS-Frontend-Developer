import { useSuspenseQuery } from '@tanstack/react-query';
import { PRODUCTS_QUERY_KEY } from '../constants/queryKeys';
import { http } from '../utils/http';

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
  tags: string[];
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
