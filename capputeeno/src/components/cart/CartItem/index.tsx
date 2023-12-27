import { DeleteIcon } from '@/components/icons/DeleteIcon';
import { CartItem as CartItemType } from '@/types/cart-item';
import { formatPrice } from '@/utils/format-price';
import Image from 'next/image';
import { ChangeEvent } from 'react';
import styled from 'styled-components';

interface CartItemProps {
  item: CartItemType
  handleUpdateQuantity: (id: string, quantity: number) => void
  handleDeleteItem: (id: string) => void
}

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 210px;
  width: 100%;
  border-radius: 8px;
  background-color: #fff;
  position: relative;

  button {
    position: absolute;
    top: 16px;
    right: 20px;
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  img {
    max-height: 100%;
    width: 256px;
    border-radius: 8px 0 0 8px;
  }

  > div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;

    padding: 16px 24px;
    width: 100%;

    line-height: 150%;
    color: var(--text-dark-2);

    h4 {
      font-weight: 300;
      font-size: 20px;
    }

    p {
      font-weight: 400;
      font-size: 12px;
      max-height: 50%;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        font-weight: 600;
        font-size: 16px;
        color: var(--shapes-dark);
      }
    }
  }
`

const SelectQuantity = styled.select`
  padding: 8px;
  border: 1.5px solid var(--border-color);
  border-radius: 8px;
  background-color: var(--bg-secondary);
  color: var(--text-dark);
  font-weight: 400;
  font-size: 16px;
`

export function CartItem({ item, handleUpdateQuantity, handleDeleteItem }: CartItemProps) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    handleUpdateQuantity(item.id, Number(e.target.value))
  }

  return (
    <Item>
      <button onClick={() => handleDeleteItem(item.id)} aria-label="Deletar">
        <DeleteIcon />
      </button>
      <Image src={item.image_url} alt={item.name} width={256} height={256} />
      <div>
        <h4>{item.name}</h4>
        <p>{item.description}</p>
        <div>
          <SelectQuantity value={item.quantity} onChange={handleChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </SelectQuantity>
          <span>{formatPrice(item.price_in_cents)}</span>
        </div>
      </div>
    </Item>
  )
}
