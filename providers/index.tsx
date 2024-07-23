import React from 'react'
import { HeaderThemeProvider } from '@/providers/HeaderTheme'

import { ThemeProvider } from './Theme'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => (
  <ThemeProvider>
    <HeaderThemeProvider>{children}</HeaderThemeProvider>
  </ThemeProvider>
)
