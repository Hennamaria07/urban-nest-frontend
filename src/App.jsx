import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthLayout, UserLayout } from './layout'
import { Login, Signup } from './components'
import { CartPage, ContactPage, ForgotPassword, Hero, ProductPage, ResetPassword, Whislist } from './pages'
import { useSelector } from 'react-redux'
import ProductDetailsPage from './pages/userPages/ProductDetail'
import ProtectedRouter from './lib/ProtectedRouter'
function App() {
  const isAuthenticated = useSelector(state => state.users.user.isAuthenticated);
  const role = useSelector(state => state.users?.user?.userInfo?.role);
  
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
            <Route
            path="/shop"
            element= {
              <ProductPage />
            } />
            <Route
            path="/product/:id"
            element= {
              <ProductDetailsPage />
            } />
            <Route
            path="/forgot-password"
            element= {
              <ForgotPassword />
            } />
            <Route
            path="/reset-password"
            element= {
              <ResetPassword />
            } />
          <Route
            path="/cart"
            element={
              <ProtectedRouter isAuthenticated={isAuthenticated} role={role}>
                <CartPage />
              </ProtectedRouter>
            } />
          {/* <Route
            path="/cart"
            element={
              <ProtectedRouter isAuthenticated={isAuthenticated} role={role}>
                <CartPage />
              </ProtectedRouter>
            } /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
