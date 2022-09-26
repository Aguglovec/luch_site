import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../common/header/components/Header'


function App() {
  return (
    <>
        <div className="container bg-mainBg bg-repeat-y bg-cover">

    <Header />
    <Outlet />
    </div>
    </>
  )
}

export default App