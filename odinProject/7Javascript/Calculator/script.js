let acc = 0;
let num = 0; //second operator
let numString = "";
let op = "";
let accumulating = false;


document.addEventListener("DOMContentLoaded", (event) => {
    let nums = document.querySelectorAll(".num");
    nums.forEach(n => {
        n.addEventListener("click", () => {
            if(accumulating && op === "") {
                accumulating = false;
                acc = 0;
                op = "";
            }
            numString += n.innerText;
            document.querySelector(".result").innerText = numString;
        });
    });

    let ops = document.querySelectorAll(".op");
    ops.forEach(o => {
        o.addEventListener("click", () => {
            op = o.innerText;
            if(accumulating) {
                numString = "";
            } else {
                acc = Number(numString);
                accumulating = true;
                numString = "";
            }
        });
    });

    document.querySelector(".equals").addEventListener("click", () => {
        num = 0||Number(numString);
        acc = calculate(op, acc, num);
        num = 0;
        document.querySelector(".result").innerText = String(acc);
    })

    document.querySelector(".clear").addEventListener("click", () => {
        document.querySelector(".result").innerText = "0";
        acc = 0;
        num = 0;
        op = "";
        numString = "";
        accumulating = false;
    });
});

function calculate(op, num1, num2) {
    let result = 0;
    switch(op) {
        case "+":
            result = num1+num2;
            break;
        case "-":
            result = num1-num2;
            break;
        case "*":
            result = num1*num2;
            break;
        case "/":
            if(num2==0) {
                result = NaN;
            } else {
                result = num1/num2;
            }
            break;
        default:
            result = 0;
            break;
    }

    return result;
}