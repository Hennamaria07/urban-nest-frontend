import { array } from "yup";

export const priceData = [
    {
        _id: 0,
        name:"₹0 to 499",
        array: [0, 500]
    },
    {
        _id: 1,
        name:"₹500 to 999",
        array: [500, 1000]
    },
    {
        _id: 2,
        name:"₹1000 to 1999",
        array: [1000, 2000]
    },
    {
        _id: 3,
        name:"₹2000 to more",
        array: [2000, 10000000]
    }
]

export const sortData = [
    {
        _id: 0,
        name: "Price: Low to High",
        value: {"price": 1}
    },
    {
        _id: 1,
        name: "Price: High to Low",
        value: {"price": -1}
    },
    {
        _id: 3,
        name: "Rating: Low to High",
        value: {"rating": 1}
    },
    {
        _id: 4,
        name: "Rating: High to Low",
        value: {"rating": -1}
    },
    {
        _id: 2,
        name: "Latest Product",
        value: {"createdAt": -1}
    }
]

export const AdminSidebarData = [
    {
        href: "/admin/dashboard",
        title: "Home",
        icon: 'dashboard'
    },
    {
        href: "/admin/categories",
        title: "Categories",
        icon: 'category'
    },
    {
        href: "/admin/products",
        title: "Products",
        icon: 'product'
    },
    {
        href: "/admin/orders",
        title: "Orders",
        icon: 'order'
    },
    {
        href: "/admin/users",
        title: "Users",
        icon: 'user'
    },
    {
        href: "/admin/sellers",
        title: "Sellers",
        icon:'seller'
    }
    
]