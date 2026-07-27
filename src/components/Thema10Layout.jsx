import React from 'react'
import { Outlet } from 'react-router-dom'
import Header10 from './Header10.jsx'

export default function Thema10Layout() {
  return (
    <>
      <Header10 />
      <Outlet />
    </>
  )
}
