import { Transaction, UserDetailsType } from '@/types/responseTypes';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
    endpoints: (builder) => ({
        getUser: builder.query<UserDetailsType, void>({
            query: () => '/user',
        }),
        getUserWallet: builder.query({
            query: () => '/wallet',
        }),
        getUserTransactions: builder.query<Transaction[], void>({
            query: () => '/transactions',
        }),
     
    }),
});

export const { useGetUserQuery, useGetUserTransactionsQuery, useGetUserWalletQuery } = api;
