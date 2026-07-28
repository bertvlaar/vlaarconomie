import React from 'react'
import { Outlet } from 'react-router-dom'
import Header5 from './Header5.jsx'

export default function Thema5Layout() {
  return (
    <>
      <Header5 />
      <Outlet />
    </>
  )
}
