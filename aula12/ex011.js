var idade = 66;
console.log(`Você tem ${idade} anos`)
if (idade < 16) { //se a idade for menor que 16 NÃO VOTA
    console.log('Não vota');
} else if (idade < 18 || idade > 65) { //senão se for menor que 18 OU maior que 65 VOTO OPCIONAL
        console.log('Voto opcional')
} else{
    console.log('Voto obrigatório') //senão VOTO OBRIGATÓRIO
}