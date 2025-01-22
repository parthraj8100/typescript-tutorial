"use strict";
/*type:any - it is not giving error and worked as any variable

let v:any = true;
v="string";
console.log(Math.round(v));*/
Object.defineProperty(exports, "__esModule", { value: true });
//let code:any ='xyz';
//code=512;
/*type:unkown - use when not sure about data type - cast with as

let val1:unknown;
console.log(val1);//undefined
*/
/*never-throw error whenever its defined

let x: never= true;//Type 'true' is not assignable to type 'never'.

*/
//undefined and null
var y = undefined;
console.log(typeof y);
