const csv = require("csvtojson");
const colors = require('colors');
const fs = require('fs')

async function getData(archivo) {
    try {
        const datos = await csv().fromFile(archivo);
        let data = []
        var codes = JSON.parse(fs.readFileSync('./Examen_P1/ISO-3166-ALPHA-3.json', 'utf8'));
        for (let dat of datos) {
            dat = Object.values(dat);
            for (let cod of codes) {
                if (dat[1] == cod.countryCode) {
                    data.push(dat);
                }
            }
        }

        return data;
    } catch (error) {
        error = "Error 200"
        return error;
    }
}

async function getCountry(pais, cod) {
    for (var i = 0; i < pais.length; i++) {
        let va = Object.values(pais[i]);
        if (va[1] == cod) {
            return true
        }
    }
}

async function getSuscrip(pais, cod, anio) {
    for (var i = 0; i < pais.length; i++) {
        let va = Object.values(pais[i]);
        if (va[1] == cod) {
            suscrip = va[Anio - 1960]
            return suscrip
        }
    }
}

async function getlugar(pais, cod) {
    for (var i = 0; i < pais.length; i++) {
        let va = Object.values(pais[i]);
        if (va[1] == cod) {
            lugar = va[Anio - 1960]
            return lugar
        }
    }
}
async function getCoun(pais, cod) {
    for (var i = 0; i < pais.length; i++) {
        let va = Object.values(pais[i]);
        if (va[1] == cod) {
            consul = va[0]
            return consul
        }
    }
}
async function imprimir(archivo, anio, cod) {
    let datos = await getData(archivo);
    if (datos != "Error 200") {
        let Country = await getCountry(datos, cod);
        if (Country == true) {
            if (anio >= 1960 && anio <= 2019) {
                getCoun(datos, cod, anio);

                console.log("----- Imprimir -----");
                console.log("   Codigo país:".green + `  ${cod}`.red);
                console.log("   País:".green + `         ${pais}`.red);
                console.log("   Año:".green + `          ${anio}`.red);

                console.log("----- Valio -----");

            } else {
                console.log('\n     ' + `Al momento no existe registros para el año: ${anio} `.yellow);
            }
        } else {
            console.log('\n     ' + `No existe el codigo de pais: ${cod} en la base de datos. `.yellow);
        }

    } else {
        console.log(`\n `, `::::No existe el archivo ${archivo} !::::`.yellow)
    }
}
module.exports = {
    imprimir
}
