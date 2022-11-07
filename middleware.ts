import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl

  if (
    pathname.startsWith('/_next') || // exclude Next.js internals
    pathname.startsWith('/api') || //  exclude all API routes
    pathname.startsWith('/static') || // exclude static files
    PUBLIC_FILE.test(pathname) // exclude all files in the public folder
  )
    return NextResponse.next()

  const url = request.nextUrl.clone()

  const { pathname: path } = url

  if (pathname.includes('.')) return NextResponse.next()

  const hostname = request.headers.get('host') ?? ''

  let tenant = hostname.replace('www.', '')

  if (
    // Local
    tenant.includes(':3000') ||
    // Preview (PR)
    (tenant.startsWith('spider-') && tenant.endsWith('-mercafacil.vercel.app'))
  ) {
    url.pathname = `/_tenants/${hostname}`

    return NextResponse.rewrite(url)
  } else {
    url.pathname = `/_tenants/${hostname.split('-')[0]}`

    return NextResponse.rewrite(url)
  }
};