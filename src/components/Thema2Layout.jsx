import React from 'react'
import { Outlet } from 'react-router-dom'
import Header2 from './Header2.jsx'

export default function Thema2Layout() {
  return (
    <>
      <Header2 />
      <Outlet />
    </>
  )
}
