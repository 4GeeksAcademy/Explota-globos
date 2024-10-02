//Añadimos todos las cadenas de texto al array junto a 2 null
let ballonsMap = [
    'red','green','blue', 'pink',
    'grey','purple','yellow', null,
    'pink', null,'black','green',
    'brown','purple','blue','yellow',
    'green','black','red','pink',
];

//Funcion donde recibimos la posicion para globos que vamos a explotar
const popBalloon = (position) => {

    //Recorremos si la posicion es valida (mayor 0 y menor del array)
    if (position >= 0 && position < ballonsMap.length) {

        //Si la posicion es valida, cambiamos a null
        ballonsMap[position] = null;

    //Actualizamos el render
    render();
    }
}

const render = () => {

    // Convertimos los globos en html real, pasamos el color y la posicion
    // Con el metodo .map creamos un nuevo array pero sin modificar el nuestro
    let ballons = ballonsMap.map((color, position) => {

        //Retornamos color si es verdadero, creamos clase balloon active
        // y hacemos que tengo un onclick en su posicion
        return color ? `<div class="balloon active" style="background: ${color};" onclick="popBalloon(${position})"></div>` 
        
        //Si es falso se crea el div del globo explotado
        : `<div class="balloon popped"></div>`;
    });

    //Filtramos cuantos globos no son null
    let activeBalloons = ballonsMap.filter(ballons => ballons !== null);
    
    //Actualizamos la cuenta de los globos en el id #balloon-count
    document.querySelector("#balloon-count").innerText = activeBalloons.length;
    
    //Actualizamos el mapa en el html
    document.querySelector("#balloon-map").innerHTML = ballons.join(''); 


    if(activeBalloons == 0) window.location.reload(); 
}

// Llamamos a la funcion render cuando la pagina carga
window.onload = render();