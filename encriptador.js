function encriptar(){
    //alert("Encriptar funciona");
    var textoIngresado = document.getElementById("texto").value;//prompt("ingrese el texto");
    var resultadoEncriptado = document.getElementById("textoResultado");
    textoIngresado = textoIngresado.replaceAll("e", 'enter').replaceAll("i",'imes').replaceAll("a", 'ai').replaceAll("o",'ober').replaceAll("u",'ufat');    
    resultadoEncriptado.value = textoIngresado;
    
    lipiar();
}
encriptar();

function desencriptar(){
    
    var textoIngresadoDos = document.getElementById("texto").value; //prompt("ingrese el texto");
    var resultadoDesencriptado = document.getElementById("textoResultado");    
    textoIngresadoDos =textoIngresadoDos.replaceAll("ai", 'a').replaceAll("enter", 'e').replaceAll("imes",'i').replaceAll("ober",'o').replaceAll("ufat",'u');
    resultadoDesencriptado.value = textoIngresadoDos;
    lipiar();
}
desencriptar();


function lipiar(){
   let valorCaja = document.querySelector("#texto");   
   valorCaja.value = "";
   
}

function copiar() {
    let copiarTexto = document.querySelector("#textoResultado");
    let valorResultado = document.querySelector("#textoResultado");
    copiarTexto.select();
    document.execCommand("copy");
    valorResultado.value = "";
  }  
  document.querySelector("#copy").addEventListener("click", copiar);


