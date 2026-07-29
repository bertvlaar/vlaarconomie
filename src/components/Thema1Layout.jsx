import React from 'react'
import { Outlet } from 'react-router-dom'
import Header1 from './Header1.jsx'

export default function Thema1Layout() {
  return (
    <>
      <Header1 />
      <Outlet />
    </>
  )
}
