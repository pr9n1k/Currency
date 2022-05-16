import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { GetCurrencyType } from './../models/Currency';

export const currencyAPI = createApi({
    reducerPath: 'currencyAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://www.cbr-xml-daily.ru' }),
    tagTypes: ['Currency'],
    endpoints: (build) => ({
        fetch: build.query<GetCurrencyType, void>({
            query: () => ({
                url: '/daily_json.js',
            }),
            providesTags: ['Currency'],
        }),
    }),
});
