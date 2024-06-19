import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/users/userSlice";
// import categoryReducer from "./features/category/categoryCrud";
// import productReducer from "./features/products/productCurd";
// import whislistReducer from "./features/fav/whislist";
// import { getWhislistFromLocalStorage } from "@/lib/localStorage";
// import cartReducer from "./features/cart/cartSlice";
// import orderReducer from "./features/orders/orderCurd";

// const initialWhislists = getWhislistFromLocalStorage();

export const store = configureStore({
    reducer: {
        users: userReducer,
        // category: categoryReducer,
        // product: productReducer,
        // whislists: whislistReducer,
        // cart: cartReducer,
        // orders: orderReducer,
    },
    // preloadedState: {
    //     whislists: initialWhislists,
    // },
});
