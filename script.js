const number = document.querySelectorAll('.num');
const operator = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const clearbtn = document.querySelector('.clear');
const decimal = document.querySelector('#decimal');
const input = document.getElementById('input');
const back = document.getElementById('back');

document.getElementById("decimal").disabled = true;

let maxlength = 0;
let num = '';
let numString = '';
let numbers = [];
let operators = [];
let bool = false;

number.forEach((button) => {
    button.addEventListener('click', () => {
        //console.log(numbers.length)
        if(input.value[0] == "0"){
            input.value = button.value
        }else{
            if(maxlength < 28){
                if(numbers.length != 0){
                    num = num + button.value
                    input.value = input.value + button.value
                    //console.log(num)
                    numbers.push(num)
                    num = ''
                    maxlength++
                    document.getElementById("decimal").disabled = false;
                }else{
                    num = num + button.value
                    input.value = input.value + button.value
                    //console.log(num)
                    //numbers.push(num)
                    //num = ''
                    maxlength++
                    document.getElementById("decimal").disabled = false;
                }
            }else {
                input.value = input.value
            }
        }

    })
})

back.addEventListener('click', () => {
    backSpace();
})

decimal.addEventListener('click', () => {
    if(maxlength < 28){
        num = num + decimal.value
        input.value = input.value + decimal.value
        document.getElementById("decimal").disabled = true;
        maxlength++
    }
})

operator.forEach((button) => {
    button.addEventListener('click', () => {
        //console.log(input.value[0])
        numbers.push(num)
        num = ''
        if(input.value[0] == undefined ){
            //numbers.push(num)
        }else{
            if(operators.length = 1 && input.value.slice(-1) == '+' || input.value.slice(-1) == '-' || input.value.slice(-1) == '/' || input.value.slice(-1) == 'x'){
                //console.log(numbers.lastIndexOf(numbers.slice(-1)))
                let first = numbers[0];
                numbers.splice(0,numbers.length);
                numbers.push(first)
                numbers.push(button.value)
                operators.splice(operators.lastIndexOf(operators.slice(-1)),1,button.value);
                input.value = input.value.slice(0, -1) + button.value;
                num = ''
                document.getElementById("decimal").disabled = false;
                // console.log(numbers)
                // console.log(operators)
            }else{
                if(maxlength < 28 ){
                        if(operators.length < 1){
                            bool = true
                            equals()
                            if(input.value == "Error"){
                                input.value = input.value
                                clear()
                            }else{
                                input.value = input.value + button.value
                                numbers.push(button.value)
                                operators.push(button.value)
                                document.getElementById("decimal").disabled = false;
                                //console.log(numbers)
                            }
                        }else{
                            input.value = input.value + button.value
                            num = ''
                            operators.push(button.value)
                            numbers.push(button.value)
                            // console.log(numbers)
                            // console.log(operators)
                            bool = true
                            document.getElementById("decimal").disabled = false;
                            maxlength++
                        }
                    }else{
                        input.value = input.value
                    }
            }
        }
    })
})

clearbtn.addEventListener('click', () => {
    clear()
})


