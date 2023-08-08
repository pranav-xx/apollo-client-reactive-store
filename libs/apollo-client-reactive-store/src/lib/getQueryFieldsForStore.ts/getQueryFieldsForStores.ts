import { ReactiveVar } from "@apollo/client";
import { stores } from "../stores";

export const getQueryFieldsForStores = () => {
    const d: Record<string, any> = {};
    stores.forEach((fields, storeName: string) => {
      if(d[storeName] === undefined) {
        d[storeName] = {}
      }
      d[storeName] = {
        "__typename": storeName,
        read() {
          const fieldDefintions: Record<string, ReactiveVar<any>> = {};
          const store = stores.get(storeName);
          store?.forEach((reactiveVar, fieldName: string) => {
            fieldDefintions[fieldName] = reactiveVar();
          })
          return fieldDefintions
        }
      }
    })
    return d; 
  }
  