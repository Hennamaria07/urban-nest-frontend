import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/lib/axiosInstance";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";

// const navigate = useNavigate();
const initialState = {
    users: [],
    user: {
        isAuthenticated: localStorage.getItem('isAuthenticated') ? localStorage.getItem('isAuthenticated') === 'true' : false,
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
        token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
        tokenExpiry: localStorage.getItem('tokenExpiry') ? localStorage.getItem('tokenExpiry') : null,
    },
    isLoading: false,
    isError: false,
    sellers: []
};

export const createUser = createAsyncThunk(
    "user/createUser",
    async (data, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post("/api/v1/user/signup", data, { withCredentials: true });
            return response.data;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.message);
        }
    }
);

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async (data, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post("/api/v1/user/signin", data, { withCredentials: true });
            return response.data;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.message);
        }
    });

export const logoutUser = createAsyncThunk(
    "user/logoutUser",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post("/api/v1/user/logout", null, { withCredentials: true });
            return response.data;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.message);
        }
    }
)

export const fetchUsers = createAsyncThunk(
    "user/fetchUsers",
    async (search, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get(`/api/v1/user/?search=${search}`, { withCredentials: true });
            return response.data;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.message)
        }
    }
)

export const fetchUserById = createAsyncThunk(
    "user/fetchUserById",
    async (id, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get(`/api/v1/user/${id}`, { withCredentials: true });
            return response.data;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.message);
        }
    }
)

export const updateUser = createAsyncThunk(
    "user/updateUser",
    async (data, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.put(`/api/v1/user/profile`, data, { withCredentials: true });
            return response.data;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.message);
        }
    }
)

export const updateUserRole = createAsyncThunk(
    "user/update-user-role",
    async (data, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.patch(`/api/v1/user/${data.id}`, data.role, { withCredentials: true });
            return response.data;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.message);
        }
    }
)

export const fetchSellers = createAsyncThunk(
    "user/fetchSellers",
    async (search, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get(`/api/v1/user/seller/list?search=${search}`, { withCredentials: true });
            return response.data;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.message);
        }
    }
)

export const deleteUserById = createAsyncThunk(
    "user/deleteById", 
    async ({id, path}, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.delete(`/api/v1/${path}/${id}`, { withCredentials: true });
            return response.data;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.message || "Unable to delete");
        }
    }
)

export const latestSellers =createAsyncThunk(
    "get/latest-sellers",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get(`/api/v1/user/latest/seller`, { withCredentials: true });
            return response.data;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.message);
        }
    }
)

export const logoutDueToTokenExpiry = createAsyncThunk(
    "user/logoutDueToTokenExpiry",
    async (_, { rejectWithValue }) => {
        try {
            return { success: true, message: "Token expired, user logged out" };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const RequestBecomesAnSeller = createAsyncThunk(
    "post/request-become-an-seller",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post(`/api/v1/user/become-seller`, null, { withCredentials: true });
            return response.data;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.message);
        }
    }
)

export const forgotPassword = createAsyncThunk(
    "post/forgot-password",
    async (data, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post(`/api/v1/user/forgot-password`, data, { withCredentials: true });
            return response.data;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.message);
        }
    }
)

// Redux Thunk for Reset Password
export const resetPassword = createAsyncThunk(
    "patch/reset-password",
    async (data, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.patch(`/api/v1/user/reset-password/?user=${data.user}&token=${data.token}`, { password: data.password }, { withCredentials: true });
            return response.data;
        } catch (error) {
            // Return error message
            return rejectWithValue(error?.response?.data?.message);
        }
    }
);

