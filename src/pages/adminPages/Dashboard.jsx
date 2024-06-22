import { Stats } from '@/components'
import { getAdminData } from '@/redux/features/products/productSlice';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux'

const AdminDashboard = () => {
    const user = useSelector(state => state.users.user.userInfo);
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAdminData())
            .unwrap()
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className='container py-5'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Admin Dashboard - Urban Nest Furniture | Manage Your E-commerce Operations</title>
                <meta name="description" content="Monitor and manage your e-commerce operations efficiently with Urban Nest's admin dashboard. Track sales, manage inventory, and optimize your furniture store's performance." />
                <meta name="keywords" content="urban nest admin dashboard, e-commerce operations management, furniture store admin panel, sales tracking, inventory management, performance optimization" />
                <link rel="canonical" href="https://urban-nest-app.netlify.app/admin/dashboard" />
            </Helmet>
            <div className='grid sm:grid-cols-2 gap-5 lg:grid-cols-4'>
                <Stats
                    title={"Total Products"}
                    data={data?.totalProduct}
                />
                <Stats
                    title={"Total Orders"}
                    data={data?.totalOrder}
                />
                <Stats
                    title={"Total Users"}
                    data={data?.totalUser}
                />
                <Stats
                    title={"Total Sellers"}
                    data={data?.totalSeller}
                />
            </div>
        </div>
    )
}

export default AdminDashboard
