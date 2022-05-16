import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { currencyAPI } from '../service/CurrencyService';
import authReducer from './reducer/auth';

const rootReducer = combineReducers({
    [currencyAPI.reducerPath]: currencyAPI.reducer,
    authReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(currencyAPI.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
