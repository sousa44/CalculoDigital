
/*Função validarCep() */
function verificarCEP() {

    const CEP = document.getElementById("CEP").value;

    if (CEP.length < 8 || CEP.length > 8) {
        document.getElementById("resultadoCEP").value = " CEP INVALIDO"
        document.getElementById("resultadoCEP").style.backgroundColor = "#FF4343"


    } else if (CEP.length == 8) {
        document.getElementById("resultadoCEP").value = " CEP VÁLIDO"
        document.getElementById("resultadoCEP").style.backgroundColor = "#94FFF4"


    }








    for (let i = 0; i < CEP.length; i++) {
        if (CEP[0] === "a" || CEP[0] == "b" || CEP[0] == "c" || CEP[0] == "d" || CEP[0] == "e" || CEP[0] == "f" || CEP[0] == "g" || CEP[0] == "h" || CEP[0] == "i" || CEP[0] == "j" || CEP[0] == "k" || CEP[0] == "l" || CEP[0] == "m" || CEP[0] == "n" || CEP[0] == "o" || CEP[0] == "p" || CEP[0] == "q" || CEP[0] == "r" || CEP[0] == "s" || CEP[0] == "t" || CEP[0] == "u" || CEP[0] == "v" || CEP[0] == "w" || CEP[0] == "x" || CEP[0] == "y" || CEP[0] == "z") {
            console.log(CEP[0])

            document.getElementById("resultadoCEP").value = " CEP INVÁLIDO"
            document.getElementById("resultadoCEP").style.backgroundColor = "#FF4343"

        }

        if (CEP[0] == '0') {
            document.getElementById("resultadoRegiao").value = "São Paulo"
        } else if (CEP[0] == '1') {
            document.getElementById("resultadoRegiao").value = "Interior de São Paulo"

        } else if (CEP[0] == '2') {
            document.getElementById("resultadoRegiao").value = "Rio de janeiro/Espirito Santo"

        } else if (CEP[0] === '3') {
            document.getElementById("resultadoRegiao").value = "Minas Gerais"

        } else if (CEP[0] == '4') {
            document.getElementById("resultadoRegiao").value = "Bahia/Sergipe"

        } else if (CEP[0] == '5') {
            document.getElementById("resultadoRegiao").value = "Pernambuco/Alagoas/Paraiba/Rio Grande do Norte"

        } else if (CEP[0] == '6') {
            document.getElementById("resultadoRegiao").value = "Ceara/Piauí/Maranhão"

        } else if (CEP[0] == '7') {
            document.getElementById("resultadoRegiao").value = "Distrito Federal /Goias/Tocantis/Rondonia/Mato Grosso/Mato Grosso do Sul"
        } else if (CEP[0] == '8') {
            document.getElementById("resultadoRegiao").value = "Paraná/Santa Catarina"
        } else {
            document.getElementById("resultadoRegiao").value = "Rio Grande do Sul"
        }
    }







}

/* 
Função: Validar Email

*/

function validarEmail() {


    let email = document.getElementById("email").value;

    if (email.includes('@') && (email.includes('.'))) {
        document.getElementById("resultadoEmail").value = "Email válido"
        document.getElementById("resultadoEmail").style.backgroundColor = "#94FFF4"
    } else {
        document.getElementById("resultadoEmail").value = "Email Inválido"
        document.getElementById("resultadoEmail").style.backgroundColor = "#FF4343"

    }



    for (const em in email) {
        if (email.endsWith('@')) {
            document.getElementById("resultadoEmail").value = "Email Inválido"
            document.getElementById("resultadoEmail").style.backgroundColor = "#FF4343"

        }
    }




}


/* função Convertor Farenheit  */





function convertorFarenheit() {
    let celsius = document.getElementById("celsius").value

    celsius = parseInt(celsius)







    let formula = (celsius * 9 / 5) + 32

    document.getElementById("resultadoFarenheit").value = formula





}



/* função Converter real para Dolar  */

// dolar = 5.33

function converterRealParaDolar() {

    let dolar = document.getElementById("dolar").value

    dolar = parseFloat(dolar)


    let f = (dolar * 5.33).toFixed(2)

    document.getElementById("resultadoReal").value = f

}


