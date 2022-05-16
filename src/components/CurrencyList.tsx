import React from 'react';
import CurrencyItem from './CurrencyItem';
import { Currency } from './../models/Currency';
import { currencyAPI } from './../service/CurrencyService';
type CurrencyItemProps = {
    roadStepTwo: (currency: Currency) => void;
};
const CurrencyList: React.FC<CurrencyItemProps> = ({ roadStepTwo }) => {
    const { data, isLoading, error } = currencyAPI.useFetchQuery();
    if (isLoading) {
        return <h3>Загрузка...</h3>;
    }
    if (error) {
        return <h3>Ошибка..</h3>;
    }

    return (
        <ul className="grid gap-4 grid-cols-4 grid-rows-3">
            {data?.Valute &&
                Object.values(data?.Valute).map((item) => {
                    return (
                        <CurrencyItem
                            key={item.ID}
                            currency={{ ...item, Value: item.Value }}
                            roadStepTwo={roadStepTwo}
                        />
                    );
                })}
        </ul>
    );
};

export default CurrencyList;
