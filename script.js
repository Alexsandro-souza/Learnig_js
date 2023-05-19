//objeto
/*
const carros = {'Gol': 'Palio' , 'Corsa': 'Celta'};
*/
//Condicionais

/*
>= Maior ou igual
<= Menor ou igual
= Igual
!= Diferente
&& E
|| Ou
*/

//Funções
/*
texto = (text)=>{
    console.log('Oi, o texto é : ', text);
}


texto('I love')
*/
//Laço de repetição

//while = Enquanto (verificar a condição primeiro para depois fazer a ação)
//For = é bem parecido com while a única diferença é a forma de declaração
//ForEach = específico para fazer loop em array, objeto e json
//do = Faz a ação antes de verificar a condição

/*a = 0

    while(a < 5){
        console.log(a)
        a++ // ou a + 1

    }

for(a = 0; a < 5; a++){ //Diferente do while o for resume todos os parametros numa linha
    console.log(a)
}*/

//Manupulando datas
/*
const data = new Date;
let dia = data.getTime()/60;
let dia2 = (dia/60)/60;
console.log(dia2)

if(dia == 4){
    dia = "Sexta"
    console.log(dia);
}else{
    console.log("Hoje não é sexta")
}*/
var el = document.getElementById('test');

el.innerText='OI, eu estou sendo editado';