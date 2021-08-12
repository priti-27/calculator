const display1E1 = document.querySelector('.display-1');
const display2E1 = document.querySelector('.display-2');
const tempResultE1 = document.querySelector('.temp-result');
const numbersE1 = document.querySelectorAll('.numeric');
const operationE1 = document.querySelectorAll('.operation');
const equalE1 = document.querySelector('.equal');
const clearE1 = document.querySelector('.all-clear');
const allclearE1 = document.querySelector('.allclear');

let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOpration = '';
let haveDot = true;

numbersE1.forEach(number => {
    number.addEventListener('click', (e) => {
        if (e.target.innerText === '.' && !haveDot) {
            haveDot = false;
        } else if (e.target.innerText === '.' && haveDot) {
            return;
        }
        dis2Num += e.target.innerText;
        display2E1.innerText = dis2Num;
    })
});

operationE1.forEach(operation => {
    operation.addEventListener('click', (e) => {
        if (!dis2Num) result;
        haveDot = false;
        const operationName = e.target.innerText;
        if (dis1Num && dis2Num && lastOpration) {
            mathOperation();
        } else {
            result = parseFloat(dis2Num);
        }
        clearvar(operationName);
        lastOpration = operationName;
        console.log(result);
    })
});

function clearvar(name = '') {
    dis1Num += dis2Num + '' + name + '';
    display1E1.innerText = dis1Num;
    display2E1.innerText = '';
    dis2Num = '';
    tempResultE1.innerText = result;
}

function mathOperation() {
    if (lastOpration === 'X') {
        result = parseFloat(result) * parseFloat(dis2Num);
    } else if (lastOpration === '+') {
        result = parseFloat(result) + parseFloat(dis2Num);
    } else if (lastOpration === '-') {
        result = parseFloat(result) - parseFloat(dis2Num);
    } else if (lastOpration === '/') {
        result = parseFloat(result) / parseFloat(dis2Num);
    } else if (lastOpration === '%') {
        result = parseFloat(result) % parseFloat(dis2Num);
    }
}

equalE1.addEventListener('click', (e) => {
    if (!dis1Num || !dis2Num) return;
    haveDot = false;
    mathOperation();
    clearvar();
    display2E1.innerText = result;
    tempResultE1.innerText = result;
    dis2Num = result;
    dis1Num = '';
});

allclearE1.addEventListener('click', (e) => {
    display1E1.innerText = '0';
    display2E1.innerText = '0';
    dis1Num = '';
    dis2Num = '';
    result = '';
    tempResultE1.innerText = '0';
});

clearE1.addEventListener('click', (e) => {
    display1E1.innerText = '';
    dis2Num = '';
})