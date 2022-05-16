import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/reducer/auth';
import Button, { BaseButtonType } from './UI/button';
import Input from './UI/Input';
import { useAppDispatch } from './../hooks/hooks';

const RegistrationForm = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        login: '',
        password: '',
        repeatPassword: '',
    });
    const dispatch = useAppDispatch();
    const onSubmit = useCallback(() => {
        (event: React.FormEvent) => {
            event.preventDefault();
            console.log(data);
            dispatch(login());
            navigate('/');
        };
    }, []);

    return (
        <form className="max-w-sm mx-auto my-10" onSubmit={onSubmit}>
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
            <label>
                <p className="text-2xl font-bold text-body mb-1">Повторите пароль</p>
                <Input
                    type="text"
                    className="w-full mb-6"
                    value={data.repeatPassword}
                    onChange={(e) => setData({ ...data, repeatPassword: e.target.value })}
                />
            </label>
            <Button type={BaseButtonType.submit}>Регистрация</Button>
        </form>
    );
};

export default RegistrationForm;
