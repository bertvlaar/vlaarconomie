import React from 'react'
import { Outlet } from 'react-router-dom'
import Header6 from './Header6.jsx'

export default function Thema6Layout() {
  return (
    <>
      <Header6 />
      <Outlet />
    </>
  )
}
