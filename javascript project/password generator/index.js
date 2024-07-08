
function add(){
const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lcase="abcdefghijlkmnopqrstuvwxyz"
const number = "0123456789";
const symbol = "!@#$%^&*=-_";

const upperCase = document.getElementById('bigletter')
const lowerCase = document.getElementById('small')
const pNumber = document.getElementById('number')
const pSymbol = document.getElementById('symbol')
const pLength = document.getElementById('plength').value;

const password = document.getElementById('passdisplay');


if(pLength==''){ alert("entre number")

}else{

    let initPwd = '';
    
    if(upperCase.checked) initPwd+=uCase;
    
    if(lowerCase.checked) initPwd+=lcase;
    if(pNumber.checked) initPwd+=number;
    if(pSymbol.checked) initPwd+=symbol;
    
    let pass = "";
    for (let i=0;i<pLength;i++){
        const b=(Math.floor(Math.random() * initPwd.length));
        pass +=initPwd[b]
    }
    password.value=pass
}
   
};
const a=document.getElementById("passdisplay")
const copy=document.getElementById("copy")
copy.addEventListener("click",()=>{

    a.select()
    document.execCommand("copy")
    alert("password copy sucessfully")

})