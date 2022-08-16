import { ReactNode } from 'react'
import HomePage from '../components/HomePage'

interface IRouter {
  id: number
  path: string
  title: string
  exact?: boolean
  component?: any // ReactNode
  children?: IRouter[]
}

export const router: IRouter[] = [
  {
    id: 1,
    path: '/',
    title: 'home page',
    exact: true,
    component: () => <HomePage />,
  },
]
