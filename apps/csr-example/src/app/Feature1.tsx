import { gql, useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { withApolloProvider } from './withApolloProvider';
import { client } from './client';
import { person } from './Person';

const feature1Query = gql`
  query User {
    Person @client {
        firstName @client
    }
  }
`;

export const FeatureBase = () => {
    const { data, loading, error} = useQuery(feature1Query)
    const handleClick = () => {
        console.log(person.firstName)
    }
    const setValue = () => {
        person.firstName = "llllll";
    }
    // useEffect(() => {
    //     const timer = setTimeout(() => person.firstName = "timmmmmmmmmm", 1000);
    //     return () => clearTimeout(timer);
    // }, [])
    return (
        error
            ? <div>error loding</div>
            : loading
                ? <div>loading...</div>
                    : (
                    <>
                        <h1>{data.Person.firstName}</h1>
                        <button type="button" onClick={handleClick} >get value</button>
                        <button type="button" onClick={setValue} >set value</button>
                    </>
                )
    )
}
export const Feature1 = withApolloProvider(client, FeatureBase, {});
