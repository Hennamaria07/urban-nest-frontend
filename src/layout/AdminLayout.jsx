import { Header, SideBar } from '@/components';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  
  return (
    <div>
      <SideBar sidebarToggle={openSidebarToggle} />
      {/* <Home className="col-span-3 grid-area-main" /> */}
      <main className={`${openSidebarToggle ? "" : "ml-64"}`}>
      <Header 
      sidebarToggle={openSidebarToggle}
        setSidebarToggle={setOpenSidebarToggle} />
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout