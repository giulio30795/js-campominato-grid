// Consegna
// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range (vedi immagine allegata):
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

const container = document.querySelector('.grid-container')
const btn = document. querySelector('.btn')
const scelta = document.getElementById('difficoltà')

console.log(scelta);

btn.addEventListener('click' , function(){
    let numeroCelle = 0
    if (scelta.value = 'facile'){
        numeroCelle = 49
    } else if 
        (scelta.value = 'medio'){
            numeroCelle = 81
    }else if (scelta.value = 'difficile') {
        numeroCelle = 100
    }

    for(let i = 0; i < numeroCelle; i++){
        const square = document.createElement('div')
        square.classList.add('.square')
    }
    
})







// Funzioni

