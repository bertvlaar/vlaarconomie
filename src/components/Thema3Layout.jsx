import React from 'react'
import { Outlet } from 'react-router-dom'
import Header3 from './Header3.jsx'

export default function Thema3Layout() {
  return (
    <>
      <Header3 />
      <Outlet />
    </>
  )
}
