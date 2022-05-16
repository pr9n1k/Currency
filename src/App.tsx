import React, { useEffect } from 'react';
import AppRouter from './components/AppRouter';
import { useAppDispatch } from './hooks/hooks';
import { setAuth } from './store/reducer/auth';

function App() {
    const user = localStorage.getItem('user');
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (user) {
            dispatch(setAuth());
        }
    }, [user]);
    return <AppRouter />;
}

export default App;
