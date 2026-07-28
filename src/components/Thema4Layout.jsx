import React from 'react'
import { Outlet } from 'react-router-dom'
import Header4 from './Header4.jsx'

export default function Thema4Layout() {
  return (
    <>
      <Header4 />
      <Outlet />
    </>
  )
}
