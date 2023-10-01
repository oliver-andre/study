//Condicionais.: if e else

//Menores de 18 -> Menor de idade (meia)
//Entre 18 e 60 -> Adultos (meia apenas com carteirinha)
//Maiores de 60 -> Idosos (meia)

//INTEIRA -> adulta sem carteirinha
//MEIA -> o restante das situações 

const idade = 15;
const temCarteirinha = false;
const pessoaAdulta = idade >= 18 && idade <= 60;

if (pessoaAdulta && temCarteirinha) {
    console.log("INTEIRA");
} else {
    console.log("MEIA");
}



