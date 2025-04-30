function FCambioColor(){
    
    let vTexto1=document.getElementById("ejmDOM1");

    vTexto1.textContent="Texto cambiado por FCambioColor()";
    vTexto1.style.color="red";
    vTexto1.insertAdjacentHTML("afterend","Textoadicional <br><br>");
    console.log("Texto por consola");

}