import React, { useEffect, useState } from 'react';
import Input from './UI/Input';
import Button, { BaseButtonType } from './UI/button';
import { useNavigate } from 'react-router-dom';
import { Currency } from '../models/Currency';
import { Operation } from '../models/Operation';
const coefCummission = 0.02;
type ExchangeFormProps = {
    from: Currency;
    to: Currency;
};
const ExchangeForm: React.FC<ExchangeFormProps> = ({ from, to }) => {
    const [operation, setOperation] = useState<Operation>();
    const [commission, setCommission] = useState<number>();
    const navigate = useNavigate();
    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        navigate('/success');
        console.log(operation);
    };
    useEffect(() => {
        const value = (operation?.sell ?? 0) * coefCummission;

        setCommission(value);
    }, [operation?.sell]);

    const onChangeSell = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOperation({
            ...operation,
            sell: parseFloat(e.target.value),
            buy: parseFloat(e.target.value) * from.Value,
        });
    };
    const onChangeBuy = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOperation({
            ...operation,
            buy: parseFloat(e.target.value),
            sell: parseFloat(e.target.value) * to.Value,
        });
    };

    return (
        <form className="flex flex-wrap justify-between" onSubmit={onSubmit}>
            <label className="mb-10">
                <p className="text-2xl mb-4 font-bold text-body">Отдаю</p>
                <div className="relative">
                    <span className="absolute top-1/2 right-4 z-1 -translate-y-2/4 text-border text-2xl font-light">
                        {from.CharCode}
                    </span>
                    <Input
                        type="number"
                        className="w-80"
                        placeholder="Введите сумму"
                        required={true}
                        value={operation?.sell ?? ''}
                        onChange={onChangeSell}
                    />
                </div>
                <p className="text-sm text-caption font-regular mt-2">
                    комиссия{' '}
                    {operation?.sell && (
                        <>
                            {commission} {from.CharCode}
                        </>
                    )}
                </p>
            </label>
            <label>
                <p className="text-2xl mb-4 font-bold text-body">Получаю</p>
                <div className="relative">
                    <span className="absolute top-1/2 right-4 z-1 -translate-y-2/4 text-border text-2xl font-light">
                        {to.CharCode}
                    </span>
                    <Input
                        type="number"
                        className="w-80 "
                        required={true}
                        value={operation?.buy ?? ''}
                        onChange={onChangeBuy}
                    />
                </div>
                <p className="text-sm text-caption font-regular mt-2">по курсу ЦБР</p>
            </label>
            <div>
                <p className="text-base text-body font-bold mb-2">С Банковской карты</p>
                <div className="w-96 relative h-56 z-1">
                    <div className="h-48 w-72 bg-grey-light rounded-md pt-10 px-6">
                        <Input
                            type="number"
                            className="w-full mb-4 "
                            pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"
                            placeholder="**** **** **** ****"
                            required={true}
                            defaultValue={operation?.numberCard ?? ''}
                            onChange={(e) => setOperation({ ...operation, numberCard: e.target.value })}
                        />
                        <div className="flex">
                            <Input
                                type="number"
                                className="w-16 mr-4"
                                placeholder="MM"
                                pattern="[0-9]{2}"
                                required={true}
                                defaultValue={operation?.dateCardMM ?? ''}
                                onChange={(e) => setOperation({ ...operation, dateCardMM: parseFloat(e.target.value) })}
                            />
                            <Input
                                type="number"
                                className="w-16"
                                placeholder="YY"
                                pattern="[0-9]{2}"
                                required={true}
                                defaultValue={operation?.dateCardYY ?? ''}
                                onChange={(e) => setOperation({ ...operation, dateCardYY: parseFloat(e.target.value) })}
                            />
                        </div>
                    </div>
                    <div className="pb-8 px-5 h-48 w-72 absolute bottom-0 right-0 -z-1 bg-grey rounded-md flex flex-col items-end justify-end">
                        <Input
                            required={true}
                            type="number"
                            className="w-16 mb-3 "
                            placeholder="CVC"
                            pattern="[0-9]{3}"
                            defaultValue={operation?.cvc ?? ''}
                            onChange={(e) => setOperation({ ...operation, cvc: parseFloat(e.target.value) })}
                        />
                        <p className="text-s w-16">Три цифры с обратной стороны карты</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between">
                <label>
                    <p className="text-base text-body font-bold mb-2">На карту</p>
                    <Input
                        required={true}
                        type="number"
                        className="w-80"
                        pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"
                        minLength={19}
                        placeholder="**** **** **** ****"
                        defaultValue={operation?.newCard ?? ''}
                        onChange={(e) => setOperation({ ...operation, newCard: e.target.value })}
                    />
                </label>
                <div>
                    <Button className="w-full" type={BaseButtonType.submit}>
                        Купить {operation?.buy && operation.buy.toFixed(2)}
                    </Button>
                    {operation?.sell && (
                        <>
                            <p className="text-center w-full text-base text-body mt-2">
                                К оплате {(operation.sell + commission!).toFixed(2).toString()} {from.CharCode} с учетом
                                комиссии.
                            </p>
                            <p className="text-center w-full text-base text-body">Время поступления ~ 20 минут.</p>
                        </>
                    )}
                </div>
            </div>
        </form>
    );
};

export default ExchangeForm;
