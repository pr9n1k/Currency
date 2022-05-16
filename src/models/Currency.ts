export enum CurrencyName {
    AUD = 'AUD',
    AZN = 'AZN',
    GBP = 'GBP',
    AMD = 'AMD',
    BYN = 'BYN',
    BGN = 'BGN',
    BRL = 'BRL',
    HUF = 'HUF',
    HKD = 'HKD',
    DKK = 'DKK',
    USD = 'USD',
    EUR = 'EUR',
    INR = 'INR',
    KZT = 'KZT',
    CAD = 'CAD',
    KGS = 'KGS',
    CNY = 'CNY',
    MDL = 'MDL',
    NOK = 'NOK',
    PLN = 'PLN',
    RON = 'RON',
    XDR = 'XDR',
    SGD = 'SGD',
    TJS = 'TJS',
    TRY = 'TRY',
    TMT = 'TMT',
    UZS = 'UZS',
    UAH = 'UAH',
    CZK = 'CZK',
    SEK = 'SEK',
    CHF = 'CHF',
    ZAR = 'ZAR',
    KRW = 'KRW',
    JPY = 'JPY',
}

export interface Currency {
    ID: string;
    NumCode: string;
    CharCode: string;
    Nominal: number;
    Name: string;
    Value: number;
    Previous: number;
}

export interface GetCurrencyType {
    Valute: Record<CurrencyName, Currency>;
}
