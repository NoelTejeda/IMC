window.onload = iniciar;

function iniciar (){
    var btnCalcular=document.getElementById("btnCalcular")
    btnCalcular.addEventListener("click",clickBtnCalcular)
}

function clickBtnCalcular(){

    var txtAltura = document.getElementById("txtAltura")
    var altura =txtAltura.value

    var txtPeso = document.getElementById("txtPeso")
    var peso =txtPeso.value

    var imc = peso/(altura*altura)
    alert("Su imc es = "+Math.round(imc));


}


