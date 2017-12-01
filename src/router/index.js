import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/layouts/Login'
import Dashboard from '@/layouts/Dashboard'
import Promociones from '@/layouts/Promociones'
import Places from '@/layouts/Places'
import Settings from '@/layouts/Settings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: { name: 'Login' }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      // redirect: { name: 'Login' }
      children: [
        {
          name: 'Dashboard - Promociones',
          path: 'posts',
          component: Promociones
        },
        {
          name: 'Dashboard - Mis Tiendas',
          path: 'places',
          component: Places
        },
        {
          name: 'Dashboard - Ajustes',
          path: 'settings',
          component: Settings
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
