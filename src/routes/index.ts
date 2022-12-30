import PageA from '../pages/page-a'
import PageB from '../pages/page-b'

import {ROUTE_PAGE_B, ROUTE_PAGE_A} from './constants'

export const redirects = [
  {
    path: '/',
    redirectTo: ROUTE_PAGE_A,
  },
]

export const routes = [
  {
    path: ROUTE_PAGE_A,
    component: PageA,
  },
  {
    path: ROUTE_PAGE_B,
    component: PageB,
  },
]