equal.addEventListener('click', () => {
    equals()
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
        let final = (add(num1,num2)).toString();
        // console.log(final)
        if(final.includes(".")){
            numbers.splice(0,numbers.length);
            operators.splice(0,numbers.length);
            numbers.push(add(num1,num2));
            input.value = parseFloat(add(num1,num2)).toFixed(4);
            // console.log(add(num1,num2))
            // console.log(numbers)
        }else{
            numbers.splice(0,numbers.length);
            numbers.push(add(num1,num2));
            operators.splice(0,numbers.length);
            input.value = add(num1,num2)
            // console.log(add(num1,num2))
            // console.log(numbers)
        }

    }else
    if(operand1 == '-'){
        let final = (subtract(num1,num2)).toString();
        // console.log(final)
        if(final.includes(".")){
            numbers.splice(0,numbers.length);
            operators.splice(0,numbers.length);
            numbers.push(subtract(num1,num2));
            input.value = parseFloat(subtract(num1,num2)).toFixed(4);
            // console.log(subtract(num1,num2))
            // console.log(numbers)
        }else{
            numbers.splice(0,numbers.length);
            numbers.push(subtract(num1,num2));
            operators.splice(0,numbers.length);
            input.value = subtract(num1,num2)
            // console.log(subtract(num1,num2))
            // console.log(numbers)
        }
    }else
    if(operand1 == 'x'){
        let final = (multiply(num1,num2)).toString();
        // console.log(final)
        if(final.includes(".")){
            numbers.splice(0,numbers.length);
            operators.splice(0,numbers.length);
            numbers.push(multiply(num1,num2));
            input.value = parseFloat(multiply(num1,num2)).toFixed(4);
            // console.log(multiply(num1,num2))
            // console.log(numbers)
        }else{
            numbers.splice(0,numbers.length);
            numbers.push(multiply(num1,num2));
            operators.splice(0,numbers.length);
            input.value = multiply(num1,num2)
            // console.log(multiply(num1,num2))
            // console.log(numbers)
        }
    }else
    if(operand1 == '/'){
        let final = (divide(num1,num2)).toString();
        // console.log(final)
        if(final.includes(".")){
            numbers.splice(0,numbers.length);
            operators.splice(0,numbers.length);
            numbers.push(divide(num1,num2));
            input.value = parseFloat(divide(num1,num2)).toFixed(4);
            // console.log(divide(num1,num2))
            // console.log(numbers)
        }else{
            numbers.splice(0,numbers.length);
            numbers.push(divide(num1,num2));
            operators.splice(0,numbers.length);
            input.value = divide(num1,num2)
            // console.log(divide(num1,num2))
            // console.log(numbers)
        }
    }
}

function equals(){
    if(bool == true){
        numString = numbers.join();
        numString = numString.replaceAll(",","");
        // console.log(numString)
        for(let j = 0; j < numString.length; j++){
            if(numString[j] == "+" || numString[j] == "-" || numString[j] == "/" || numString[j] == "x"){
                operand1 = numString[j]
                let num1 = numString.substring(0, j)
                let num2 = numString.substring(j+1)
                // console.log(num1)
                // console.log(num2)
                // console.log(operand1)
                if(num2 === undefined){
                    num2 = ""
                    // console.log(num1)
                    // console.log(num2)
                    // console.log(operand1)
                    operate(operand1,num1,num2)
                }else{
                    if(num2 == 0 && operand1 == "/"){
                        input.value = "Error"
                    }else{
                        // console.log(num1)
                        // console.log(num2)
                        // console.log(operand1)
                        operate(operand1,num1,num2)
                    }
                }
            }
        }
   }
}


function clear(){
    numbers.splice(0,numbers.length);
    operators.splice(0,operators.length);
    document.getElementById("decimal").disabled = true;
    num = '';
    maxlength = 0;
    input.value = '';
    numString = '';
    bool = false ;
}

function backSpace(){
    numString = numbers.join();
    numbers.splice(0,numbers.length);
    numString = numString.replaceAll(",","");
    // numString = numString.slice(0, -1);
    if(numString.includes("T") == false && numString.includes("+") == false && numString.includes("-") == false && numString.includes("/") == false && numString.includes("x") == false){
        numString = numString.slice(0, -1);
        input.value = input.value.slice(0, -1);
        numbers.push(numString)
    }
    
    for(let i = 0; i < numString.length ; i++){
        if(numString[i] == "+" || numString[i] == "-" || numString[i] == "/" || numString[i] == "x" || numString[i] == "T" ){
            numString = numString.slice(0, -1);
            let sec = numString[i]
            let first = numString.substring(0, i)
            let third = numString.substring(i+1)
            //console.log(sec)
            if(third != ''){
                numbers.push(first)
                numbers.push(sec)
                numbers.push(third)
                input.value = input.value.slice(0, -1);
            }
            if(third == ''){
                numbers.push(first)
                numbers.push(sec)
                input.value = input.value.slice(0, -1);
                numString = numString.replaceAll(sec,"T");
            }
            if(sec == "T"){
                numbers.push(first)
                break;
            }
        }
    }
    if(numbers[1] == undefined){
        numbers.splice(1,numbers.length);
    }
    console.log(numbers)
}