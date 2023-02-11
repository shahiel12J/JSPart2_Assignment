const number = document.querySelectorAll('.num');
const operator = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal')
const clearbtn = document.querySelector('.clear')
const decimal = document.querySelector('#decimal')
const input = document.getElementById('input')

let numbers = [];
let operand2 = [];
let num = ''
let operand = ''
let inputstring = ''

number.forEach((button) => {

    button.addEventListener('click', () => {
        inputstring = inputstring + button.value
        input.value = inputstring
        num = num + button.value
        console.log(num)
    })

})

decimal.addEventListener('click', () => {
    inputstring = inputstring + decimal.value
    input.value = inputstring
    num = num + decimal.value
    console.log(num)
    document.getElementById("decimal").disabled = true;
})

operator.forEach((button) => {

    button.addEventListener('click', () => {
        inputstring = inputstring + button.value
        input.value = inputstring

        if(num !== ''){
            numbers.push(num)
        }
        operand = button.value
        operand2.push(operand)
        console.log(operand2)
        console.log(numbers)
        document.getElementById("decimal").disabled = false;
        num = ''     
         
    })
   
})

clearbtn.addEventListener('click', () => {
    clear()
})

function add(num1,num2){
    let final = +num1 + +num2
    return final
}

function subtract(num1,num2){
    let final = +num1 - +num2
    return final
}

function multiply(num1,num2){
    let final = +num1 * +num2
    return final
}

function divide(num1,num2){
    let final = +num1 / +num2
    return final
}

function operate(operand1,num1,num2){
    if(operand1 == '+'){
        return add(num1,num2)
    }else
    if(operand1 == '-'){
        return subtract(num1,num2)
    }else
    if(operand1 == '*'){
        return multiply(num1,num2)
    }else
    if(operand1 == '/'){
        return divide(num1,num2)
    }
}

equal.addEventListener('click', () => {    
    if(num !== ''){
        numbers.push(num)
    }
    console.log(numbers)

    let j = 0
    for( let i = 0; i < numbers.length - 1; i++){
        let num1 = numbers[i]
        let num2 = numbers[i+1]
        let operand1 = operand2[j]
        operate(operand1,num1,num2)
        numbers.splice(i+1,1,operate(operand1,num1,num2))
        j++
        console.log(numbers)
    }
    document.getElementById("decimal").disabled = false;

    if(Number.isInteger(numbers[numbers.length - 1]) == false || operand2.length == 0){
        input.value = "Invalid Input";
    }else{
        num = ''
        operand = ''
        inputstring = ''
        input.value = numbers[numbers.length - 1];
    }
})

function clear(){
    numbers.splice(0,numbers.length);
    operand2.splice(0,operand2.length);
    document.getElementById("decimal").disabled = false;
    num = ''
    operand = ''
    input.value = ''
    inputstring = ''
}