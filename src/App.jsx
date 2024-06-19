import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthLayout } from './layout'
import { Login } from './components'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<AuthLayout />} >
        <Route 
        path='/login'
        element={<Login />}
        />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
