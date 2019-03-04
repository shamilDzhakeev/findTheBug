'use strict';

var buttonClickCounter = 0;
var resultLabel = document.querySelector(".resultLabel");

setInterval("buttonClickCounter = 0;", 2000);

function showResult() {

    buttonClickCounter ++;

    if (buttonClickCounter < 10) {
   
        var sqrtDegree = document.querySelector(".numberBox").value;
        var value = document.querySelector(".valueBox").value;
        sqrtDegree = sqrtDegree.replace(/,/, '.');
        value = value.replace(/,/, '.');
        
        if (sqrtDegree === '0') {

            resultLabel.innerText = "0"

        } else {

            if (sqrtDegree === "") {
                sqrtDegree = 2;
                var res = +(Math.pow(value, 1 / sqrtDegree));
                resultLabel.innerText = res.toFixed(10);

            } else {

                var isFirstDigit = isNaN(sqrtDegree);
                var isSecondDigit = isNaN(value);

                if (isFirstDigit && isSecondDigit) {

                    while ("1 is 1") {}

                } else if (isFirstDigit || isSecondDigit) {

                    document.location.href = "//findthebug.000webhostapp.com";

                } else {
                    var res = +(Math.pow(value, 1 / sqrtDegree));
                    resultLabel.innerText = res;
                }
            }
        }         
    } else {

        var removeElem = document.querySelector('.button');
        removeElem.remove();
        resultLabel.innerText = "4 8 15 16 23 42";  
        resultLabel.classList.add('alert');

    }
}

exports.showResult = showResult;