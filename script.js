const number = document.querySelectorAll('.num');
const operator = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const clearbtn = document.querySelector('.clear');
const decimal = document.querySelector('#decimal');
const input = document.getElementById('input');
const back = document.getElementById('back');

let numbers = [];
let operand2 = [];
let num = '';
let operand = '';
let inputstring = '';
let numString = '';

number.forEach((button) => {
    button.addEventListener('click', () => {
        inputstring = inputstring + button.value;
        numString = numString + button.value;
        input.value = inputstring;
        document.getElementById("operator").disabled = false;
    })
})

back.addEventListener('click', () => {
    backSpace()
})

decimal.addEventListener('click', () => {
    inputstring = inputstring + decimal.value;
    numString = numString + decimal.value;
    input.value = inputstring;
    document.getElementById("decimal").disabled = true;
})

operator.forEach((button) => {
    button.addEventListener('click', () => {
        inputstring = inputstring + button.value;
        numString = numString + "T";
        input.value = inputstring;
        operand = button.value;
        operand2.push(operand);
        console.log(operand2)
        console.log(numbers)
        document.getElementById("decimal").disabled = false;
        num = '';
    })
})

clearbtn.addEventListener('click', () => {
    clear()
})

equal.addEventListener('click', () => {    
    if(inputstring == '' ){
        clear();
        input.value = "No Input";
    }else{
        console.log(numString)
        for(let j = 0; j < numString.length; j++){
            num = numString.split("T");
        }

        let j = 0
        for( let i = 0; i < num.length - 1; i++){
            let num1 = num[i];
            let num2 = num[i+1];
            if(num2 == 0){
                input.value = "Can't be done";
                console.log(input.value)
            }else{
                let operand1 = operand2[j];
                operate(operand1,num1,num2);
                num.splice(i+1,1,operate(operand1,num1,num2));
                j++;
                input.value = inputstring + " = " + parseFloat(num[num.length - 1]).toFixed(2); 
                console.log(num)
            }
        }
        document.getElementById("decimal").disabled = false;
    }
      
})

function add(num1,num2){
    let final = +num1 + +num2;
    return final;
}

function subtract(num1,num2){
    let final = +num1 - +num2;
    return final;
}

function multiply(num1,num2){
    let final = +num1 * +num2;
    return final;
}

function divide(num1,num2){
    let final = +num1 / +num2;
    return final;
}

function operate(operand1,num1,num2){
    if(operand1 == '+'){
        return add(num1,num2);
    }else
    if(operand1 == '-'){
        return subtract(num1,num2);
    }else
    if(operand1 == 'x'){
        return multiply(num1,num2);
    }else
    if(operand1 == '/'){
        return divide(num1,num2);
    }
}

function backSpace(){
    if(numString.slice(-1) == "T"){
        numString = numString.slice(0, -1);
        inputstring = inputstring.slice(0, -1);
        let popped = operand2.pop()
        input.value = inputstring;
        console.log(operand2)
    }else{
        numString = numString.slice(0, -1);
        inputstring = inputstring.slice(0, -1);
        input.value = inputstring;
        console.log(num)
    }
}

function clear(){
    numbers.splice(0,numbers.length);
    operand2.splice(0,operand2.length);
    document.getElementById("decimal").disabled = false;
    num = '';
    operand = '';
    input.value = '';
    inputstring = '';
    numString = '';
}

function disabled(){
    document.getElementById("multiply").disabled = true;
}
