import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const menuItems = [
        {
            name: "About",
            href: "/"
        },
        {
            name: "Privacy Policy",
            href: "/"
        },
        {
            name: "Licensing",
            href: "/"
        },
        {
            name: "Contact",
            href: "/contact"
        }
    ]
    return (
        <footer className="bg-white fixed bottom-0 rounded-lg w-full shadow dark:bg-gray-900">
            <div className="w-full p-2">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to={"/"} className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img 
                        src= "https://res.cloudinary.com/freestyle07/image/upload/v1718776752/logo_qm9bwj.png"
                        className="h-8" 
                        alt="UrbanNest Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap hover:text-orange-500">UrbanNest</span>
                    </Link>
                    <ul className="flex gap-5 flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 ">
                        {menuItems?.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to={item.href} className="hover:underline hover:text-orange-500">{item.name}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to={"/"} className="hover:underline hover:text-orange-500">UrbanNest™</Link>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer