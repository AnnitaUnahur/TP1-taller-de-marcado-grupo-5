const boton = document.getElementById('btn-modo');

if (boton) {
    boton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('modo', 'oscuro');
            boton.textContent = 'Claro';
        } else {
            localStorage.setItem('modo', 'claro');
            boton.textContent = 'Oscuro';
        }
    });

    if (localStorage.getItem('modo') === 'oscuro') {
        document.body.classList.add('dark-mode');
        boton.textContent = 'Claro';
    }
}

const botones = document.querySelectorAll(".btn-leer");

botones.forEach(boton => {

    boton.addEventListener("click", function(){

        const descripcion = this.previousElementSibling;

        descripcion.classList.toggle("expandida");

        if(descripcion.classList.contains("expandida")){
            this.textContent = "Leer menos";
        }else{
            this.textContent = "Leer más";
        }

    });

});
const preguntas = document.querySelectorAll(".pregunta");

preguntas.forEach(function(pregunta){

    pregunta.addEventListener("click", function(){

        const respuesta = this.nextElementSibling;

        if(respuesta.style.display === "block"){
            respuesta.style.display = "none";
        } else {
            respuesta.style.display = "block";
        }

    });

});
