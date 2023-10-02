function convert(){
    var opt=document.getElementById('conv').value;
    if(opt==='1'){
        document.getElementById('input1').innerText="Enter Temperatue in Kelvin";
        var temp=parseFloat(document.getElementById('one').value);
        var a=273.15;
        var an=temp-a;
        document.getElementById('ans').innerText=an.toFixed(2);
    }
}