import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AdminLayout, AuthLayout, UserLayout } from './layout'
import { Login, Signup } from './components'
import { AdminChangePassword, AdminDashboard, AdminProfilePage, CartPage, CategoryCard, ChangePassword, ContactPage, FaqPage, ForgotPassword, Hero, Order, OrderDetail, OrderLists, OrderPage, PlaceOrder, ProductDetailsPage, ProductListingPage, ProductPage, ProfilePage, ResetPassword, SellerListPage, ShippingPage, UserEdit, UserListPage, Whislist } from './pages'
import { useSelector } from 'react-redux'
import ProtectedRouter from './lib/ProtectedRouter';
import AdminProtectedRouter from "./lib/AdminProtectedRouter"
import ProductUpdatePage from './pages/adminPages/ProductUpdate'
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
            element={
              <ProductPage />
            } />
          <Route
            path="/product/:id"
            element={
              <ProductDetailsPage />
            } />
          <Route
            path="/forgot-password"
            element={
              <ForgotPassword />
            } />
          <Route
            path="/reset-password"
            element={
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
          <Route
            path="/user/password"
            element={
              <ProtectedRouter isAuthenticated={isAuthenticated} role={role}>
                <ChangePassword />
              </ProtectedRouter>
            } />
        </Route>

        {/* Admin Routes */}
        <Route
          element={<AdminLayout />}
        >
          <Route
            path='/admin/dashboard'
            element={
              <AdminProtectedRouter
                isAuthenticated={isAuthenticated}
                role={role}
              >
                <AdminDashboard />
              </AdminProtectedRouter>
            }
          />
          <Route
            path='/admin/categories'
            element={
              <AdminProtectedRouter
                isAuthenticated={isAuthenticated}
                role={role}
              >
                <CategoryCard />
              </AdminProtectedRouter>
            }
          />
          <Route
            path='/admin/profile'
            element={
              <AdminProtectedRouter
                isAuthenticated={isAuthenticated}
                role={role}
              >
                <AdminProfilePage />
              </AdminProtectedRouter>
            }
          />
          <Route
            path='/admin/password'
            element={
              <AdminProtectedRouter
                isAuthenticated={isAuthenticated}
                role={role}
              >
                <AdminChangePassword />
              </AdminProtectedRouter>
            }
          />
          <Route
            path='/admin/products'
            element={
              <AdminProtectedRouter
                isAuthenticated={isAuthenticated}
                role={role}
              >
                <ProductListingPage />
              </AdminProtectedRouter>
            }
          />
          <Route
            path='/admin/product-update/:id'
            element={
              <AdminProtectedRouter
                isAuthenticated={isAuthenticated}
                role={role}
              >
                <ProductUpdatePage />
              </AdminProtectedRouter>
            }
          />
          <Route
            path='/admin/orders'
            element={
              <AdminProtectedRouter
                isAuthenticated={isAuthenticated}
                role={role}
              >
                <OrderPage />
              </AdminProtectedRouter>
            }
          />
          <Route
            path='/admin/users'
            element={
              <AdminProtectedRouter
                isAuthenticated={isAuthenticated}
                role={role}
              >
                <UserListPage />
              </AdminProtectedRouter>
            }
          />
          <Route
            path='/admin/user/edit/:id'
            element={
              <AdminProtectedRouter
                isAuthenticated={isAuthenticated}
                role={role}
              >
                <UserEdit />
              </AdminProtectedRouter>
            }
          />
          <Route
            path='/admin/sellers'
            element={
              <AdminProtectedRouter
                isAuthenticated={isAuthenticated}
                role={role}
              >
                <SellerListPage />
              </AdminProtectedRouter>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
