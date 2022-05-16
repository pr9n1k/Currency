import React from 'react';
import Exchange, { ExchangeType } from '../components/Exchange';
import Page from '../components/page';

const Buy = () => {
    return (
        <Page title="Купить">
            <Exchange type={ExchangeType.buy} />
        </Page>
    );
};

export default Buy;
