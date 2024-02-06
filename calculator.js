
//pin Generatepin--------------------------

function generatePin(){
    var getPin = Math.round(Math.random()*10000)
    return getPin;
}

//pin Check 4digit or not---------------------
function pinChecker() {
    var getPinCheck = generatePin();
    var getPinString = getPinCheck + '';
    if (getPinString.length == 4) {
        return getPinCheck;
    }else{
        return generatePin()
    }
}



//Button---------------------------------------------
document.getElementById('btn3').addEventListener('click',function(){
    var newPin = pinChecker();
   var inputField = document.getElementById('pinField');
   inputField.value = newPin;
})



//pin-matcher
document.getElementById('calculator').addEventListener('click',function (event){
console.log('clicked');
var number = event.target.innerText;
var field =  document.getElementById('inputtt');
var newValue = field.value;

if(isNaN(number)){
    if(number ==='C'){
        field.value='';
    } else if (number ==='<'){
        var a = newValue.split('');
        a.pop();
        var ab = a.join('')
        field.value = ab;

    }
}else{
    
    var newNum = newValue + number;
    field.value = newNum;
}
})


//pin comparison===============


document.getElementById ('pin-submit').addEventListener('click', function(){
    //generated-pin
    var gPin = document.getElementById('pinField');
    var gPinVlalue= gPin.value;

    // type - pin=================

    var tPin = document.getElementById('inputtt');
    var tPinValue = tPin.value;


    //comparison=============
    if(gPinVlalue === tPinValue){
      //var match = document.getElementById('success')
      document.getElementById('success').style.display='block';
      document.getElementById('failure').style.display='none';
    }else{
        document.getElementById('failure').style.display='block';
        document.getElementById('success').style.display='none';
        
    }

})