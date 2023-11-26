import { ProductsFetchResponse } from '@/types/products-response'
import axios, { AxiosPromise } from 'axios'
import { useQuery } from 'react-query'

const API_URL = process.env.NEXT_PUBLIC_API_URL as string

const fetcher = (): AxiosPromise<ProductsFetchResponse> => {
  return axios.post<ProductsFetchResponse>(
    API_URL,
    {
      query: `
        query {
          allProducts {
            id,
            name,
            price_in_cents,
            image_url
          }
        }
      `
  })
}

export function useProducts() {
  const { data } = useQuery({
    queryFn: fetcher,
    queryKey: ['products']
  })

  return {
    data: data?.data?.data?.allProducts
  }
}
