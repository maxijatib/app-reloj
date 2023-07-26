window.addEventListener('load', () => {

    //Estamos tomando el elemento HTML por el ID 

    let horaHTML = document.getElementById('hora'); 
    let minutoHTML = document.getElementById('minuto');
    let segundoHTML = document.getElementById('segundo');

    // Función para mostrar la hora

    const mostrarHora = () => { 

        // Asignpo el metodo Date() a una variable para traer la fecha

        let fecha = new Date(); 

        // Creo variables para asignarles a cada una la fecha con su metodo

        let hora = fecha.getHours(); //
        let minuto = fecha.getMinutes();
        let segundo = fecha.getSeconds();

        // Tomo las variables que contienen el elemento HTML y les     asigno el valor de las variables en las que he capturado las horas, minutos y segundos

        // Con el metodo .padStart(longitud, [caracterDeRelleno]) hago que el formato de la hora, minuto y segundo, tenga dos digitos

        horaHTML.textContent = String(hora).padStart(2, "0"); 
        minutoHTML.textContent = String(minuto).padStart(2, "0");
        segundoHTML.textContent = String(segundo).padStart(2, "0");

        // Con el metodo setTimeout() y poniendo como parametros la funcion mostrarHora() y el parametro de segundos en milisegundos (1000 ms) hago que la hora deje de ser estática y todo empiece a funcionar segundo a segundo

        setTimeout(mostrarHora, 1000);

    }

    mostrarHora()
    
})