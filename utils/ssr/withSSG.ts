import { GetStaticPropsContext, GetStaticPropsResult } from 'next'

interface ISSGDefaultProps {
  tenant: string
}

export function withSSG<P>(
  fn: (
    ctx: GetStaticPropsContext,
    ssgProps: ISSGDefaultProps
  ) => Promise<
    GetStaticPropsResult<(P & ISSGDefaultProps) | Record<string, unknown>>
  >
) {
  return async (
    ctx: GetStaticPropsContext
  ): Promise<
    GetStaticPropsResult<(P & ISSGDefaultProps) | Record<string, unknown>>
  > => {
    const tenant = (ctx.params?.tenant as string) ?? ''

    if (!tenant) {
      return {
        notFound: true
      }
    }

    const ssgPropsResult: ISSGDefaultProps = {
      tenant
    }

    return await fn(ctx, ssgPropsResult)
  }
}
