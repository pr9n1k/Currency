import React from 'react';
import Exchange, { ExchangeType } from '../components/Exchange';
import Page from '../components/page';

const Sell = () => {
    return (
        <Page title="Продать">
            <Exchange type={ExchangeType.sell} />
        </Page>
    );
};

export default Sell;
