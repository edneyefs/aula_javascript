
function botao(){
    document.getElementById("agradecimento").innerHTML="<b>Obrigado por clicar</b>";
}

function redirecionar(){
    window.open("https://digitalinnovation.one/sign-in"); //abre em outra janela
    //window.location.href = "https://digitalinnovation.one/sign-in"; //abre na mesma janela
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*
function soma(n1, n2){
    return soma = n1 + n2;
}
alert(soma(5, 10));
*/

/*
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/

/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/


/*
var n1 = prompt("Primeiro número:");
var n2 = prompt("Segundo número:");
function soma(n1, n2){
    soma = n1 + n2;
    return "n1" + " + " + "n2" + " = " + soma; 
}
alert(soma());
*/

//END MODULO 1


/*
var d = new Date;
alert(d.getMonth()+1);
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for(count=1; count<=5; count++){
    alert(count)
}
*/

/* estrutura de repetição
var count = 0;
while(count <= 5){
    console.log(count);
    //count = count + 1;
    //count++;
    count += 1;
};
*/

/*através do prompt solicita informação do usuário e retorna
var idade = prompt("Qual sua idade?");
var idade = 18;
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/

/* Lista de dicionário
var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/* Dicionário
var fruta = {nome: "maçã", cor: "vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

/*
var lista = ["maçã", "pêra", "laranja"];
lista.push("uva");
lista.pop("maçã");

console.log(lista[1]);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "))
*/


/*
var nome = "Edney Silva";
var n1 = 20;
var n2 = 5;
var frase = "Japão é o melhor time do mundo";
alert(nome + " tem " + idade);
alert(idade + idade2);
alert(frase.replace("Japão", "Brasil"));
console.log(nome);
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(frase.toLocaleLowerCase()); //Deixa tudo o elemento selecionado em caixa baixa
console.log(frase.toUpperCase());//Deixa tudo o elemento selecionado em caixa alta
console.log(frase.replace("Japão", "Brasil"));//Troca uma palavra escolhida
*/

//START MODULO 1