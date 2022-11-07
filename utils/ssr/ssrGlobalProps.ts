import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'

export interface ISSRDefaultProps {
  tenant: string
}

export default async function ssrGlobalProps<P>(
  fn: (
    ctx: GetServerSidePropsContext,
    ssrProps: ISSRDefaultProps
  ) => Promise<GetServerSidePropsResult<P | Record<string, unknown>>>,
  ctx: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<P | Record<string, unknown>>> {
  const tenant = (ctx.params?.tenant as string) ?? ''

  if (!tenant) {
    return {
      notFound: true
    }
  }

  const ssrPropsResult: ISSRDefaultProps = {
    tenant
  }

  return await fn?.(ctx, ssrPropsResult)
}
