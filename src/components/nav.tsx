import React from 'react';
import { useAppSelector } from '../hooks/hooks';
import Button from './UI/button';
import MyLink from './UI/MyLink';
import { useAppDispatch } from './../hooks/hooks';
import { logout } from '../store/reducer/auth';

const Nav = () => {
    const { isAuth } = useAppSelector((state) => state.authReducer);
    const dispatch = useAppDispatch();
    const onClick = () => dispatch(logout());
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <MyLink to={'/'} className=" mr-6">
                    <span className="text-white font-bold text-2xl">bitc&buy</span>
                </MyLink>
                <MyLink to={'/buy'} className="mr-6">
                    Купить
                </MyLink>
                <MyLink to={'/sell'} className="mr-6">
                    Продать
                </MyLink>
                <MyLink to={'/about'}>О сервисе</MyLink>
            </div>
            <div>
                {isAuth ? (
                    <MyLink to={'/login'} onClick={onClick}>
                        Выйти
                    </MyLink>
                ) : (
                    <>
                        <MyLink to={'/login'} className="">
                            Вход
                        </MyLink>
                        <MyLink to={'/registration'} className="ml-6">
                            Регистрация
                        </MyLink>{' '}
                    </>
                )}
            </div>
        </div>
    );
};

export default Nav;
