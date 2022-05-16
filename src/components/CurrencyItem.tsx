import React, { FC, useCallback } from 'react';
import { Currency } from '../models/Currency';
type CurrencyItemProps = {
    currency: Currency;
    roadStepTwo: (currency: Currency) => void;
};
const CurrencyItem: FC<CurrencyItemProps> = ({ currency, roadStepTwo }) => {
    const click = useCallback(() => {
        if (currency) {
            roadStepTwo(currency);
        }
    }, []);
    return (
        <li onClick={click} className="p-2 border border-border rounded cursor-pointer shadow-lg hover:shadow-none">
            {currency.CharCode} - {currency.Value} ₽
        </li>
    );
};

export default CurrencyItem;
