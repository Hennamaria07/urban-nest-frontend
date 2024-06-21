import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthLayout, UserLayout } from './layout'
import { Login, Signup } from './components'
import { CartPage, ContactPage, FaqPage, ForgotPassword, Hero, Order, OrderDetail, OrderLists, PlaceOrder, ProductDetailsPage, ProductPage, ProfilePage, ResetPassword, ShippingPage, Whislist } from './pages'
import { useSelector } from 'react-redux'
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
            path='/contact'
            element={<ContactPage />}
          />
          <Route
            path='/faq'
            element={<FaqPage />}
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
          <Route
            path="/shipping"
            element={
              <ProtectedRouter isAuthenticated={isAuthenticated} role={role}>
                <ShippingPage />
              </ProtectedRouter>
            } />
          <Route
            path="/placeorder"
            element={
              <ProtectedRouter isAuthenticated={isAuthenticated} role={role}>
                <PlaceOrder />
              </ProtectedRouter>
            } />
          <Route
            path="/order/:id"
            element={
              <ProtectedRouter isAuthenticated={isAuthenticated} role={role}>
                <Order />
              </ProtectedRouter>
            } />
          <Route
            path="/order-details/:id"
            element={
              <ProtectedRouter isAuthenticated={isAuthenticated} role={role}>
                <OrderDetail />
              </ProtectedRouter>
            } />
          <Route
            path="/user/orders"
            element={
              <ProtectedRouter isAuthenticated={isAuthenticated} role={role}>
                <OrderLists />
              </ProtectedRouter>
            } />
          <Route
            path="/user/profile"
            element={
              <ProtectedRouter isAuthenticated={isAuthenticated} role={role}>
                <ProfilePage />
              </ProtectedRouter>
            } />
            
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
