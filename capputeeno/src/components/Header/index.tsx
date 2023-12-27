'use client'

import styled from 'styled-components'
import { Saira_Stencil_One } from 'next/font/google'
import { PrimaryInputWSearchIcon } from '../PrimaryInput'
import { CartControl } from '../CartControl'
import { useFilter } from '@/hooks/useFilter'
import { useCallback } from 'react'
import { useRouter } from 'next/navigation'

const sairaStencilOne = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin'],
})

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  background: #ffffff;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    padding: 20px 160px;
  }
`

const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  cursor: pointer;

  @media (min-width: ${props => props.theme.tabletBreakpoint}) {
    font-size: 24px;
  }

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    font-size: 40px;
  }
`

export function Header() {
  const router = useRouter()
  const { search, setSearch } = useFilter()

  const handleNavigateToHome = useCallback(() => {
    router.push('/')
  }, [router])

  return (
    <TagHeader>
      <Logo onClick={handleNavigateToHome} className={sairaStencilOne.className}>
        Capputeeno
      </Logo>
      <div>
        <PrimaryInputWSearchIcon
          value={search}
          handleChange={setSearch}
          placeholder="Procurando por algo específico?"
        />
        <CartControl />
      </div>
    </TagHeader>
  )
}
