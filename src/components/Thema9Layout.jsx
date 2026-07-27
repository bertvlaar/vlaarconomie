import React from 'react'
import { Outlet } from 'react-router-dom'
import Header9 from './Header9.jsx'

export default function Thema9Layout() {
  return (
    <>
      <Header9 />
      <Outlet />
    </>
  )
}
