import React from 'react'
import { Outlet } from 'react-router-dom'
import Header7 from './Header7.jsx'

export default function Thema7Layout() {
  return (
    <>
      <Header7 />
      <Outlet />
    </>
  )
}
