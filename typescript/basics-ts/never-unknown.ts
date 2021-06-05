let userInput:unknown;
let userInputany:any;
let userInputstring:string;

userInput=5;
userInput='Max';
userInputany=userInput;
userInput=userInputany;
userInputany=userInputstring;//any
userInput=userInputstring;
userInputstring=userInputany;//any
// userInputstring=userInput;//unknown -> error  but can be solved by typof

if(typeof userInput==='string')
{
 userInputstring=userInput;//unknown ->No  error 
}
//unknown is better than any
// The main difference between unknown and any is that unknown
// is much less permissive than any : we have to do some form of 
//checking before performing most operations on values of type unknown ,
// whereas 
//we don't have to do any checks before performing operations on values of type any

// never TYPE
// function generateError(message:string,code:number):void

function generateError(message:string,code:number):never
{
       throw {message:message,errorCode:code};
       // while(true){}
}//VOid and Never return type

console.log("return:");
const  ret=generateError('Error',500);

console.log(ret);
