const sumAll = function(num1, num2) {
    let first = 0, sec = 0, result = 0;

    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    if(num1 < num2){
        first = num1;
        sec = num2;
    }else{
        first = num2;
        sec = num1;
    }

    for(let i=first; i<=sec;i++){
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
