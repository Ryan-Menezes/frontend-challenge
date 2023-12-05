'use client'

import { FilterBar } from '@/components/FilterBar'
import styles from './page.module.css'
import { ProductList } from '@/components/ProductsList'

export default function Home() {
  return (
    <main className={styles.main}>
      <FilterBar />
      <ProductList />
    </main>
  )
}
