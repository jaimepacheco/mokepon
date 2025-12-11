let ataqueJugador = []
let ataqueEnemigo = []
let vidasJugador = 3
let vidasEnemigo = 3
let mokepones = []
let inputHipodoge
let inputCapipepo
let inputRatigueya
let ataques = []
let mascotaPlayer
let botonFuego
let botonAgua
let botonTierra
let botones=[]
let ataqueMokeponEnemigo=[]
let indexAtaqueEnemigo
let indexAtaqueJugador
let victoriasJugador = 0
let victoriasEnemigo = 0

const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionMensajes = document.getElementById('mensajes')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')

const botonReiniciar = document.getElementById('boton-reiniciar')


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
const contenedorAtaques = document.getElementById('contenedor-ataques')

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
         <input type="radio" name="mascota" id=${mokepon.nombre}>
         <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `

        contenedorTarjetas.innerHTML += opciondeMokepones

    })

    inputHipodoge = document.getElementById('Hipodoge')
    inputCapipepo = document.getElementById('Capipepo')
    inputRatigueya = document.getElementById('Ratigueya')

    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)

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
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaPlayer = inputHipodoge.id
    }
    else if (inputCapipepo.checked)
    {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaPlayer = inputCapipepo.id
    }
    else if (inputRatigueya.checked)
    {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaPlayer = inputRatigueya.id
    }
    else if (inputLangostelvis.checked)
    {
        alert('Elegiste Langostelvis')
    }
    else{
        alert("No has seleccionado nada mi pana")
    }
    
    extraerAtaques(mascotaPlayer)
    mascotaEnemiga = seleccionarMascotaEnemigo()
}


function extraerAtaques(mascota){
    let ataques
    for (let index = 0; index < mokepones.length; index++) {
        if (mokepones[index].nombre == mascota) {
            ataques=mokepones[index].ataques
        }    
    } 
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach(ataque => {
        opciondeAtaques=`<button id=${ataque.id} class="poder BAtaque">${ataque.nombre}</button>`
        contenedorAtaques.innerHTML += opciondeAtaques
    });

    // botonFuego = document.getElementById('boton-fuego')
    // botonAgua = document.getElementById('boton-agua')
    // botonTierra = document.getElementById('boton-tierra')
    botones=document.querySelectorAll('.BAtaque')

}

function secuenciaAtaque(){
    botones.forEach(boton => {
        boton.addEventListener('click',(e)=>
        {
            if(e.target.textContent === '🔥'){
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }
            else if(e.target.textContent === '💧'){
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }
            else{
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }
            ataqueEnemy()
        })
    });
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(0,mokepones.length-1)
    spanMascotaEnemigo.innerHTML=mokepones[mascotaAleatoria].nombre
    ataqueMokeponEnemigo = mokepones[mascotaAleatoria].ataques
    secuenciaAtaque()
}

function ataqueEnemy(){
    let ataqueAleatorio = aleatorio(0,ataqueMokeponEnemigo.length-1)

    if(ataqueAleatorio == 0 || ataqueAleatorio == 1){
        ataqueEnemigo.push('FUEGO')
    }
    else if(ataqueAleatorio == 3 || ataqueAleatorio == 4){
        ataqueEnemigo.push('AGUA')
    }
    else{
        ataqueEnemigo.push('TIERRA')
    }

    console.log(ataqueEnemigo)

    iniciarPelea()
}

function iniciarPelea(){
    if(ataqueEnemigo.length===5){
        combate()
    }
}

function crearMensaje(resultado){

    msgVidasJugador.innerHTML=victoriasJugador
    msgVidasENemigo.innerHTML=victoriasEnemigo

    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')

    nuevoAtaqueJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesJugador.appendChild(nuevoAtaqueJugador)
    ataquesEnemigo.appendChild(nuevoAtaqueEnemigo)


    resultadoCombate.innerHTML =resultado
}

function indexAmbosOponentes(jugador,enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]

}

function combate(){


    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] == ataqueEnemigo[index]){
            indexAmbosOponentes(index,index)
            crearMensaje('EMPATE')
        }
        else if(ataqueJugador[index]=='FUEGO' && ataqueEnemigo[index]=='TIERRA'){
            victoriasJugador=victoriasJugador+1
            indexAmbosOponentes(index,index)
            crearMensaje('GANASTE')
        }
        else if(ataqueJugador[index]=='AGUA' && ataqueEnemigo[index]=='FUEGO'){
            victoriasJugador=victoriasJugador+1
            vidasEnemigo = vidasEnemigo - 1
            indexAmbosOponentes(index,index)
            crearMensaje('GANASTE')
        }
        else if(ataqueJugador[index]=='TIERRA' && ataqueEnemigo[index]=='AGUA'){
            victoriasJugador=victoriasJugador+1
            vidasEnemigo = vidasEnemigo - 1
            indexAmbosOponentes(index,index)
            crearMensaje('GANASTE')
        }
        else{
            victoriasEnemigo=victoriasEnemigo+1
            indexAmbosOponentes(index,index)
            crearMensaje('PERDISTE')
        }
        
    }
    verificacionVidas()
}

function verificacionVidas(){
    if(victoriasJugador>victoriasEnemigo ){
        crearMensajeFinal('Ganaste mi bro. Felicitaciones')
    }
    else if(victoriasEnemigo>victoriasJugador){
        crearMensajeFinal('Lo siento. Perdiste')
    }
    else{
        crearMensajeFinal('Empate')
    }
}

function crearMensajeFinal(resultadoFinal){
    resultadoJuego.innerHTML = resultadoFinal
    
    sectionReiniciar.style.display='block'
}

function reiniciarJuego(){
    location.reload()
}

window.addEventListener('load',iniciarJuego)




