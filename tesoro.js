let sboard = document.querySelector('[data-function="board"]')
let counter = document.querySelector('[data-function="attempts"]')

let sfila = prompt('Introduce un número de filas');
let scolum = prompt('Introduce un número de columnas');
let intentos = 0;

const aleatorio1 = Math.floor(Math.random() * sfila)
const aleatorio2 = Math.floor(Math.random() * scolum)


for (let i = 0; i < sfila; i++) {
    let str = document.createElement('tr');
    sboard.appendChild(str);

    for (let index = 0; index < scolum; index++) {
        let std = document.createElement('td');
        let simg = document.createElement('img');
        simg.setAttribute('src', "./assets/x.png");
        str.appendChild(std);
        std.appendChild(simg);

        const imgRandom = () => {
            if (i == aleatorio1 && index == aleatorio2) {
                simg.src = './assets/chest.png'
                // Ponemos SetTimeOut para controlar que el alert no salga antes que el resultado
                setTimeout(() => {
                    alert('Has ganado!!!');
                    location.reload();
                }, 250);
            }
            else {
                simg.src = './assets/skull.png'
                intentos += 1;
                counter.textContent = intentos
            }
        }
        simg.addEventListener('click', imgRandom,)

    }
}

