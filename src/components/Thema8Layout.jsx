import React from 'react'
import { Outlet } from 'react-router-dom'
import Header8 from './Header8.jsx'

export default function Thema8Layout() {
  return (
    <>
      <Header8 />
      <Outlet />
    </>
  )
}
