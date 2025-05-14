let varGlobal1 = "texto de variable global";

    function FCambioColor() {
        let vartemporal = "texto temporal";
        let vtexto1 = document.getElementById("ejmDOM1");
        vtexto1.textContent = "Texto cambiado por función FCambioColor";
        vtexto1.style.color = "RED";
        vtexto1.insertAdjacentHTML("beforeend", " <br>este texto es adicional");
        vtexto1.style.backgroundColor = "green";
        vtexto1.insertAdjacentHTML("beforeend", varGlobal1); // La variable global se puede utilizar dentro de cualquier función
    }

    // Función que muestra el texto fuera de la función
    let vtexto1 = "texto fuera de funcion";
    console.log(vtexto1);
    // console.log(vartemporal); // vartemporal no está definido afuera de la función

    function FCambioclase1() {
        let vtexto2 = document.getElementsByClassName("classDOM1");
        vtexto2[1].innerHTML = "Elemento [1] del arreglo de la clase classDOM1";
        console.log("Tamaño de array =", vtexto2.length);
    }

    function FCambiotag1() {
        let vtexto3 = document.getElementsByClassName("h2");
        if (vtexto3.length > 21) {
            vtexto3[21].innerHTML = "Elemento h2 cambiado por tagDOM1";
        } else {
            alert("No hay suficientes elementos h2.");
        }
    }

    function FUsoFor1() {
        const vTextoClass = document.getElementsByClassName("classFOR1");
        var vTextoTotal = "";
        // Como length = 4 --> irá desde 0 hasta 3
        for (let i = 0; i < vTextoClass.length; i++) {
            vTextoClass[i].style.border = "2px solid red";
            vTextoTotal = vTextoTotal + vTextoClass[i].innerText + '-';
        }

        var nuevoH1 = document.createElement("h1");
        var texto = document.createTextNode(vTextoTotal);
        nuevoH1.appendChild(texto);
        vTextoClass[3].appendChild(nuevoH1);
    }

    function FEliminarConcat() {
        const vTextoClass = document.getElementsByClassName("classFOR1");
        let rpta = prompt("¿Estás seguro de eliminar el texto concatenado? (S/N)", '');
        if (rpta.toUpperCase() == "S") {  // Verificar tanto mayúsculas como minúsculas
            vTextoClass[3].remove();  // Eliminar el tercer elemento de la clase
            alert("CONCATENACIÓN ELIMINADA");
        } else if (rpta.toUpperCase() == "N") {
            alert("NO SE ELIMINARÁ");
        } else {
            alert("OPCIÓN INCORRECTA - Ingresa nuevamente");
        }
    }

    function FCapturarNombre() {
        const vTexto1 = document.getElementById("nombre");
        const vTexto2 = document.querySelectorAll("input.datospersonales");
        const vTexto3 = document.getElementById("clave");

        // Cambiar el color del campo nombre
        vTexto1.style.color = "red";
        var valor1 = vTexto1.value; // Obtener el contenido de "nombre"
        var valor2 = ""; // Iniciar variable para concatenar valores

        // Asignar el valor de "nombre" al campo "clave"
        vTexto3.value = valor1;

        // Recorrer todos los inputs con la clase "datospersonales"
        vTexto2.forEach(input => {
            valor2 = `${valor2}${input.name}: ${input.value}: ${input.id}      \n`; 
            input.style.border = "2px solid orange";
        });

        // Cambiar el color de fondo del segundo campo
        vTexto2[1].style.backgroundColor = "green";

        // Asignar el valor concatenado a la observación
        document.getElementById('observacion').value = valor2;
        console.log('El valor del nombre es:', valor1);
    }

    function FValidarCiclo() {
        const varciclo = document.getElementsByName("ciclo");

        for (let i = 0; i < varciclo.length; i++) {
            if (varciclo[i].checked == true) {
                document.getElementById('observacion').value = varciclo[i].value;
                return; // Detener el bucle una vez que se encuentre el seleccionado
            }
        }
    }

    document.addEventListener("DOMContentLoaded", () => {
        const radioButtons = document.querySelectorAll('input[name="ciclo"]');

        radioButtons.forEach(radio => {
            radio.addEventListener('change', event => {
                console.log("Ciclo seleccionado:", event.target.value);
                document.getElementById('observacion').value = event.target.value;
            });
        });
    });

    function FVerificacion(){
        let nombre1= prompt("Ingresa tu primer nombre",'');
        let nombre2= prompt("Ingresa tu segundo nombre",'');
        let textContent= "";
        let ape1= prompt("Ingresa tu primer apellido",'');
        let ape2= prompt("Ingresa tu segundo apellido",'');
        let conca= "";
        
        let longitud1= nombre1.length;
        let longitud2= nombre2.length;
        let longitudape1= ape1.length;
        let longitudape2= ape2.length;


        if (longitud1<longitud2)
        {
            alert("El primer nombre: " +nombre1+ " es menor al segundo nombre:" +nombre2);

            textContent= nombre2 + nombre1;
        }

        else
        { if(longitud1 > longitud2)
        {
            alert("El primer nombre: " +nombre1+ " es mayor al segundo nombre:" +nombre2);
            textContent= nombre1 + nombre2;

        }
        else {
            alert("El primer nombre: " +nombre1+ " es igual al segundo nombre:" +nombre2);
            textContent= nombre1 + nombre2;

        }

        }

        alert("El nombre completo es: " +textContent);

    

    if (longitudape1<longitudape2)
        {
            alert("El primer apellido: " +ape1+ " es menor al segundo apellido: " +ape2);

            conca= ape2 + ape1;
        }

        else
        { if(longitudape1 > longitudape2)
        {
            alert("El primer apellido: " +ape1+ " es mayor al segundo apellido: " +ape2);
            conca= ape1 + nombre2;

        }
        else {
            alert("El primer apellido: " +ape1+ " es igual al segundo apellido: " +ape2);
            conca= ape1 + ape2;

        }

        }

        alert("El apellido completo es: " +conca);
        alert("El nombre completo es" +textContent + conca); 

    }
























    function concatenarNombres() {
        // Obtener los valores de los campos de entrada
        let nombre1 = document.getElementById("nombre1").value;
        let nombre2 = document.getElementById("nombre2").value;

        // Comparar la longitud de los nombres y concatenar en el orden correcto
        let nombreConcatenado;
        
        if (nombre1.length >= nombre2.length) {
            nombreConcatenado = nombre1 + " " + nombre2;
        } else {
            nombreConcatenado = nombre2 + " " + nombre1;
        }

        // Mostrar el resultado en un alert
        alert("Los nombres concatenados son: " + nombreConcatenado);
    }
    