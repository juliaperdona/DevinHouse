let anoDigitado = window.prompt('Digite um ano:')
let anoAtual = new Date().getFullYear()

let diferenca = anoDigitado - anoAtual

swal(`A diferença de anos entre ${anoDigitado} e ${anoAtual} é: ${diferenca}`)