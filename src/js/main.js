let inputs = document.querySelectorAll('input')
let textArea = document.querySelector('textarea')
let sendButton = document.querySelector('button')
let divCampoObrigatorio = document.querySelectorAll('div')

console.log(inputs)
console.log(textArea)
console.log(sendButton)
console.log(divCampoObrigatorio)

sendButton.addEventListener('click', function() {
    checkTextarea();
    checkInputs();
})

function checkTextarea()  {
    if(textArea.value === "") {
        textArea.classList.remove('borda-verde')
        textArea.classList.add('borda-vermelha')
        divCampoObrigatorio[3].innerHTML = 'campo obrigatório'
        divCampoObrigatorio[3].classList.add('campo-obrigatorio')
        divCampoObrigatorio[3].classList.add('margin-textarea-warning')
        console.log(divCampoObrigatorio[3])
    } else {
        divCampoObrigatorio[3].innerHTML = ""
        textArea.classList.remove('borda-vermelha')
        textArea.classList.add('borda-verde')
    }
}

function checkInputs() {
    inputs.forEach(function(element, index){
        if(element.value === "") {
            element.classList.remove('borda-verde')
            element.classList.add('borda-vermelha')
            divCampoObrigatorio[index].innerHTML = 'campo obrigatório'
            divCampoObrigatorio[index].classList.add('campo-obrigatorio')
            divCampoObrigatorio[index].classList.add('margin-inputs-warning')
        } else {
            divCampoObrigatorio[index].innerHTML = ""
            element.classList.remove('borda-vermelha')
            element.classList.add('borda-verde')
        }
    }) 
}
