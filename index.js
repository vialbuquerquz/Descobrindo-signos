let data = parseInt(prompt('Qual o dia do seu aniversário?'))
let mes = window.prompt('Qual o mês em que você nasceu?')

if (mes == 'janeiro' && data <= 19 && data <= 20 || mes == 'dezembro' && data >= 20 && data <= 31){
    alert('Seu signo é de capricórnio.')
}
else if (mes == 'janeiro' && data <= 1 && data >= 20 || mes == 'fevereiro' && data >= 1 && data <= 19){
    alert('Seu signo é de aquário.')
}
else if (mes == 'fevereiro' && data <= 20 && data >= 30 || mes == 'março' && data >= 1 && data <= 20){
    alert('Seu signo é de peixes.')
}
else if (mes == 'março' && data <= 21 && data >= 31 || mes == 'abril' && data >= 1 && data <= 20){
    alert('Seu signo é de áries.')
}
else if (mes == 'abril' && data <= 21 && data >= 31 || mes == 'junho' && data >= 1 && data <= 20){
    alert('Seu signo é de gêmeos.')
}
else if (mes == 'junho' && data <= 21 && data >= 31 || mes == 'julho' && data >= 1 && data <= 22){
    alert('Seu signo é de câncer.')
}
else if (mes == 'julho' && data <= 23 && data >= 31 || mes == 'agosto' && data >= 1 && data <= 22){
    alert('Seu signo é de leão.')
}
else if (mes == 'agosto' && data <= 23 && data >= 31 || mes == 'setembro' && data >= 1 && data <= 22){
    alert('Seu signo é de virgem.')
}
else if (mes == 'setembro' && data <= 23 && data >= 31 || mes == 'outubro' && data >= 1 && data <= 22){
    alert('Seu signo é de libra.')
}
else if (mes == 'outubro' && data <= 23 && data >= 31 || mes == 'novembro' && data >= 1 && data <= 21){
    alert('Seu signo é de escorpião.')
}


