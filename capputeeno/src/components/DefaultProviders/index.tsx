'use client'

import { FilterContextProvider } from '@/context/FilterContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';

interface DefaultProviders {
  children: React.ReactNode
}

const theme = {
  desktopBreakpoint: '768px',
}

export function DefaultProviders({ children }: DefaultProviders) {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <FilterContextProvider>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </FilterContextProvider>
    </QueryClientProvider>
  )
}
