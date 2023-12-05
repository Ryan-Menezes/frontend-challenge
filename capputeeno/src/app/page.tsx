'use client'

import styled from 'styled-components'
import { FilterBar } from '@/components/FilterBar'
import { ProductList } from '@/components/ProductsList'

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 24px;
  min-height: 100vh;
  background-color: var(--bg-primary);

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    padding: 34px 160px;
  }
`

export default function Home() {
  return (
    <PageWrapper>
      <FilterBar />
      <ProductList />
    </PageWrapper>
  )
}
