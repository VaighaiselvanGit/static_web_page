// targeting button class
document.getElementById("btn_1").addEventListener('click',function(){
    var name = document.getElementById("1").value;
    var password = document.getElementById("2").value;
    document.getElementById("none").innerHTML = "Name: "+name+" "+"Password: "+password;
    
})