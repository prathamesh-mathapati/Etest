import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LogInPage } from './view/LogInPage'
import { SideBar } from './view/SideBar'
import { Pos } from './view/Pos'

export const Router = () => {
  return (
    <div>
      <Routes>
        {/* <Router path></Router> */}
        <Route path='/' element={<LogInPage />} />
        <Route path='/app' element={<SideBar />} />
        <Route path='/pos' element={<Pos />} />
      </Routes>``
    </div>
  )
}
