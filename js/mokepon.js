let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3
let mokepones = []

const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionMensajes = document.getElementById('mensajes')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')

const inputHipodoge = document.getElementById('hipodoge')
const inputCapipepo = document.getElementById('Capipepo')
const inputRatigueya = document.getElementById('Ratigueya')
const inputLangostelvis = document.getElementById('Langostelvis')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const seccionMensajes = document.getElementById('mensajes')
const mascotaJugador = document.getElementById('mascota-jugador')
const msgVidasJugador = document.getElementById('vidas-jugador')
const msgAtaquePropio = document.createElement('p')
const ataquesJugador = document.getElementById('ataques-jugador')
const mascotaEnemigo = document.getElementById('mascota-enemigo')
const msgVidasENemigo = document.getElementById('vidas-enemigo')
const msgAtaqueAjeno = document.createElement('p')
const ataquesEnemigo = document.getElementById('ataques-enemigo')

const resultadoCombate = document.getElementById('resultado')
const resultadoJuego = document.getElementById('resultado')

const contenedorTarjetas = document.getElementById('contenedor-tarjetas')


class Mokepon{
    constructor(nombre,foto,vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge','./assets/mokepons_mokepon_hipodoge_attack.png',5)
let capipepo = new Mokepon('Capipepo','./assets/mokepons_mokepon_capipepo_attack.png',5)
let ratigueya = new Mokepon('Ratigueya','./assets/mokepons_mokepon_ratigueya_attack.png',5)

hipodoge.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
)

capipepo.ataques.push(
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
)

ratigueya.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
)

mokepones.push(hipodoge,capipepo,ratigueya)

function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = 'none'
    sectionMensajes.style.display = 'none'
    sectionReiniciar.style.display = 'none'

    mokepones.forEach((mokepon)=> {
        opciondeMokepones=`
         <input type="radio" name="mascota" id=${mokepon.nombre}/>
         <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `

        contenedorTarjetas.innerHTML += opciondeMokepones
    });

    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
    botonFuego.addEventListener('click',ataqueFuego)
    botonAgua.addEventListener('click',ataqueAgua)
    botonTierra.addEventListener('click',ataqueTierra)

    botonReiniciar.addEventListener('click',reiniciarJuego)
}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
 }

function seleccionarMascotaJugador(){

    sectionSeleccionarAtaque.style.display = 'flex'
    sectionMensajes.style.display = 'flex'
    sectionSeleccionarMascota.style.display = 'none'

    if (inputHipodoge.checked)
    {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    }
    else if (inputCapipepo.checked)
    {
        spanMascotaJugador.innerHTML = 'Capipepo'
    }
    else if (inputRatigueya.checked)
    {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    }
    else if (inputLangostelvis.checked)
    {
        alert('Elegiste Langostelvis')
    }
    else{
        alert("No has seleccionado nada mi pana")
    }

    mascotaEnemiga = seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(1,3)
    
    if(mascotaAleatoria == 1)
    {
        spanMascotaEnemigo.innerHTML='Hipodoge'
    }
    else if(mascotaAleatoria==2)
    {
        spanMascotaEnemigo.innerHTML='Capipepo'
    }
    else{
        spanMascotaEnemigo.innerHTML='Ratigueya'
    }
}


function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueEnemy()
}

function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueEnemy()   
}

function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueEnemy()
}

function ataqueEnemy(){
    ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = 'FUEGO'
    }
    else if(ataqueAleatorio==2){
        ataqueEnemigo = 'AGUA'
    }
    else{
        ataqueEnemigo = 'TIERRA'
    }

    combate()
}

function crearMensaje(resultado){
    msgVidasJugador.innerHTML=vidasJugador
    msgVidasENemigo.innerHTML=vidasEnemigo

    msgAtaqueAjeno.innerHTML = ataqueEnemigo
    msgAtaquePropio.innerHTML = ataqueJugador

    ataquesJugador.appendChild(msgAtaquePropio)
    ataquesEnemigo.appendChild(msgAtaqueAjeno)


    resultadoCombate.innerHTML =resultado
}

function combate(){
    if(ataqueJugador=='FUEGO' && ataqueEnemigo=='TIERRA'){
        vidasEnemigo = vidasEnemigo - 1
        crearMensaje('GANASTE')
    }
    else if(ataqueJugador=='AGUA' && ataqueEnemigo=='FUEGO'){
        vidasEnemigo = vidasEnemigo - 1
        crearMensaje('GANASTE')
    }
    else if(ataqueJugador=='TIERRA' && ataqueEnemigo=='AGUA'){
        vidasEnemigo = vidasEnemigo - 1
        crearMensaje('GANASTE')
    }
    else if(ataqueJugador==ataqueEnemigo){
        crearMensaje('EMPATASTE')
    }
    else{
        vidasJugador=vidasJugador-1
        crearMensaje('PERDISTE')
    }

    verificacionVidas()
}

function verificacionVidas(){
    if(vidasEnemigo==0 ){
        crearMensajeFinal('Ganaste mi bro. Felicitaciones')
    }
    else if(vidasJugador==0){
        crearMensajeFinal('Lo siento. Perdiste')
    }
}

function crearMensajeFinal(resultadoFinal){
    resultadoJuego.innerHTML = resultadoFinal

    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
    
    sectionReiniciar.style.display='block'
}

function reiniciarJuego(){
    location.reload()
}

window.addEventListener('load',iniciarJuego)




