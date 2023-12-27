'use client'

import styled from 'styled-components'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { CartIcon } from '../icons/CartIcon'
import { CartItem } from '@/types/cart-item'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

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

const Container = styled.button`
  position: relative;
  cursor: pointer;
  border: none;
  background-color: transparent;
`

export function CartControl() {
  const router = useRouter()
  const { value } = useLocalStorage<CartItem[]>('cart-items', []);

  const handleNavigateToCart = useCallback(() => {
    router.push('/cart')
  }, [router])

  return (
    <Container onClick={handleNavigateToCart}>
      <CartIcon />
      {value?.length > 0 && <CartCount>{value.length}</CartCount>}
    </Container>
  )
}
