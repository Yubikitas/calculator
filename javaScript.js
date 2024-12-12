//to do 
//display number overflow (replicate by dividing) - rounding of answers 
//divide by zero alert 
// disable more than one floating point 
//undo button 
//key listener 

let num1 = []; 
let numForArg = 0;
let numForArg2= 0;  
var displayNum = 0;
var operand = ""

num1[0] =0; 

function addNum(arg1,arg2){
    return arg1+arg2; 
}

function subNum(arg1,arg2){
    return arg1-arg2;
}

function divNum(arg1,arg2){
    return arg1/arg2; 
}

function multNum(arg1,arg2){
    return arg1*arg2; 
}

function operate(arg1,arg2,operand){

    input1 = Number(arg1);  
    input2 = Number(arg2);  

    if (operand=="plus"){
        return addNum(input1,input2)
    } 
    else if (operand=="minus"){
        return subNum(input1,input2)
    }
    else if (operand =="divide"){
        return divNum(input1,input2)
    }
    else if (operand=="multiply"){
        return multNum(input1,input2)
    }
}


let displayNumber = document.querySelector("#calcDisplay"); 
displayNumber.textContent = 0;  

let getNum = document.querySelector("#calcNumberButtons"); 
getNum.addEventListener("click",(e)=>{
    let target = e.target; 
    if (num1[0]===0){
        num1.splice(0,1); 
    }

        if (target.id=="seven"&& num1.length<=9){
                num1.push(7); 
                displayNumber.textContent = num1.join(""); 
            } 
        else if (target.id=="eight"&& num1.length<=9){
                num1.push(8); 
                displayNumber.textContent = num1.join(""); 
            }
        else if (target.id=="nine"&& num1.length<=9){
                num1.push(9); 
                displayNumber.textContent = num1.join(""); 
            }
        else if (target.id=="four"&& num1.length<=9){
                num1.push(4); 
                displayNumber.textContent = num1.join(""); 
            }
        else if (target.id=="five"&& num1.length<=9){
                num1.push(5); 
                displayNumber.textContent = num1.join(""); 
            }   
        else if (target.id=="six"&& num1.length<=9){
                num1.push(6); 
                displayNumber.textContent = num1.join(""); 
            }   
        else if (target.id=="one"&& num1.length<=9){
                num1.push(1); 
                displayNumber.textContent = num1.join(""); 
            }   
        else if (target.id=="two"&& num1.length<=9){
                num1.push(2); 
                displayNumber.textContent = num1.join(""); 
            }   
        else if (target.id=="three"&& num1.length<=9){
                num1.push(3); 
                displayNumber.textContent = num1.join(""); 
            }
        else if (target.id=="zero"&& num1.length<=9){
                num1.push(0); 
                displayNumber.textContent = num1.join(""); 
            }
        else if (target.id=="doubleZero"&& num1.length<=8){
                num1.push(0);
                num1.push(0);  
                displayNumber.textContent = num1.join(""); 
            }

        else if (target.id=="point"){

            num1.push("."); 
            displayNumber.textContent = num1.join(""); 
        }
        }); 

    let clearNum = document.querySelector("#clear"); 
    clearNum.addEventListener("click",(e)=>{
        displayNumber.textContent = "0"; 
        num1.splice(0,num1.length); 
        numForArg = 0; 
        numForArg2 = 0; 
        displayNum = 0; 
        operand = ""
    }); 

    let getOperand = document.querySelector("#calcOperateButtons"); 
    getOperand.addEventListener("click",(e)=>{
        let target = e.target; 
        switch(target.id){
            case "plus": 
            operand = "plus"; 
            numForArg = num1.slice().join(""); 
            num1.splice(0,num1.length);
            break; 
            
            case "minus": 
            operand = "minus";
            numForArg = num1.slice().join(""); 
            num1.splice(0,num1.length);
            break;  

            case "multiply": 
            operand = "multiply"; 
            numForArg = num1.slice().join(""); 
            num1.splice(0,num1.length);
            break; 

            case "divide": 
            operand = "divide"; 
            numForArg = num1.slice().join("");  
            num1.splice(0,num1.length);
            break; 

            case"equal": 
                if (displayNum==0){
                    numForArg2 = num1.slice().join("");
                    displayNum = operate(numForArg,numForArg2,operand); 
                    numForArg = 0; 
                    numForArg2 = 0; 
                    num1.splice(0,num1.length); 
                    displayNumber.textContent = displayNum;
                }
                else if (displayNum!=0){
                    numForArg2 = num1.slice().join("");
                    num1.splice(0,num1.length); 
                    console.log(displayNum); 
                    displayNum = operate(displayNum,numForArg2,operand)
                    displayNumber.textContent = displayNum; 

                }

        }}); 

            
    
