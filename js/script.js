// Consegna
// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range (vedi immagine allegata):
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

let container = document.querySelector('.grid-container')
const btn = document. querySelector('.btn')
const scelta = document.getElementById('difficoltà')


btn.addEventListener('click' , function(){
        container.innerHTML =''
    let numeroCelle = 0
    let numeroElementi = 0
    if (scelta.value == 'facile'){
        numeroCelle = 100
        numeroElementi = 10
    } else if 
        (scelta.value == 'medio'){
        numeroCelle = 81
        numeroElementi = 9
    }else if (scelta.value == 'difficile') {
        numeroCelle = 49
        numeroElementi = 7
    }
    for(let i = 1; i <= numeroCelle; i++){
        const square = document.createElement('div')
        square.classList.add('square')
        container.append(square)
        square.style.width=`calc(100% / ${numeroElementi})`
        let number = i
        const span = document.createElement('span')
        span.innerHTML+= number
        square.append(span)
        square.addEventListener('click', function(){
            square.classList.add('clicked')
        })
    }
})