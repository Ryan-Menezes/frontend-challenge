import { CartItem as CartItemType } from '@/types/cart-item';
import Image from 'next/image';
import styled from 'styled-components';

interface CartItemProps {
  item: CartItemType
}

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`

export function CartItem({ item }: CartItemProps) {
  return (
    <Item>
      <Image src={item.image_url} alt={item.name} width={400} height={400} />
      <div>
        <h4></h4>
      </div>
    </Item>
  )
}
