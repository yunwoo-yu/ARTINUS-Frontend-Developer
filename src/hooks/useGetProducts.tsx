import { useSuspenseQuery } from '@tanstack/react-query';
import { PRODUCTS_QUERY_KEY } from '../constants/queryKeys';
import { http } from '../utils/http';
import type { Product } from './useGetProductDetail';

interface ProductsParams {
  limit?: number;
  skip?: number;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

const getProducts = async (request: ProductsParams): Promise<ProductsResponse> => {
  const response = await http.get<ProductsResponse>('/products', {
    params: request,
  });

  return response;
};

export const useGetProducts = ({ limit = 20, skip = 0 }: ProductsParams) => {
  return useSuspenseQuery({
    queryKey: PRODUCTS_QUERY_KEY.list([{ limit, skip }]),
    queryFn: () => getProducts({ limit, skip }),
  });
};
