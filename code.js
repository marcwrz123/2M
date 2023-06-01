
const container = document.getElementById('container')
const welcome = document.getElementById('bienvenida')
const guapo = document.getElementById('div-imagen')
const last = document.getElementById('ultimas-palabras')

const primero = document.getElementById('primero')
const segundo = document.getElementById('segundo')
const tercero = document.getElementById('tercero')
const cuarto = document.getElementById('cuarto')
const quinto = document.getElementById('quinto')

const sexto = document.getElementById('sexto')
const her = document.getElementById('div-her')
const ultimo = document.getElementById('ultimo')

const corazon = document.getElementById('corazon')
const puntos = document.getElementById('puntos')
const besitos = document.getElementById('besito')

const form = document.getElementById('form')

const si = document.getElementById('si')
const no = document.getElementById('no')

const elegido = document.getElementById('elegido')

function begin() {
    container.style.display = 'none'
}

function bienvenida() {
    container.style.display = 'block'
    welcome.style.display = 'none'
    guapo.style.display = 'none'
    last.style.display = 'none'

    segundo.style.display = 'none'
    tercero.style.display = 'none'
    cuarto.style.display = 'none'
    quinto.style.display = 'none'
}  

function enFin() {
    primero.style.display = 'none'
    segundo.style.display = 'flex'
}

function puedesCreer() {
    segundo.style.display = 'none'
    tercero.style.display = 'flex'
}

function quePuedoDecir() {
    tercero.style.display = 'none'
    cuarto.style.display = 'flex'
}

function BuenoConTal() {
    cuarto.style.display = 'none'
    quinto.style.display = 'flex'
}

function imagenDelGuapo() {
    quinto.style.display = 'none'
    guapo.style.display = 'flex'
}

function estoyFeliz() {
    guapo.style.display = 'none'
    last.style.display = 'flex'
    
    her.style.display = 'none'
    ultimo.style.display = 'none'
    form.style.display = 'none'
    elegido.style.display = 'none'
}
function asi() {
    sexto.style.display = 'none'
    her.style.display = 'flex'
}
function teAmo() {
    her.style.display = 'none'
    ultimo.style.display = 'flex'
    
    puntos.style.display = 'none'
    besitos.style.display = 'none'
}
function puntitos() {
    corazon.style.display = 'none'
    puntos.style.display = 'flex'
}
function beso() {
    puntos.style.display = 'none'
    besitos.style.display = 'flex'
    form.style.display = 'flex'

}   

function check() {
    elegido.style.display = 'flex'
}

window.addEventListener('load', begin)
