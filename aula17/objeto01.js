let amigo = {nome: 'José',
sexo: 'M',
peso: 85.4,
engordar(p){ //Função dentro do Objeto
    console.log('Engordou');
    this.peso += p;
}};

amigo.engordar(2);
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`);