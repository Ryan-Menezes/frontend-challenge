import { formatPrice } from '@/utils/format-price'
import Image from 'next/image'
import styled from 'styled-components'

interface ProductCardProps {
  image: string
  title: string
  price: number
}

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.4);
  background-filter: blur(10px);
  border-radius: 0px 0px 4px 4px;
  width: 256px;

  img {
    width: 256px;
    height: 300px;
  }

  h3 {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark-2);
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: var(--shapes-dark);
  }

  div {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    padding: 8px 0;

    > div {
      width: 228px;
      height: 1px;
      background: var(--shapes);
      margin: 8px 0;
      padding: 0;
    }
  }
`

export function ProductCard({ image, title, price }: ProductCardProps) {
  const priceFormated = formatPrice(price)

  return (
    <Card>
      <Image src={image} alt={title} width={256} height={300} />

      <div>
        <h3>{title}</h3>
        <div></div>
        <p>{priceFormated}</p>
      </div>
    </Card>
  )
}