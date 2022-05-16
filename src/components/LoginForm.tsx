import React, { useCallback, useState } from 'react';
import Button, { BaseButtonType } from './UI/button';
import Input from './UI/Input';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/reducer/auth';
import { useAppDispatch } from './../hooks/hooks';

const LoginForm = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        login: '',
        password: '',
    });
    const dispatch = useAppDispatch();
    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(login());
        console.log(data);
        navigate('/');
    };

    return (
        <form className="max-w-sm mx-auto my-20" onSubmit={onSubmit}>
            <label>
                <p className="text-2xl font-bold text-body mb-1">Логин</p>
                <Input
                    type="text"
                    className="w-full mb-6"
                    value={data.login}
                    onChange={(e) => setData({ ...data, login: e.target.value })}
                />
            </label>
            <label>
                <p className="text-2xl font-bold text-body mb-1">Пароль</p>
                <Input
                    type="text"
                    className="w-full mb-6"
                    value={data.password}
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                />
            </label>
            <Button type={BaseButtonType.submit}>Войти</Button>
        </form>
    );
};

export default LoginForm;
