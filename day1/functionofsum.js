"use strict";
//function parameters same as var. declare
/*function add(a: number,b: number)
{
    return a+b;
}
console.log(add(2,3));
//same for other mul..;*/
Object.defineProperty(exports, "__esModule", { value: true });
//optional parameter
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log(add(3, 3));
