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