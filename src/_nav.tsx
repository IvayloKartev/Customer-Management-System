import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilUser,
  cilBank,
  cilSettings
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Management',
  },
  {
    component: CNavGroup,
    name: 'Users',
    to: '/base',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Create new user',
        href: '/#/adduser',
      },
      {
        component: CNavItem,
        name: 'View users',
        href: '/#/userstable'
      },
      {
        component: CNavItem,
        name: 'Delete users',
        to: '/base/carousels',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Companies',
    to: '/buttons',
    icon: <CIcon icon={cilBank} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add new company',
        to: '/buttons/buttons',
      },
      {
        component: CNavItem,
        name: 'View companies',
        to: '/buttons/button-groups',
      },
      {
        component: CNavItem,
        name: 'Delete companies',
        to: '/buttons/dropdowns',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Stats',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Admins',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Recent activity',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'View all admins',
        to: '/icons/flags',
      },
      {
        component: CNavItem,
        name: 'Message',
        to: '/icons/brands',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Widgets',
    to: '/widgets',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Others',
  },
  {
    component: CNavItem,
    name: 'Settings',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Notes',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
]

export default _nav
