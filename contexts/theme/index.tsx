import type { AppProps } from "next/app";
import { ThemeProvider as Theme } from 'next-themes'
import { themes } from './config'

interface LayoutProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: LayoutProps) {
  return (
    <Theme
      attribute="class"
      forcedTheme={themes[children.props.tenant]}
    >
      {children}
    </Theme>
  )
}
