function convert(){
    var num1=parseFloat(document.getElementById('one').value);
    var oper=document.getElementById('conv').value;
    var ans;
    if(oper=='1'){
        ans=(num1)-273.15;
        document.getElementById('answer').value=ans.toFixed(2)+" "+"Degrees Celcius";
    }
    if(oper=='2'){
        ans=num1+273.15;
        document.getElementById('answer').value=ans.toFixed(2)+" "+"Degrees Kelvin"
    }
    if(oper=='3'){
        ans=(num1-32)/1.8;
        document.getElementById('answer').value=ans.toFixed(2)+" "+"Degrees Celsius";
    }
    if(oper=='4'){
        ans=(num1*1.8)+32;
        document.getElementById('answer').value=ans.toFixed(2)+" "+"Degrees Fahrenheit";
    }
    if(oper=='5'){
        ans=(num1-32)*(5/9)+273.15;
        document.getElementById('answer').value=ans.toFixed(2)+" "+"Degrees Kelvin";
    }
    if(oper=='6'){
        ans=(num1-273.15)*(9/5)+32;
        document.getElementById('answer').value=ans.toFixed(2)+" "+"Degrees Fahrenheit";
    }
}
