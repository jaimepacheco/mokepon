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
let mapaBackground = new Image()
let mascotaJugadorObjeto
mapaBackground.src='./assets/mokemap.png'



const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionMensajes = document.getElementById('mensajes')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')
let lienzo = mapa.getContext('2d')
let intervalo
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

let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoDelMapa = 350

if (anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa - 20
}

alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

class Mokepon{
    constructor(nombre,foto,vida,fotoMapa){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 40
        this.alto = 40
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }
    pintarMokepon(){
        lienzo.drawImage(
        this.mapaFoto,
        this.x,
        this.y,
        this.alto,
        this.ancho 
    )
    }
}

let hipodoge = new Mokepon('Hipodoge','./assets/mokepons_mokepon_hipodoge_attack.png',5,'./assets/hipodoge.png')
let capipepo = new Mokepon('Capipepo','./assets/mokepons_mokepon_capipepo_attack.png',5,'./assets/capipepo.png')
let ratigueya = new Mokepon('Ratigueya','./assets/mokepons_mokepon_ratigueya_attack.png',5,'./assets/ratigueya.png')

let hipodogeEnemigo = new Mokepon('Hipodoge','./assets/mokepons_mokepon_hipodoge_attack.png',5,'./assets/hipodoge.png')
let capipepoEnemigo = new Mokepon('Capipepo','./assets/mokepons_mokepon_capipepo_attack.png',5,'./assets/capipepo.png')
let ratigueyaEnemigo = new Mokepon('Ratigueya','./assets/mokepons_mokepon_ratigueya_attack.png',5,'./assets/ratigueya.png')

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

hipodogeEnemigo.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
)

capipepoEnemigo.ataques.push(
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
)

ratigueyaEnemigo.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
)

mokepones.push(hipodoge,capipepo,ratigueya)

function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display = 'none'
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

    sectionSeleccionarAtaque.style.display = 'none'
    


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
    console.log(mascotaPlayer)
    sectionVerMapa.style.display = 'flex'
    iniciarMapa()
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

function seleccionarMascotaEnemigo(enemigo){
    spanMascotaEnemigo.innerHTML=enemigo.nombre
    ataqueMokeponEnemigo = enemigo.ataques
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

function pintarCanvas(){
    mascotaJugadorObjeto=obtenerObjetoMascota(mascotaPlayer)
    mascotaJugadorObjeto.x=mascotaJugadorObjeto.x+mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y=mascotaJugadorObjeto.y+mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0,0,mapa.clientWidth,mapa.clientHeight)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
   mascotaJugadorObjeto.pintarMokepon()
   hipodogeEnemigo.pintarMokepon()
   capipepoEnemigo.pintarMokepon()
   ratigueyaEnemigo.pintarMokepon()

   if(mascotaJugadorObjeto.velocidadX!==0 || mascotaJugadorObjeto.velocidadY!==0){
        revisarColision(hipodogeEnemigo)
        revisarColision(capipepoEnemigo)
        revisarColision(ratigueyaEnemigo)
   }
}

function moverDerecha(){
    mascotaJugadorObjeto.velocidadX = 5
}

function moverIzquierda(){
    mascotaJugadorObjeto.velocidadX = -5
}

function moverAbajo(){
    mascotaJugadorObjeto.velocidadY = 5
}

function moverArriba(){
    mascotaJugadorObjeto.velocidadY = -5
}

function detenerMovimiento(){
    mascotaJugadorObjeto.velocidadX=0
    mascotaJugadorObjeto.velocidadY=0
}

function iniciarMapa(){
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaPlayer)
    console.log(mascotaJugadorObjeto)
    intervalo=setInterval(pintarCanvas, 50)
    window.addEventListener('keydown',sePresionoUnaTecla)
    window.addEventListener('keyup',detenerMovimiento)
}

function sePresionoUnaTecla(event){
    console.log(event.key)
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
             break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
            break
        default:
            break;
    }
}

function obtenerObjetoMascota(){
    for (let index = 0; index < mokepones.length; index++) {
        if(mascotaPlayer== mokepones[index].nombre){
            return mokepones[index]
        }
        
    }
}

function revisarColision(enemigo){
    const arribaEnemigo=enemigo.y
    const abajoEnemigo=arribaEnemigo+enemigo.alto
    const izquierdaEnemigo=enemigo.x
    const derechaEnemigo=izquierdaEnemigo+enemigo.ancho
    

    const arribaMascota=mascotaJugadorObjeto.y
    const abajoMascota=arribaMascota+mascotaJugadorObjeto.alto
    const izquierdaMascota=mascotaJugadorObjeto.x 
    const derechaMascota=izquierdaMascota+mascotaJugadorObjeto.ancho
    

    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ){
        return
    }
    detenerMovimiento()
    clearInterval(intervalo)
    console.log('Se detecto una colision')
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'none'
    
    
    seleccionarMascotaEnemigo(enemigo)  

}

window.addEventListener('load',iniciarJuego)






