/*

<========================= Curso de JavaScript - Profº Gustavo Guanabara =========================>

<========================= JavaScript =========================>
===============================================================
    - O JavaScript foi criado em 1995 por Brendan Eich a serviço da Netscape. 
    - Em 1997 surgiu o EcmaScript(versão do JS padronizada)
    - Em 2008 surgiu o navegador Google Chrome
    - Em 2009 surgiu o motor 'V8', que é o motor por baixo do capô do Google Chrome que roda JS
    - V8 possui código aberto(open source)
    - Em 2010 surgiu o 'NodeJS', que é um máquina que roda JS fora do navegador

<========================= Tecnologias(Frameworks, bibliotecas) que utilizam JavaScript =========================>
==================================================================================================================
    - jQuery = Conjunto de bibliotecas, criado pela Mozilla, biblioteca que facilitava muito a interatividade no JS.
    - Angular = Criado e mantido pelo Google, facilita a criação de aplicações web, é uma linguagem menos imperativa, é uma linguagem declarativa, semelhante ao SQL em banco de dados.
    - React = Criado pelo Facebook, funcionalidade semelhante com a do Angular, porém tem algumas flexibilidades maiores.
    - Vue = Criado por um ex-programador do Google.
    - Electron = Mantido pela GitHub, utilizado para criação de interfaces gráficas.
    - Ionic = É um SDK(Software Development Kit) utilizado para criar aplicações de dispositivos móveis.
    - Apache Cordova = Permite criar aplicações híbridas para diferentes plataformas mobile com base no componente WebView. 

<========================= Tipos de Dados e Variáveis =========================>
===============================================================================
    Identificadores:
    - Podem começar com letra, $ ou _
    - Não podem começar com números
    - É possível usar letras ou números
    - É possível usar acentos ou símbolos
    - Não podem conter espaços
    - Não podem ser palavras reservadas

    Dicas:
    - Maiúsculas e minúsculas fazem diferença
    - Tente escolher nomes coerentes para as variáveis
    - Evite se tornar um 'programador alfabeto' ou um 'programador contador'

    Tipos de Dados:

    Number;
    5 18 -12 = números inteiros
    0.5 -15.9 3.14 8.0 = números fracionados(real)
    Existem 2 valores internos importantes, Infinity e NaN

    String;
    "Google"
    'JavaScript'
    `Maria`

    Boolean;
    true
    false

    Null
    Undefined
    Object
    Array
    Function

<========================= Manipulação de Dados =========================>
=========================================================================

    String > Número:
    - Number.parseInt(n)
    - Number.parseFloat(n)
    - Number.(n)

    Número > String:
    - String(n)
    - n.toString()

    Formatando Strings:
        var s = 'JavaScript';
    'Eu estou aprendendo s' //não faz interpolação
    'Eu estou aprendendo' + s //usa concatenação
    `Eu estou aprendendo ${s}` //usa template string
    - s.length //quantos caracteres a string tem
    - s.UpperCase() //tudo para 'MAIÚSCULAS'
    - s.LowerCase() //tudo para 'minúsculas'

    Formatando Números:
    - var n1 = 1545.5;
        Resultado -> n1 = 1545.5
    - n1.toFixed(2).replace('.', ',');
        Resultado -> '1545,50'
    - n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
        Resultado -> R$ 1,545.50' //BRL = real / USD = dólar / EUR = euro

<========================= Operadores do JS - Parte 1 =========================>
================================================================================

    Operadores:
    - Aritméticos
    - Atribuição
    - Relacionais
    - Lógicos
    - Ternário

    - Aritméticos;
       5 + 2 = 7
       5 - 2 = 3
       5 * 2 = 10
       5 / 2 = 2.5
       5 % 2 = 1 (resto da divisão inteira, não é porcetagem)
       5 ** 2 = 25 (potência, 5 ao quadrado(2) é igual a 25)

    CUIDADO!!!
        5 + 3 / 2 = 6.5 (executa primeiro 3 / 2 = 1.5 -> logo depois -> 1.5 + 5 = 6.5)
        (5 + 3) / 2 =  4 (executa primeiro o que há entre parenteses)

    - Ordem de Precedência:
    1°  ->  ()
    2°  ->  **
    3°  ->  * / %
    4°  ->  + -

    Atribuição Simples:
     - var a = 5 + 3 é igual a 8
     - var b = a % 5 é igual a 3
     - var c = 5 * b ** 2 é igual a 45 (executa primeiro a potência **)
     - var d = 10 - a / 2 é igual a 6 (executa primeiro a /)
     - var e = 6 * 2 / d é igual a 2 (executa primeiro quem apareceu primeiro, da esquerda para direita)
     - var f = b % e + 4 / 2 é igual a 3(executa primeiro b % e , logo depois 4 / e)    
    Obs: O sinal  de igual(=) significa RECEBE!!!

    Auto-atribuições:
        var n = 3;
        n = n + 4 //Simplificando (n += 4)
        n = 7
        n = n - 5 //Simplificando (n -= 5)
        n = 2
        n = n * 4 //Simplificando (n *= 4)
        n = 8
        n = n / 2 //Simplificando (n /= 2)
        n = 4
        n = n ** 2 //Simplificando (n **= 2)
        n = 16
        n = n % 5 //Simplificando (n %= 5)
        n = 1

    Incremento:
        var x = 5;
        x = x + 1 ou x += 1 ou (x++) é igual a 6
        x = x - 1 ou x -= 1 ou (x--) é igual a 5

<========================= Operadores do JS - Parte 2 =========================>
================================================================================

    - Relacionais:
        5 > 2 true
        7 < 4 false
        8 >= 8 true
        9 <= 7 false
        5 == 5 true
        4 != 4 false

        preço >= 200.50 //o preço é maior ou igual a 200.50?
        idade < 18 //a idade é menor do que 18?
        curso == 'JavaScript' //o curso é JavaScript?
        n1 != n2 // o primeiro número é diferente do segundo?

    - Identidade:
        5 == 5 true
        5 == '5' true (igual no valor)
        5 === '5' false (igual no valor, mas diferente no tipo)
        5 === 5 true

    - Lógicos:
        ! negação (não)
        && conjunção (e)
        || disjunção (ou)
        
    - Negação (!) //Operador Unário
    true -> false
    false -> true

    - Conjunção (&&) //Operador Binário
    true && true -> true
    true && false -> false
    false && true -> false
    false && false -> false

    - Disjunção (||) //Operador Binário
    true || true -> true
    true || false -> true
    false || true -> true
    false || false -> false

    Exemplo:
        var a = 5;
        var b = 8;

        a > b && b % 2 == 0 (primeiro calcula os op. ARITMÉTICOS, em seguida os op. RELACIONAIS e por fim os op. LÓGICOS)
        (b(8) dividido por 2, resto 0. a(5) é maior que b, false. false e verdadeiro é igual a false)
            Resposta -> FALSE

        a <= b || b / 2 == 2
        (b(8) dividido por 2 é igual a 4, 4 é igual a 2? false. a(5) é menor ou igual a b, true. Uma opção sendo true, a resposta será TRUE.)
            Resposta -> TRUE
    
    Obs: Se houver um (&&, || e um !), a execução correta será da seguinte forma -> !, &&, ||.
    Exemplos:
        idade >= 15 && idade <= 17 //a idade está entre 15 e 17?
        estado == 'RJ' || estado == 'SP' //o estado é RJ ou SP?
        salário > 1500 && sexo != 'M' //o salário é acima de 1500 e não é homem?
    
    - Ternário:
       teste ? true : false
    
    Exemplo:
        -> média >= 7.0 ? "Aprovado" : "Reprovado"

        -> var media = 5.5
           media > 7?'APROVADO':'REPROVADO'
           'REPROVADO'
           media += 3
           8.5
           media > 7?'APROVADO':'REPROVADO'
           'APROVADO'

        -> var x = 8
           var res = x % 2 == 0 ? 5: 9 (var res vai receber 5 ou 9, se x % 2 for igual a 0)
           x = 8
           res = 5
        
        -> var idade = 19
           var r = idade >= 18 ? 'MAIOR' : 'MENOR'
           
<========================= Introdução ao DOM =========================>
=======================================================================

    - O que é DOM:
    Document Object Model = Modelo de Objetos para Documentos, ou seja, é um conjunto de objetos dentro do seu navegador, 
    que vai dar acessos aos componentes internos do seu website, ele está presente quando está rodando JS dentro do navegador.

    - Árvore DOM:
    Basicamente a Árvore DOM começa da raíz, que chamamos de;
        - window = janela(objetos dentro do window -> location, document, history)
        - location contém -> qual é a localização do seu site, URL, qual é a página atual, anterior..
        - document contém -> documento atual..
        - history contém -> guarda de onde você veio, para onde você vai..

    Dentro do "document":
        - html(filhos de html -> head, body)
        - head -> meta, title
        - body -> h1, p, p(strong), div

    Selecionando Elementos:
        - por Marca(tag) -> getElementsByTagName()
        - por ID -> getElementById()
        - por Nome -> getElementsByName()
        - por Classe -> getElementsByClassName()
        - por Seletor(CSS) -> querySelector() / querySelectorAll()

    Como acessar os componentes da Árvore DOM:
        window.document.write('teste') //adicionar um texto dentro do documento html
        window.document.write(window.document.charset) //exibe a codificação da pagina
        window.document.writ(window.navigator.appName)
        window.document.write(window.document.URL) //exibe a url que voce esta acessando

        window.document.getElementsByTagName('p') //pega todos os 'p' dentro do documento(ElementS está no plural)
        window.document.getElementsByTagName('p')[0] //pega somente o primeiro 'p'

        document.write(.innerText) //pega somente o texto do documento
        document.write(.innerHTML) //pega o texto + formatação do documento, pega o HTML inteiro.


<========================= Eventos DOM =========================>
=================================================================

    Eventos com movimentos do MOUSE:
        - mouseenter
        - mousemove
        - mousedown
        - mouseup
        - click
        - mouseout
    OBS:No site MDN da mozzila, procure por 'Event reference', contém uma listagem com vários eventos.
    
    Para que os eventos sejam realizados é necessário uma "função":
        - Função = Conjunto de códigos, de linhas, que vão ser executadas somente quando o evento ocorrer.

        {
        bloco(ex. 10linhas)
        }
    - Bloco é delimitado por CHAVES{}

        function ação(parametros){

        }

<========================= Condições em JavaScript =========================>
=============================================================================

    Tipos de condições:
        - Condições Simples: If
        - Condições Compostas: If Else
        - Condições Aninhadas: Else If
        - Condições Múltiplas: Switch Case

===================================================================
===================== Condições em JS - Parte 1 ===================
===================================================================

        Sequências:
        var n = 3;
        n += 2;
        window.alert(n);

        Condições:
        if(condição){
            true
        }else{
            false
        }

        Tipos de Condição:
            - Condição Simples
                if(condição){
                    true
                }
            - Condição Composta
                if(condição){
                    true
                }else{
                    false
                }

===================================================================
===================== Condições em JS - Parte 2 ===================
===================================================================

    Condições Aninhadas:
        if(cond1){
            bloco1
        }else{
            if(cond2){
                bloco2
            }else{
                bloco3
            }
        }

    Condições Múltiplas:
        switch(expressão){
            case valor 1:

                break;
            case valor 2:
                
                break;
            case valor 3:
                
                break;
            default:
                
                break;
        }
    OBS: Switch é utilizado para testar dados pontuais, não intervalos!!!

<========================= Repetições em JavaScript - Parte 1 =========================>
========================================================================================

    - Função ComerPizza() //Essa pizza contém 8 pedaços
        function comerPizza(){
            comerFatia()
            comerFatia()
            comerFatia()
            comerFatia()
            comerFatia()
            comerFatia()
            comerFatia()
            comerFatia()
        } //Comer a pizza até ela acabar..
    
    while(condição){ //se a condição continuar sendo verdadeira, o loop CONTINUA. E quando a condição for falsa, o loop PARA

    }

    function comerPizza(){
        while(temFatia()){ //ENQUANTO tem fatia, comer fatia.
            comerFatia() //Quando as fatias acabarem, a condição se tornará false e o loop será quebrado.

        }
    }

=============================================================
    - WHILE -> Primeiro testa e depois executa o bloco.
    while (condition) {
        //bloco
}
=============================================================
    - DO..WHILE -> Primero executa o bloco e depois ele testa.
    do {
        //bloco
} while (condition);

<========================= Repetições em JavaScript - Parte 2 =========================>
========================================================================================

    - Estrutura de repetição FOR:

        for(inicio;teste;incr){
            //bloco
        }

        //Na primeira passagem pelo FOR ele faz a INICIALIZAÇÃO e o TESTE.. o TESTE sendo verdadeiro ele executa o BLOCO e quando ele voltar, ele faz o INCREMENTO
        e continua o loop enquanto o TESTE lógico verdadeiro. E quando o TESTE for falso ele encerra o loop e continua o fluxo natural do script.

==================================================================================================================================================================
        Com WHILE:
            var c = 1;
            while(c <= 10){
                //bloco
                c++;
            }

        Com FOR:
            for(var c=1; c<=10; c++){
                //bloco
            }

<========================= Variáveis Compostas =========================>
=========================================================================

    - Variáveis simples: só conseguem armazenar UM VALOR por vez.
    - Variáveis compostas: devem ser capazes de armazenar VÁRIOS VALORES em uma mesma estrutura.

    - Variáveis simples:
            vaga a0
            vaga a1
            vaga a2
            vaga a3
            vaga a4
            vaga a5
    
    - Váriaveis compostas:
            vaga a = [];
            a = array vetor
            [] = o vetor é composto de elementos(value, index, array)
            =========================
            [a1, a2, a3]
            0    1   2 = índice chave
            =========================
            a1, a2, a3 = conteúdo valor
            
            - let num = [5,8,4]; //um vetor de 3 elementos(0,1,2) que contém os valores 5,8,4
            - num [3] = 6 //posição 3 recebe valor 6 --> [5,8,4,6];
            - num.push(7) //acrescentar um valor na última posição do array --> [5,8,4,6,7]
            - num.length //não é um método, mas sim um ATRIBUTO. Ele serve para contar os elementos que existem dentro do array(vetor).
            - num.sort() //ele ordena os elementos em ordem crescente.

            ==========================
            let num = [4, 5, 6, 7, 8];
                       0  1  2  3  4
            
            console.log(num[0]);
            console.log(num[1]);
            console.log(num[2]);
            console.log(num[3]);
            console.log(num[4]);
            ==========================
            for(let pos=0; pos<num.length; pos++){
                console.log(num[pos]);              //usando a estrutura de repetição for, utiliza o console.log somente numa única linha.
            }
            ==========================
            for(let pos in num){                    //para cada posição(let pos) dentro/em de num(variável composta)
                console.log(num[pos]);              //eu vou mostrar o num[pos]
            }
            ==========================
            Como buscar valores dentro de um vetor?

            let num = [4, 5, 6, 7, 8];
                       0  1  2  3  4
                
               - num.indexOf(7) //está na posição 3
               - num.indexOf(3) //não existe o valor 3 dentro do vetor, o JS irá retornar o valor -1

<========================= Funções em JS =========================>
===================================================================

    - São AÇÕES executadas assim que são CHAMADAS ou em decorrência de algum EVENTO.
    - Uma FUNÇÃO pode receber PARÂMETROS e retornar um RESULTADO.

            function ação(param){
                return
            }
            ação(5)

    - Função para verificar o número é par ou ímpar:

            function parimp(n){
                if(n%2==0){
                    return 'par'
                }else{
                    return 'ímpar'
                }
            }
            let res = parimp(11);

<========================= Próximos Passos em JS =========================>
===========================================================================

    Nossa rota até aqui...
    - Fundamentos
    - Variáveis e Dados
    - Operadores
    - Condições
    - Repetições
    - Arrays
    - Functions
    - DOM

    Quais são os próximos passos?
    ...daqui pra frente
    - Fazer curso de HTML5 e CSS3
    - Functions //Estudar muito sobre..
    - Objetos //Estudar muito sobre..
    - Modularização //Estudar sobre.. reutilizar códigos etc..
    - RegEx(Expressões Regulares)
    - JSON //Estudar sobre..
    - AJAX
    - NodeJS

    Array:
        let num = [ 5, 8, 4];
                    0  1  2
    
    Object:
        let amigo = {nome:'José',sexo:'M',peso:85.4,engordar(){}}
                           nome       sexo     peso           function
*/