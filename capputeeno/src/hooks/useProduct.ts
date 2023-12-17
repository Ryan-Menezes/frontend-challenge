import { ProductFetchResponse } from '@/types/products-response';
import axios, { AxiosPromise } from 'axios';
import { useQuery } from 'react-query';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string

const fetcher = (id: string): AxiosPromise<ProductFetchResponse> => {
  return axios.post(API_URL, {
    query: `
      query {
        Product(id: "${id}") {
          id,
          name,
          description,
          category,
          price_in_cents,
          image_url
        }
      }
    `
  })
}

export function useProduct(id: string) {
  const { data } = useQuery({
    queryFn: () => fetcher(id),
    queryKey: ['product', id],
    enabled: !!id,
    staleTime: 1000 * 60 * 5
  });

  return {
    data: data?.data?.data?.Product
  }
}
