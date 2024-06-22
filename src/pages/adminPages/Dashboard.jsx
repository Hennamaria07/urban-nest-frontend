import { Stats } from '@/components'
import { getAdminData } from '@/redux/features/products/productSlice';
import React, { useEffect, useState } from 'react'
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
