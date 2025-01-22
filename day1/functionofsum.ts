//function parameters same as var. declare
/*function add(a: number,b: number)
{
    return a+b;
}
console.log(add(2,3));
//same for other mul..;*/

//optional parameter
function add(a:number,b:number,c?:number)
{
    return a+b+(c||0)
}
console.log(add(3,3));


export{}