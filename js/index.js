let no = document.getElementById('no')
let si = document.getElementById('si')
let salir = document.getElementById('salir')
let musica = new Audio('music/julion-alvarez.mp3')

no.addEventListener('mouseover',(e)=>{
    e.preventDefault()
    no.style.marginLeft = getRandom(120,1)+"px"
    no.style.marginTop = getRandom(150,1)+"px"
})

si.addEventListener('click',(e)=>{
    e.preventDefault()
    musica.play()
    window.open('#IrVentanaFlotante', '_self')
})

salir.addEventListener('click',(e)=>{
    e.preventDefault()
    musica.pause()
    window.open('#','_self')
})


function getRandom(max,min){
    let random = Math.round((Math.random()) * (max-min))

    Math.round((Math.random()) * (3-1)) === 1 ? aux = random * (-1) : aux = random

    return aux
}

