'use client'

import styled from 'styled-components'
import { FilterBar } from '@/components/FilterBar'
import { ProductList } from '@/components/ProductsList'

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function Home() {
  return (
    <PageWrapper>
      <FilterBar />
      <ProductList />
    </PageWrapper>
  )
}
