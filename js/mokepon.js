let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3


function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    let sectionMensajes = document.getElementById('mensajes')
    let sectionReiniciar = document.getElementById('reiniciar')

    sectionSeleccionarAtaque.style.display = 'none'
    sectionMensajes.style.display = 'none'
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click',ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click',reiniciarJuego)

}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
 }

function seleccionarMascotaJugador(){

    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('Capipepo')
    let inputRatigueya = document.getElementById('Ratigueya')
    let inputLangostelvis = document.getElementById('Langostelvis')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    let sectionMensajes = document.getElementById('mensajes')
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')


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
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    
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
    let seccionMensajes = document.getElementById('mensajes')
    let mascotaJugador = document.getElementById('mascota-jugador')
    let msgVidasJugador = document.getElementById('vidas-jugador')
    let msgAtaquePropio = document.createElement('p')
    let ataquesJugador = document.getElementById('ataques-jugador')
    let mascotaEnemigo = document.getElementById('mascota-enemigo')
    let msgVidasENemigo = document.getElementById('vidas-enemigo')
    let msgAtaqueAjeno = document.createElement('p')
    let ataquesEnemigo = document.getElementById('ataques-enemigo')

    let resultadoCombate = document.getElementById('resultado')
    
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
    let seccionMensajes = document.getElementById('mensajes')
    let resultadoJuego = document.getElementById('resultado')

    resultadoJuego.innerHTML = resultadoFinal

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display='block'
}

function reiniciarJuego(){
    location.reload()
}

window.addEventListener('load',iniciarJuego)




