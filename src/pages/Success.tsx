import React from 'react';
import Page from '../components/page';
import Button from '../components/UI/button';
import { useNavigate } from 'react-router-dom';

const Success = () => {
    const navigate = useNavigate();
    const onClick = () => navigate('/');
    return (
        <Page>
            <h2 className="text-center mt-40 text-4xl font-regular text-black">Платеж проведен</h2>
            <p className="max-w-xl mx-auto text-center mt-3 text-2xl text-caption font-regular">
                После подтверждения транзакции в сети Bitcoin средства появятся в вашем колешьке. Среднее время
                подтверждения — 20 минут.
            </p>
            <Button onClick={onClick} className="mx-auto mb-40 mt-3">
                На главную
            </Button>
        </Page>
    );
};

export default Success;
