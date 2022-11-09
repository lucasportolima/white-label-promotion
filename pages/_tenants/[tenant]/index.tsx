import Head from 'next/head'
import { styled } from '@stitches/react'
import { GetStaticPaths } from 'next';

import styles from '../../../styles/Home.module.css'
import { IPathProps } from '../../../utils/ssr/types';
import { withSSG } from '../../../utils/ssr';

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
