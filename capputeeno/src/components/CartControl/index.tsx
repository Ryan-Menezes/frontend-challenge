'use client'

import styled from 'styled-components'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { CartIcon } from '../icons/CartIcon'

const CartCount = styled.span`
  width: 17px;
  height: 17px;
  border-radius: 100%;
  padding: 0px 8px;
  background-color: var(--delete-color);
  color: #fff;
  margin-left: -10px;
  font-size: 10px;
`

const Container = styled.div`
  position: relative;
`

export function CartControl() {
  const { value } = useLocalStorage('cart-items', []);

  return (
    <Container>
      <CartIcon />
      {value?.length && <CartCount>{value.length}</CartCount>}
    </Container>
  )
}
