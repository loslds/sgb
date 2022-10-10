/**
 *  ====== Layout dos c component Paginas
 * */
import { LayoutApp } from '../components/layouts/LayoutApp'
import { PageLogin } from '../pages/Login'
import { PageHome } from '../pages/Home'

export const homeRoutes = [
  {
    exact: true,
    label: 'Login',
    path: '/login',
    component: PageLogin,
    layout: LayoutApp
  },
  {
    exact: true,
    label: '/',
    path: '/home',
    component: PageHome,
    layout: LayoutApp
  }
]

export const routeList = [
  ...homeRoutes
]
