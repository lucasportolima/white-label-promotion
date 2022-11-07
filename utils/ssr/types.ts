import { ParsedUrlQuery } from 'querystring'

interface IPathProps extends ParsedUrlQuery {
    tenant: string
}

export type {
    IPathProps
  }