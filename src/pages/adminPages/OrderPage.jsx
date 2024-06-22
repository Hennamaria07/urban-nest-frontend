import { OrderTable } from '@/components';
import { getOrdersForAdmin } from '@/redux/features/orders/orderSlice';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux'

const OrderPage = () => {
  const [orders, setOrders] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrdersForAdmin())
      .unwrap()
      .then(res => setOrders(res.data))
      .catch(err => console.log(err))
  }, [dispatch, orders])

  return (
    <div className="w-full h-full container py-5">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Admin Orders - Urban Nest Furniture | Manage Customer Orders</title>
        <meta name="description" content="Efficiently manage customer orders with Urban Nest's admin panel. Track, process, and fulfill furniture orders to ensure a seamless shopping experience for your customers." />
        <meta name="keywords" content="urban nest admin orders, manage customer orders, furniture e-commerce admin panel, order processing, order fulfillment, customer satisfaction" />
        <link rel="canonical" href="https://urban-nest-app.netlify.app/admin/orders" />
      </Helmet>
      <Toaster />
        <OrderTable orders={orders} />
    </div>
  )
}

export default OrderPage