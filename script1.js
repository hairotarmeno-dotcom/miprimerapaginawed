let varGlobal="Esta es una variable global";
window.vTexto1="";


function FCambioColor() {
 
        vTexto1 =document.getElementById("ejmDOM1");

        vTexto1.textContent="TExto cambiado por funcion FCambioColor()";
        vTexto1.style.color="red";
        vTexto1.style.background="darkblue";
        vTexto1.insertAdjacentHTML("afterend", "texto adicional <br> <br>");
        console.log("Texto por consola");

}

function FCambioClase1() {
    let vTexto2=document.getElementsByClassName("classDOM1");
    vTexto2[1].innerHTML="Elemto [1] del arreglo \n de clase classDOM1";
    vTexto2[1].style.color="cyan";

    vTexto2[0].innerHTML="Elemento [0] del arreglo" + 
                        "de clase classDOM1 ; concatenado con global: " + varGlobal +
                        "\n y su tipo de variable es:" + typeof(varGlobal);

    vTexto2[2].innerHTML="Tamaño del arrey=" + vTexto2.length + 
                        "\n y su tipo de variable es:"+ typeof(vTexto2);



}

function FCambioTag1() {
    let vTexto3=document.getElementsByTagName('h2');
    vTexto3[0].innerHTML="Elemento h2 cambiado por tagDOM1";
    vTexto3[19].innerHTML="Elemento ultimo h2 cambiado por tagDom1";
    vTexto3[19].style.color="magenta";
    varGlobal="variable global modificada";

      vTexto3[19].innerHTML= `tipo de variable de la varGlobal es: ${typeof(varGlobal)} `;
    
}

function FCrear1() {
    let vLista=document.getElementById("ejmDOM1");
    vLista.style.backgroundColor="white"
    vLista.innerHTML="  <ul align='right'  style='color:rgb(47, 59, 34)'> " + 
                    " <li>Capacidad de atencion</li> " +
                    " <li>Consultar dudas no resueltas</li> " +
                    " <li>Repasar temas y realizar tareas en casa</li>" +
                " </ul> ";
   
}


function FAgregarTextoPermanente() {
    let vTexto4=("<br>   <p style='font-size:18px;'> Texto Agragodo con concatenacion permanente </p> ");
    vTexto1.innerHTML=vTexto1.innerHTML+vTexto4;
    
}


function FCrearElemento() {
    var vElemento = document.getElementById("complementario1");

    var nuevoH3= document.createElement("h3");
    var texto= document.createTextNode("deporte favorito: futboll");
    nuevoH3.appendChild(texto);
    vElemento.appendChild(nuevoH3);

    var nuevoInputext= document.createElement("input");
        nuevoInputext.type="text";

    vElemento.appendChild(nuevoInputext);
        
}

function Fqueryselector1(){
    var vObjetitoClass= document.querySelector(".classDOM1");
    vObjetitoClass.innerHTML="Texto cambiado por querey selector a la clase primer indice[0]";

    var vObjetoId= document.querySelector("#ejmDOM1");
    vObjetoId.style.color="yellow";

    var vObjetoTagh2= document.querySelector("h2");
    vObjetoTagh2.style.textAlign="center"
}


function FUsoFor1() {
    const vTestoClass = document.getElementsByClassName("classFOR1");
    var  vTextoTotal="";
   for(let i =0 ; i< vTextoClass.length; i++)
                  {
                  vTextoClass[i].style.border="2px solid yellow";
                  vTextoTotal=vTextoTotal + vTextoClass[i].innerText+ '-';
                  }
                  
   
    var nuevoH1 =document.createElement("h1");
    var text =document.createTextNode(vTextoTotal);
    nuevoH1.appendChild(texto);
    vTextoClass[3].appendChild(nuevoH1);

}

function FUsoForEach1() {
    const vTestoClass = document.querySelectorAll(".classFOR1")
    var  texto= "";

    vTextoclass.forEach
    ( iter=>
    {
        iter.style.border ="2px solid green";
        vTextoTotal=vTextoTotal + iter.innerText+ '-';
    }    
);
    var nuevoH1 =document.createElement("h1");
    var text =document.createTextNode(vTextoTotal);
    nuevoH1.appendChild(texto);
    vTextoClass[3].appendChild(nuevoH1);
    

}


