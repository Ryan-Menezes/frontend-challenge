'use client'

import { BackButton } from '@/components/BackButton'
import { Divider } from '@/components/Divider'
import { CartItem } from '@/components/cart/CartItem'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { CartItem as CartItemType } from '@/types/cart-item'
import { formatPrice } from '@/utils/format-price'
import { useCallback, useMemo } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 32px;

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    flex-direction: row;
  }
`

const CartListContainer = styled.div`
  h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 150%;
    text-transform: uppercase;
    color: var(--text-dark-2);
    margin-top: 24px;
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
  gap: 16px;
  margin-top: 24px;
`

const CartResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #fff;
  min-width: 352px;
  padding: 16px 24px;

  h3 {
    font-weight: 600;
    font-size: 20px;
    color: var(--text-dark-2);
    text-transform: uppercase;
    margin-bottom: 30px;
  }
`

const TotalItem = styled.div<{ isBold: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-weight: ${props => props.isBold ? '600' : '400'};
  font-size: 16px;
  line-height: 150%;
  margin-bottom: 12px;
`

const ShopBtn = styled.button`
  color: #fff;
  border-radius: 4px;
  background-color: var(--success-color);
  padding: 12px;
  width: 100%;
  border: none;
  text-transform: uppercase;
  margin-top: 40px;
  cursor: pointer;
`

export default function CartPage() {
  const { value, updateLocalStorage } = useLocalStorage<CartItemType[]>('cart-items', [])

  const calculateTotal = useCallback((value: CartItemType[]) => {
    return value.reduce((sum, item) => sum += (item.price_in_cents * item.quantity), 0)
  }, [])

  const cartTotal = useMemo(() => formatPrice(calculateTotal(value)), [value, calculateTotal])
  const deliveryFee = 4000
  const cartTotalWithDelivery = useMemo(() => formatPrice(calculateTotal(value) + deliveryFee), [value, calculateTotal])

  const handleUpdateQuantity = useCallback((id: string, quantity: number) => {
    const newValue = value.map(item => {
      if (item.id !== id) return item
      return {...item, quantity}
    })

    updateLocalStorage(newValue)
  }, [value, updateLocalStorage])

  const handleDeleteItem = useCallback((id: string) => {
    const newValue = value.filter(item => item.id !== id)
    updateLocalStorage(newValue)
  }, [value, updateLocalStorage])

  return (
    <Container>
      <CartListContainer>
        <BackButton navigate="/" />

        <h3>Seu carrinho</h3>
        <p>
          Total {value.length} produtos
          <span>{cartTotal}</span>
        </p>

        <CartList>
          {value.map(item => <CartItem
            key={item.id}
            item={item}
            handleUpdateQuantity={handleUpdateQuantity}
            handleDeleteItem={handleDeleteItem}
          />)}
        </CartList>
      </CartListContainer>
      <CartResultContainer>
        <h3>Resumo do pedido</h3>

        <TotalItem isBold={false}>
          <p>Subtotal de produtos</p>
          <p>{cartTotal}</p>
        </TotalItem>
        <TotalItem isBold={false}>
          <p>Entrega</p>
          <p>{formatPrice(deliveryFee)}</p>
        </TotalItem>

        <Divider />

        <TotalItem isBold={true}>
          <p>Total</p>
          <p>{cartTotalWithDelivery}</p>
        </TotalItem>

        <ShopBtn>Finalizar compra</ShopBtn>
      </CartResultContainer>
    </Container>
  )
}
