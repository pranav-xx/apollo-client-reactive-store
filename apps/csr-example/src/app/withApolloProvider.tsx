
import React, { ComponentType } from 'react';
import { ApolloProvider, ApolloClient, NormalizedCacheObject } from '@apollo/client';

export const withApolloProvider = <T extends object>(client: ApolloClient<NormalizedCacheObject>, Component: ComponentType, props: T) => {
    return () => (
        <ApolloProvider client={client}>
            <Component {...props}/>
        </ApolloProvider>
    )
}