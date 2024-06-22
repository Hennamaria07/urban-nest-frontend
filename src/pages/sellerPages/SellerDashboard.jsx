import { Stats } from '@/components'
import { getSellerData } from '@/redux/features/products/productSlice'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'

const SellerDashBoardPage = () => {
  const user = useSelector(state => state.users.user.userInfo)
  const [data, setData] = useState(null)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSellerData())
      .unwrap()
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <div className="h-screen container py-5">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Seller Dashboard - Urban Nest Furniture | Manage Your Store</title>
        <meta name="description" content="Manage your furniture store effectively with Urban Nest's seller dashboard. Track sales, manage orders, and optimize your store to grow your business and enhance customer satisfaction." />
        <meta name="keywords" content="urban nest seller dashboard, manage furniture store, furniture e-commerce seller tools, sales tracking, order management, store optimization" />
        <link rel="canonical" href="https://urban-nest-app.netlify.app/seller/dashboard" />
      </Helmet>
      <Toaster />
      <h1
        className="text-2xl font-semibold pb-5"
      >
        Welcome,{' '}
        <span className='text-orange-500 capitalize'>{user.firstName}</span>{' '}
        <span className='text-orange-500 capitalize'>{user.lastName}</span>
      </h1>
      <div className='grid sm:grid-cols-2 gap-5'>
        <Stats
        data={data?.totalProduct}
        title={"Total Products"}
        />
        <Stats
        data={data?.totalOrder}
        title={"Total Orders"}
        />
      </div>
    </div>
  )
}

export default SellerDashBoardPage