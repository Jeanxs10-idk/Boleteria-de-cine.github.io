let varGloball1="Texto de variable global";

function FCambioColor(){   
    let varTemporal1= "Texto temporal";
    let vTexto1=document.getElementById("ejmDOM1");


    vTexto1.textContent="Texto cambiado por FCambioColor()";
    vTexto1.style.color="red";
    vTexto1.insertAdjacentHTML("beforeEnd",
        "<br>este texto es adicional <br><br>");
        vTexto1.style.backgroundColor="green";

    vTexto1.insertAdjacentHTML("beforeEnd",varGloball1);
    //La variable global se puede utilizar dentro de cualquier funcion

}
vTexto1= "Texto fuera de funcion"; //vtexto1 no es la variable de la funcion
console.log(vTexto1);
console.log(varTemporal1); //varTemporal no esta definido afuer de funcion

function FCambioClase1(){
    let vtexto2=document.getElementsByClassName("ClassDOM1");
    vtexto2[1].innerHTML="Elemento [1] del arreglo de clase classDOM1";
    console.log("Tamaño del array=",vtexto2.length);
    //se coloca el indice 1 por ser el 2do elemento de la clase classDOM1 de la pag web

}

function FCambiotag1(){
    let vtexto3=document.getElementsByClassName("h2");
    vtexto3=[22].innerHTML="Elemento h2 cambiado por tagDOM1";
    vtexto3=[10].innerHTML="Elemento h2 cambiado por tagDOM1";
    //se coloca el indice de 21 por ser el 7to elemento h2 de la pag web index.html

}