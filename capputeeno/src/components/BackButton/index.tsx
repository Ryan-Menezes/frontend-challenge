'use client'

import styled from 'styled-components'
import { BackIcon } from '../icons/BackIcon'
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface BackButtonProps {
  navigate: string;
}

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: var(--secondary-text);
  backgound: transparent;
  border: none;
  cursor: pointer;
`

export function BackButton({ navigate }: BackButtonProps) {
  const router = useRouter();

  const handleNavigate = useCallback(() => {
    router.push(navigate)
  }, [router, navigate])

  return (
    <Button onClick={handleNavigate}>
      <BackIcon />
      Voltar
    </Button>
  )
}
