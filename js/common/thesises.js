"use strict";

var summation = "var numbers = [1,2,3,4,5,6,7,8,9,10];"+
                "\n"+
                "\nvar sum = 0;"+
                "\n"+
                "\nfor(var i = 0, il = numbers.length; i < il; i++){"+
                "\n  sum += numbers[i];"+
                "\n}"+
                "\n"+
                "\nalert(sum);";
                
var counting  = "var numbers = [1,9,3,7,5,6,4,8,2,10];"+
                "\n"+
                "\nvar counter = 0;"+
                "\nvar limit = 5;"+
                "\n"+
                "\nfor(var i = 0, il = numbers.length; i < il; i++){"+
                "\n  if(numbers[i] > limit){"+
                "\n    counter++;"+
                "\n  }"+
                "\n}"+
                "\n"+
                "\nalert(counter);";
                
var decision  = "var numbers = [1,2,3,7,51,6,4,11,2,10];"+
                "\n"+
                "\nvar target = 11;"+
                "\n"+
                "\nvar i = 0;"+
                "\n"+
                "\nvar numbersLength = numbers.length"+
                "\nwhile(i  < numbersLength && numbers[i] !== target){"+
                "\n  i++;"+
                "\n}"+
                "\n"+
                "\nif(i < numbersLength){"+
                "\n  alert('Target found!')"+
                "\n} else {"+
                "\n  alert('Target not found!')"+
                "\n}"+
                "\nalert(counter);";
          
function loadThesis(code){
  switch(code){
    case 'summation' : $("#textareaCode").val(summation); break;
    case 'counting' : $("#textareaCode").val(counting); break;
    case 'decision' : $("#textareaCode").val(decision); break;
  }
}

function runThesis(){
  var thesisCode = $("#textareaCode").val();
  eval(thesisCode);
}