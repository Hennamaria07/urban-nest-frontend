import { logoutUser } from '@/redux/features/users/userSlice';
import { logoutDueToTokenExpiry } from '@/redux/features/users/usersCrud';
import React, { useEffect } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'

const ProtectedRouter = ({ children, isAuthenticated, role }) => {
    const dispatch = useDispatch();

    if (!isAuthenticated) {
        return <Navigate to={"/login"} />;
    }

    if (role === 'admin') {
        return <Navigate to={'/admin/dashboard'} />;
    } else if (role === 'seller') {
        return <Navigate to={'/seller/dashboard'} />;
    }

    return children;
};

export default ProtectedRouter;
