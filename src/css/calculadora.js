var x = 0; 
var y = 0;
var o = "null";
var num ="";
var sim = false;
var sinal = "";



function ce( ){
    if (sim === false){
        document.getElementById('h2').innerHTML = "";
        x = 0;
    }
    if (sim === true){
        y =0.
        document.getElementById('h2').innerHTML = "";

    }
    num=""
}
function c( ){
    document.getElementById('h2').innerHTML = "";
    document.getElementById('p').innerHTML = "";
    sim = false;
    o = null;
    x= 0;
    y =0;    
    num=""
}
function del( ){
    
    num = num.substr(-10,(num.length -1));
    document.getElementById('h2').innerHTML = sinal + num;

}
function divisao(){
    document.getElementById('p').innerHTML += sinal + num + " / ";
    if (sim === false){
        sim = true;
        atribuicaoX();
    }
    o = "divisao";
}

function numero(n){
    num = num + n;
    document.getElementById('h2').innerHTML = sinal + num;

}

function vezes(){
    document.getElementById('p').innerHTML += sinal + num + " x ";
    if(sim === false){
        sim = true;
        atribuicaoX();
    }
    o = "vezes";
    
}
function menos(){
    document.getElementById('p').innerHTML += sinal + num + " - ";
    if (sim === false){
        sim = true
        atribuicaoX();
    }
    o = "menos";  
}
function mais(){
    document.getElementById('p').innerHTML += sinal + num + " + ";
    if (sim === false){
        sim = true;
        atribuicaoX();
    }
    o = "mais";
}
function sinal(){
    if (sinal === "") {
        sinal = "-";
    }else if (sinal ==="-"){
        sinal="+";
    }else if (sinal =="+"){
        sinal="-";
    }
    document.getElementById('h2').innerHTML = sinal +num;
}
function virgula(){
    num = num +".";
    document.getElementById('h2').innerHTML = sinal + num;
}
function resultado(){
    document.getElementById('p').innerHTML += sinal +num;
    if (sim === true){
        atribuicaoY();
    }
    opera();
    document.getElementById("h2").innerHTML = x;
    y=0;

}
function opera(){
    if (o === "divisao"){
    x = x / y;
   result = false;
    o = "null";
   
    }else if (o === "vezes"){
     x = x * y;
     o = "null";
    };

 if (o === "menos"){
     x = x - y;
    result = false;
     o = "null";
 };
 if (o === "mais"){
     x = x + y;
    result = false;
     o = "null";
 };

console.log(x);
}
function atribuicaoX(){
    x = parseFloat(sinal+num);
    console.log(x);
    num = ""
    console.log(o);
    sinal = "";
   }

function atribuicaoY(){
    y = parseFloat(sinal+num);
    console.log(y);
    num = ""
    console.log("")
    sinal="";
   }

   function trocar() {
    location.assign('/');
  }