//Module interno
namespace Validation{
   export interface Validator {
       isValid(str:string):boolean;
   }
}

// to create ModuleExternal  tsc --outfile scripts/all.js scripts/namespace.ts