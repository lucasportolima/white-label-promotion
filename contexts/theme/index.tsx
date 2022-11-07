import type { AppProps } from "next/app";
import { ThemeProvider as Theme } from 'next-themes'
import { themes } from './config'

interface LayoutProps {
  children: any
}

export function ThemeProvider({ children }: LayoutProps) {
  const theme = themes(children?.props.tenant) 
  return (
    <Theme
      attribute="class"
      forcedTheme={theme}
    >
      {children}
    </Theme>
  )
}