const userSlice = createSlice({
    name: "userCrud",
    initialState,
    reducers: {
        adduserInfo: (state, action) => {
            state.user.userInfo = action.payload;
            localStorage.setItem("userInfo", JSON.stringify(action.payload))
        }
    },
    extraReducers: (builder) => {
        //create user
        builder.addCase(createUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(createUser.fulfilled, (state, action) => {
            const { data, token, tokenExpiry, isAuthenticated } = action.payload;
            state.user.userInfo = data;
            state.user.token = token;
            state.user.tokenExpiry = tokenExpiry;
            state.user.isAuthenticated = isAuthenticated;
            state.isLoading = false;
            state.isError = false;
            localStorage.setItem("userInfo", JSON.stringify(data));
            localStorage.setItem("token", token);
            localStorage.setItem("tokenExpiry", tokenExpiry);
            localStorage.setItem("isAuthenticated", isAuthenticated);
        });
        builder.addCase(createUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        });

        //login user
        builder.addCase(loginUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            const { data, token, isAuthenticated, tokenExpiry } = action.payload;
            state.user.userInfo = data;
            state.user.token = token;
            state.user.tokenExpiry = tokenExpiry;
            state.user.isAuthenticated = isAuthenticated;
            state.isLoading = false;
            state.isError = false;
            localStorage.setItem("userInfo", JSON.stringify(data));
            localStorage.setItem("token", token);
            localStorage.setItem("tokenExpiry", tokenExpiry);
            localStorage.setItem("isAuthenticated", isAuthenticated);
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        });

         // Logout user
         builder.addCase(logoutUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(logoutUser.fulfilled, (state) => {
            state.user.userInfo = null;
            state.user.token = null;
            state.user.tokenExpiry = null;
            state.user.isAuthenticated = false;
            state.isLoading = false;
            state.isError = false;
            localStorage.clear();
        });
        builder.addCase(logoutUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        });

        // Handle logout due to token expiry
        builder.addCase(logoutDueToTokenExpiry.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(logoutDueToTokenExpiry.fulfilled, (state) => {
            state.user.userInfo = null;
            state.user.token = null;
            state.user.tokenExpiry = null;
            state.user.isAuthenticated = false;
            state.isLoading = false;
            state.isError = false;
            localStorage.clear();
        });
        builder.addCase(logoutDueToTokenExpiry.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        });

        // fetch all users
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload.data;
            state.isLoading = false;
            state.isError = false;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            console.log(action.payload)
        });

        // fetch user by id
        builder.addCase(fetchUserById.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(fetchUserById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
        });
        builder.addCase(fetchUserById.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        });

        // update user
        builder.addCase(updateUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.user.userInfo = action.payload.data;
            state.isLoading = false;
            state.isError = false;
            localStorage.setItem("userInfo", JSON.stringify(action.payload.data));
        });
        builder.addCase(updateUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        });

        // update user role
        builder.addCase(updateUserRole.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(updateUserRole.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;

        });
        builder.addCase(updateUserRole.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        });

        // fetch all sellers
        builder.addCase(fetchSellers.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(fetchSellers.fulfilled, (state, action) => {
            state.sellers = action.payload.data;
            state.isLoading = false;
            state.isError = false;
        });
        builder.addCase(fetchSellers.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        });
        
        // delete user by id
        builder.addCase(deleteUserById.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(deleteUserById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
        });
        builder.addCase(deleteUserById.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        });
        
        // fetch latest sellers
        builder.addCase(latestSellers.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(latestSellers.fulfilled, (state, action) => {
            state.latestSellers = action.payload.data;
            state.isLoading = false;
            state.isError = false;
        });
        builder.addCase(latestSellers.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        });

        // become an seller request
        builder.addCase(RequestBecomesAnSeller.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(RequestBecomesAnSeller.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
        });
        builder.addCase(RequestBecomesAnSeller.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        });

        // forgot password 
        builder.addCase(forgotPassword.pending, (state, action) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(forgotPassword.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
        });
        builder.addCase(forgotPassword.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        });

        // reset password 
        builder.addCase(resetPassword.pending, (state, action) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(resetPassword.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
        });
        builder.addCase(resetPassword.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});

export const {
    adduserInfo,
} = userSlice.actions;
export default userSlice.reducer;
