import Head from 'next/head'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { parseCookies } from 'nookies'

import { styled } from '@stitches/react'
import * as Popover from '@radix-ui/react-popover';
import styles from '../../../styles/Home.module.css'
import { GetStaticPaths } from 'next';
import { IPathProps } from '../../../utils/ssr/types';
import { withSSG } from '../../../utils/ssr';

interface ButtonProps {
  size: 'big' | 'small'
}

const Button = styled('button', {
  backgroundColor: '$background',
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid purple',

  variants: {
    size: {
      big: {
        fontSize: 64,
        padding: 20,
      },
      small: {
        fontSize: 10,
        padding: 6,
      }
    }
  }
})

const H1 = styled('h1', {
  margin: '0',
  color: '$text',
  lineHeight: '1.15',
  fontSize: '4rem',
})

const Container = styled('div', {
  padding: '0 2rem',
  background: '$background',
})

const Home = ({ tenant }: IPathProps) => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () =>
    setTheme(theme === "light" ? "dark" : "light")

  return (
    <Container className={styles.container}>
      <Head>
        <title>Promoção {tenant}</title>
        <meta name="description" content="promoção mercapromo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <H1 className={styles.title}>
          Bem-vindo a promoção {tenant}!
        </H1>
      </main>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths<IPathProps> = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps = withSSG(async (ctx, ssgDefaultProps) => {
  return {
    props: {
      ...ssgDefaultProps,
    },
    revalidate: 60 * 5 // 5 minutes
  }
})


export default Home
