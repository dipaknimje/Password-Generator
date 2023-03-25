// 0123456789abcdefghijklmnopqrstuvwxyz@#$ABCDEFGHIJKLMNOPQRSTUVWXYZ //

let inputId = document.getElementById("input");
let buttonId = document.getElementById("btn");

function createPassword() {
    let charecters =
        "0123456789abcdefghijklmnopqrstuvwxyz@#$ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let passwordLength = 12;

    let password = "";

    for(let i =0; i <passwordLength; i++ ){
        
        
        let randomNumber = Math.floor(Math.random() * charecters.length);
        
        password = password + charecters.substring(randomNumber,randomNumber + 1);
        
        console.log(randomNumber);
    }
    inputId.value = password;
    navigator.clipboard.writeText(password);
}

buttonId.addEventListener("click", () => {
    createPassword();
});