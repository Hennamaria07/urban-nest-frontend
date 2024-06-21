import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthLayout, UserLayout } from './layout'
import { Login, Signup } from './components'
import { ContactPage, Hero, Whislist } from './pages'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />} >
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path='/signup'
            element={<Signup />}
          />
          <Route
            path='/contact'
            element={<ContactPage />}
          />
        </Route>

        {/* User Routes */}
        <Route
          element={<UserLayout />}
        >
          <Route
            path='/'
            element={<Hero />}
          />
          <Route
            path="/whislist"
            element={<Whislist />} />
          {/* <Route
            path="/cart"
            element={
              <ProtectedRouter isAuthenticated={isAuthenticated} role={role}>
                <CartPAge />
              </ProtectedRouter>
            } /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
