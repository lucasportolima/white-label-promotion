import type { AppProps } from "next/app";
import { ThemeProvider as Theme } from 'next-themes'
import { darkTheme } from './config'

interface LayoutProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: LayoutProps) {
  console.log(children)
  return (
    <Theme
      attribute="class"
      defaultTheme="system"
      value={{
        light: "light",
        dark: darkTheme.className
      }}
    >
      {children}
    </Theme>
  )
}
