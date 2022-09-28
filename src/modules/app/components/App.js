import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../common/header/components/Header'


function App() {
  return (
    <div className="container bg-mainBg bg-repeat-y bg-cover z-0">
      <Header />
      <Outlet />
    </div>
  )
}

export default App