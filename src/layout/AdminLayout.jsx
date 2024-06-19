// import { Sidebar } from '@/components';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
      <main className='h-screen w-screen overflow-x-hidden'>
        {/* <Sidebar /> */}
      <Outlet />
      </main>
  )
}

export default AdminLayout