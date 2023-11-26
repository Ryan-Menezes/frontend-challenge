import { FilterContext } from '@/context/FilterContext'
import { useContext } from 'react'

export function useFilter() {
  return useContext(FilterContext);
}
