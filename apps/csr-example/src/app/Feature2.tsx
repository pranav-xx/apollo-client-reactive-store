import { gql, useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { withApolloProvider } from './withApolloProvider';
import { client } from './client';
import { person } from './Person';

const feature1Query = gql`
  query User {
    Person @client {
        lastName @client
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
        person.lastName = "kkk";
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
                        <h1>{data.Person.lastName}</h1>
                        <button type="button" onClick={setValue} >set all value</button>
                    </>
                )
    )
}
export const Feature2 = withApolloProvider(client, FeatureBase, {});
