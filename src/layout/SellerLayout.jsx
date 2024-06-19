// import { SellerSidebar } from '@/components'
import React from 'react'
import { Outlet } from 'react-router-dom'

const SellerLayout = () => {
  return (
    <main className='h-screen w-screen overflow-x-hidden'>
        {/* <SellerSidebar /> */}
      <div className="ps-[6rem] w-full h-full ">
      <Outlet />
      </div>
      </main>
  )
}

export default SellerLayout