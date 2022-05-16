import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
    isAuth: boolean;
}

const initialState: AuthState = {
    isAuth: false,
};

const currencySlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {
            state.isAuth = true;
            localStorage.setItem('user', '1');
        },
        logout: (state) => {
            state.isAuth = false;
            localStorage.removeItem('user');
        },
        setAuth: (state) => {
            state.isAuth = true;
        },
    },
    extraReducers: {},
});

export const { login, logout, setAuth } = currencySlice.actions;

export default currencySlice.reducer;
