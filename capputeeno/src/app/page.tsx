'use client'

import { QueryClientProvider, QueryClient } from 'react-query'
import { FilterBar } from '@/components/FilterBar'
import styles from './page.module.css'
import { ProductList } from '@/components/ProductsList'

export default function Home() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <main className={styles.main}>
        <FilterBar />
        <ProductList />
      </main>
    </QueryClientProvider>
  )
}
