
let peso = 35;

function holliday(valor){
    let resultado;
    if(valor >= 20)
    {
        resultado = (valor-20)*20 + 1500;
    } else if (valor < 20 && valor > 10) {
        resultado = ( valor -10)* 50 + 1000;
        } else {
            resultado = valor * 100;

    }
    console.log (resultado); 
    return resultado;
   
}
holliday(peso)


function SuperfCorp(valor) {
    let resultado1= (((valor*4)+7)/(valor+90))*1500
    let resultado2= (((valor*4)+7)/(valor+90))*2000

    return [resultado1,resultado2];
    
}
console.log(SuperfCorp(peso))
