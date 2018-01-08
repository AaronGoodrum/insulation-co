import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Contact from '@/components/Contact'
import Service from '@/components/Services'
import About from '@/components/About'
import Cleanouts from '@/components/Cleanouts'
import Products from '@/components/Products'
import WhyInsulate from '@/components/why-insulate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/Services',
      name: 'Service',
      component: Service
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Cleanouts',
      name: 'Cleanouts',
      component: Cleanouts
    },
    {
      path: '/Products',
      name: 'Products',
      component: Products
    },
    {
      path: '/why-insulate',
      name: 'WhyInsulate',
      component: WhyInsulate
    }
  ]
})
