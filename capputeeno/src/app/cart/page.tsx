'use client'

import { BackButton } from '@/components/BackButton'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { CartItem } from '@/types/cart-item'
import { formatPrice } from '@/utils/format-price'
import { useCallback, useMemo } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`

const CartListContainer = styled.div`
  margin-top: 24px;

  h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 150%;
    text-transform: uppercase;
    color: var(--text-dark-2);
  }

  p {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark-2);

    span {
      font-weight: 600;
    }
  }
`

const CartList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  list-style: none;
`

export default function CartPage() {
  const { value } = useLocalStorage<CartItem[]>('cart-items', [])

  const calculateTotal = useCallback((value: CartItem[]) => {
    return value.reduce((sum, item) => sum += (item.price_in_cents * item.quantity), 0)
  }, [])

  const cartTotal = useMemo(() => formatPrice(calculateTotal(value)), [value, calculateTotal])

  return (
    <Container>
      <BackButton navigate="/" />
      <CartListContainer>
        <h3>Seu carrinho</h3>
        <p>
          Total {value.length} produtos
          <span>{cartTotal}</span>
        </p>

        <CartList>
          {value.map(item => item.name)}
        </CartList>
      </CartListContainer>
    </Container>
  )
}
