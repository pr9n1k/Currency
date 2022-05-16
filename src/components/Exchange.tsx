import React, { useCallback, useState } from 'react';
import CurrencyList from './CurrencyList';
import { Currency } from './../models/Currency';
import ExchangeForm from './ExchangeForm';
export enum ExchangeType {
    buy = 'buy',
    sell = 'sell',
}
type ExchangeProps = {
    type: ExchangeType;
};
const CurrencyRUB: Currency = {
    ID: '',
    NumCode: '',
    CharCode: 'RUB',
    Nominal: 1,
    Name: '',
    Value: 1,
    Previous: 1,
};
const Exchange: React.FC<ExchangeProps> = ({ type }) => {
    const [currency, setCurrency] = useState<Currency>();
    const [step, setStep] = useState<number>(0);
    const roadStepTwo = useCallback((currency: Currency) => {
        setStep(1);
        setCurrency(currency);
    }, []);

    return (
        <>
            {step === 0 ? (
                <CurrencyList roadStepTwo={roadStepTwo} />
            ) : type === ExchangeType.buy ? (
                currency && <ExchangeForm from={{ ...CurrencyRUB, Value: 1 / currency.Value }} to={currency} />
            ) : (
                currency && <ExchangeForm from={currency} to={{ ...CurrencyRUB, Value: 1 / currency.Value }} />
            )}
        </>
    );
};

export default Exchange;
