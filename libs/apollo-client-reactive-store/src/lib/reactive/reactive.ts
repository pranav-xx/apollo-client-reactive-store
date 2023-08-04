import { makeVar } from "@apollo/client";
import { stores } from "../stores";

export function reactive(value: any, context: any) {
    if (context.kind === 'accessor') {
      return {
        get() {
          //@ts-ignore
          const className = this.constructor.name;
          const fieldName = context.name;
  
          //TODO: put type checks later
          return stores.get(className)?.get(fieldName)!();
        },
  
        set(val: any) {
          const className = this.constructor.name;
          const fieldName = context.name;
  
          //TODO: put type checks later
          stores.get(className)?.get(fieldName)!(val);
        },
  
        init(initialValue: any) {
          //@ts-ignore
          const className = this.constructor.name;
          const fieldName = context.name;
          if (!stores.has(className)) {
            stores.set(className, new Map([[fieldName, makeVar(initialValue)]]));
          } else {
            stores.get(className)?.set(fieldName,makeVar(initialValue));
          }
          return stores.get(className)?.get(fieldName)!();
        } 
      }
    }
  };
  
  