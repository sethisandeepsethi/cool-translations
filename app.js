var btnTranslate = document.querySelector('#btn-translate')
var txtInput = document.querySelector('#txt-input')
var lblOutput = document.querySelector('#output')

function clickEventHandler(){
    console.log('Translate button clicked !!')
    console.log(`User entered: ${txtInput.value}`)
    lblOutput.innerText = `Translation of ${txtInput.value}`
}

btnTranslate.addEventListener("click", clickEventHandler)