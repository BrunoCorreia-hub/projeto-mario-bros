const form = document.querySelector(".caixa-formulario")
const mascara = document.querySelector(".mascara-formulario")

function cliqueiNoBotao(){
    form.style.left = "50%" 
    mascara.style.visibility = "visible"
    form.style.transition = "0.9s"
}

function desapareceMascara(){
    form.style.left = "-140px"
    mascara.style.visibility = "hidden"
}