var segundos = 0;
var minutos = 0;
var milisegundos = 0;
var intervalo;
var cronometro = document.getElementById("numeros");
cronometro.innerHTML = "<span>" + "00" + "</span><span>" + "00" + "</span><span>" + "00" + "</span>"; 

$(document).ready(function(){
    var fecha = new Date();
    $(".fecha").text(fecha.getFullYear());

    function iniciar(){
        intervalo = setInterval(function(){iniciarCronometro(); }, 10);
        $("#inicia").attr("src","./img/pausa.svg");
        $("#inicia").attr("id", "pausa");
    }

    function pausar(){
        clearInterval(intervalo);
        $("#pausa").attr("src","./img/inicio.svg");
        $("#pausa").attr("id", "inicia");
    }

    $(document).on("click", "#inicia", function(){
        iniciar();
    });
    $(document).on("click", "#pausa", function(){
        pausar();
    });
    $(document).on("click", "#reinicio", function(){
        reiniciar();
    });
});

function iniciarCronometro(){
    milisegundos+=1;

    if(milisegundos > 99){
        milisegundos = 0;
        segundos+=1

        if(segundos > 59){
            segundos=0;
            minutos+=1
        }
    }
    if(segundos < 10){
        cronometro.innerHTML = "<span>" + "0"+minutos + "</span><span>" + "0"+segundos + "</span><span>" + milisegundos + "</span>"; 
    }else if(minutos < 10){
        cronometro.innerHTML = "<span>" + "0"+minutos + "</span><span>" + segundos + "</span><span>" + milisegundos + "</span>"; 
    }else{
        cronometro.innerHTML = "<span>" + minutos + "</span><span>" + segundos + "</span><span>" + milisegundos + "</span>"; 
    }
}

function reiniciar(){
    cronometro.innerHTML = "<span>" + "00" + "</span><span>" + "00" + "</span><span>" + "00" + "</span>"; 
    
    if(intervalo){
        $("#pausa").attr("src","./img/inicio.svg");
        $("#pausa").attr("id", "inicia");
        clearInterval(intervalo);
    }

    milisegundos = 0;
    segundos = 0;
    minutos = 0;
}
