let pw = document.getElementById("PW");
let gn = document.getElementById("GN");
let op = document.getElementById("OP");
//what the password will include
const passwordLength = 20;
const includeLowerCase = true;
const includeUpperCase = true;
const includeSymbols = false;
const includeNumbers = true;

function Reload(){
window.location.reload()
}


//creating the function to generate random password
function genarateRandomPassword(length,includeUpperCase, includeLowerCase,includeNumbers, includeSymbols){

const Lowercasechars ="abcdefghijklmnopqrstuvwxyz";
const Uppercasechars = "ABCDEFGHIJKLMNOPQRTSUVWXYZ";
const Numberchars = "0123456789";
const Symbolschars = "@#$%&*!?"







let allowedchars = "";
let Password = "";

allowedchars += includeLowerCase ? Lowercasechars : "";
allowedchars += includeUpperCase ? Uppercasechars : "";
allowedchars += includeNumbers ? Numberchars : "";
allowedchars += includeSymbols ? Symbolschars : ""; 



if( passwordLength === 0){
return `you must at least include one set of character`
}
if(passwordLength <= 8){
return `password must be more than 8`
}
for(let i = 0;i < length ; i++){
 const randomIndex =Math.floor (Math.random() * allowedchars.length);
 Password += allowedchars[randomIndex]
}

//console.log(allowedchars);
return Password;

}

const password = genarateRandomPassword(passwordLength,
includeLowerCase ,
includeUpperCase ,
includeSymbols ,
includeNumbers,

)


console.log(`password:${password}`) 