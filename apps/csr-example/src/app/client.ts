import { ApolloClient, InMemoryCache } from "@apollo/client";
import { getQueryFieldsForStores } from "apollo-client-reactive-store";
import './Person';

const policies = () => {
    const p = {
        typePolicies: {
            Query: {
                fields: {
                    ...getQueryFieldsForStores()
                }
            }
        }
    }
    return p;
}
const cache = new InMemoryCache(policies())
export const client = new ApolloClient({
    cache,
    resolvers: {}
});
