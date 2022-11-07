import { GetStaticPaths } from 'next'
import { parseCookies } from 'nookies'

import { IPathProps } from './types'
import  { withSSG } from './withSSG'
export { withSSG } from './withSSG'

export const getStaticPaths: GetStaticPaths<IPathProps> = async () => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps = withSSG(async (ctx, ssgDefaultProps) => {
  return {
    props: {
      ...ssgDefaultProps
    },
    revalidate: 60 * 5 // 5 minutes
  }
})