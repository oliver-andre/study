//Condicionais.: if e else

//Menores de 18 -> Menor de idade (meia)
//Entre 18 e 60 -> Adultos (meia apenas com carteirinha)
//Maiores de 60 -> Idosos (meia)

const idade = 75;
const temCarteirinha = true;

if (idade < 18) { 
    //menor de idade
    console.log("MEIA");
} else if (idade <= 60) {
    //adulta tem carteirinha
    if (temCarteirinha) {
        console.log("MEIA");
    } else {
        //adulta sem carteirinha
        console.log("INTEIRA");
    } 
} else {
        //idosa
        console.log("MEIA");
    }