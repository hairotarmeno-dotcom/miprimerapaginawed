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


function FUsoFor1()
{
  const vTextoClass = document.getElementsByClassName("classFOR1");
  var vTextoTotal="";
  // como length=4 --> ira desde 0 hasta 3
  for(let i=0 ; i< vTextoClass.length ; i++ )
  {
    vTextoClass[i].style.border ="2px solid red" ;
    vTextoTotal = vTextoTotal + vTextoClass[i].innerText+'-';

  } // fin de for
  var nuevoH1 =document.createElement("h1");
  var texto = document.createTextNode(vTextoTotal);
  nuevoH1.appendChild(texto);
  vTextoClass[3].appendChild(nuevoH1);
  
}  // fin de function

function FUsoForEach1()
{
  const vTextoClass = document.querySelectorAll(".classFOR1");
  var vTextoTotal="";
  // como length=4 --> ira desde 0 hasta 3
  vTextoClass.forEach
  ( iter=>
    {
      iter.style.border ="2px solid blue" ;
      vTextoTotal = vTextoTotal + iter.innerText+'-';
    }
  );
}
  
function FEliminarConcat() {
    const vTextoClass = document.getElementsByClassName("classFOR1");
    let rpta =prompt("Estas seguro de eliminar el texto concatenacion? (S/N)", '');
    if (rpta== "S" || rpta== "s") //
     {
         let rpta2 =prompt("ingerse el numero de fila a eliminar", '');
    if(rpta2 >=0 && rpta2< vTextoClass.length)
    {
    vTextoClass [rptra2].remove();
    alert("CONCATENACION ELEMINADA");  
    }
    else 
    {
    alert("INCORRECTO, no existe esa fila");
    }

     }
     else
      { if(rpta=="N" || rpta=="n")
      { alert("NO SE ELIMINARA");
      }
      else 
      {alert("OPCION INCORRECTA-INgresa nuevamente"); 
      }
      }
}

function FCapturarNombre() {

const vTexto1 = document.getElementById("Nombre");
const vTexto2 = document.querySelectorAll("input.datospersonales");
const vTexto3 = document.getElementById("clave");
const vTexto4 = document.getElementsById("Apellido")

vTexto1.style.color="red";

var valor1 =vTexto1.Value;
var valor2 ="";
vTexto3.value=valor1;


vTexto2.forEach(input =>{
    valor2 = valor2 +  ` ${input.name}: ${input.value}: ${input.id} \n`;
     input.style.border="2px solid orange";
     } );

 vTexto2[1].style.backgroundColor="green";
 document.getElementById('observaton').value = valor2;
}