let checkbox = document.getElementById('checkbox');
let cabecalho = document.querySelector('.cabecalho');
let body = document.body;
let modo = document.querySelector('.cabecalho__modo');


checkbox.addEventListener('click', function() {
    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
        modo.innerText = 'Dark Mode';
    } else {
        modo.innerText = 'Light Mode';
    }
});