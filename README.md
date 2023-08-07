# apollo-client-reactive-store

## Description
Simple utility to manage UI application state using @apollo/client libary's reactive variables.


## Usage

Create your store class, with auto accessors for all the properties that need to be reactive.

Make sure to annotate these auto accessor properties with `@reactive` 
```
import { reactive } from "apollo-client-reactive-store";


export class Person {
    @reactive
    accessor firstName: string = "Jon";
    @reactive
    accessor lastName: string = "Dohn";
}

export const person = new Person();
```

Use getFieldsForStores function to get query field defintions for the stores and use it typepolicies.
```
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { getQueryFieldsForStores } from "apollo-client-reactive-store";

// import the store class
import './Person';

const policies = {
    typePolicies: {
        Query: {
            merge: true,
            fields: {
                ...getQueryFieldsForStores() // this will provide field defintion for all the store classes and reactive variables
            }
        }
    }
}

const cache = new InMemoryCache(policies)
export const client = new ApolloClient({
    cache,
    resolvers: {}
});

```

Since this library uses [decorator stage 3](https://github.com/tc39/proposal-decorators) following changes may be required on tsconfig and .babelrc files:

tsconfig
```
"emitDecoratorMetadata": false,
"experimentalDecorators": false,
```

.babelrc
```
{
  "presets": [
    [
      "@nrwl/react/babel",
      {
        "runtime": "automatic",
        "importSource": "react",
        "useBuiltIns": "usage",
        "decorators": {
          "decoratorsBeforeExport": true,
          // "legacy": true
        },
        "classProperties": {
          "loose": false
        }
      }
    ]
  ],
  "plugins": [
    [
      "@babel/plugin-proposal-decorators",
      {
        "version": "2022-03"
      }
    ]
  ]
}

```

## Examples
see `apps/csr-example`
