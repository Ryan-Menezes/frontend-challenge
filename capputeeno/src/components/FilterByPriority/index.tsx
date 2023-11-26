import styled from 'styled-components'
import { ArrowIcon } from '../icons/ArrowIcon'
import { useCallback, useState } from 'react'
import { useFilter } from '@/hooks/useFilter'
import { PriorityType } from '@/types/priority-type'

interface FilterByPriorityProps {

}

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-dark);
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;

    svg {
      margin-left: 16px;
    }
  }
`

const PriorityFilter = styled.ul`
  position: absolute;
  background: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 12px 16px;
  list-style: none;
  width: 176px;
  top: 100%;
  right: 0;

  li {
    color: var(--text-dark);
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    cursor: pointer;
  }

  li + li {
    margin-top: 4px;
  }
`

export function FilterByPriority(props: FilterByPriorityProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { setPriority } = useFilter();

  const handleHandleOpen = useCallback(() => setIsOpen(prev => !prev), []);
  const handleUpdatePriority = useCallback((value: PriorityType) => {
    setPriority(value)
    setIsOpen(false)
  }, [setPriority])

  return (
    <FilterContainer>
      <button onClick={handleHandleOpen}>
        Organizar por
        <ArrowIcon />
      </button>

      {isOpen && (
        <PriorityFilter>
          <li
            onClick={() => handleUpdatePriority(PriorityType.NEWS)}
          >
            Novidades
          </li>
          <li
            onClick={() => handleUpdatePriority(PriorityType.BIGGEST_PRICE)}
          >
            Preço: Maior - menor
          </li>
          <li
            onClick={() => handleUpdatePriority(PriorityType.MINOR_PRICE)}
          >
            Preço: Menor - maior
          </li>
          <li
            onClick={() => handleUpdatePriority(PriorityType.POPULARITY)}
          >
            Mais vendidos
          </li>
        </PriorityFilter>
      )}
    </FilterContainer>
  )
}
