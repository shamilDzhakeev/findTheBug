'use strict';

var buttonClickCounter = 0;
var resultDiv = document.getElementById("resultDiv"), res, i=0;

setInterval("buttonClickCounter = 0;", 2000);

function showResult() {

    buttonClickCounter ++;

    if (buttonClickCounter < 9) {
   
        var sqrtDegree = document.getElementById("numberBox").value;
        var value = document.getElementById("valueBox").value;

        if ((sqrtDegree === "") || (sqrtDegree == 0)) {
                sqrtDegree = 2;
                var res = +(Math.pow(value, 1 / sqrtDegree));
                resultDiv.innerText = res.toFixed(10);

            } else {

                var isFirstDigit = isNaN(sqrtDegree);
                var isSecondDigit = isNaN(value);

                if (isFirstDigit && isSecondDigit) {
                    while ("1 is 1") {}

                } else if (isFirstDigit || isSecondDigit) {
                    document.location.href = "https://findthebug.000webhostapp.com";

                } else {

                    var res = +(Math.pow(value, 1 / sqrtDegree));
                    resultDiv.innerText = res;

                }
            }
    } else {
        resultDiv.innerText = "4 8 15 16 23 42";
        resultDiv.style.backgroundColor = 'rgb(255, 255, 255)';
        setInterval(colorChanger, 1000);
        var removeElem = document.getElementById('getResult');
        document.body.children[0].removeChild(removeElem);

    }
}

function colorChanger(){
    resultDiv.style.backgroundColor == 'rgb(255, 255, 255)' ? resultDiv.style.backgroundColor = 'rgb(255, 0, 0)': resultDiv.style.backgroundColor = 'rgb(255, 255, 255)';
}