function CreateListaPrincipal(){
    
    let url = 'https://restcountries.com/v3.1/all'
    
return fetch(url)
    .then((Response) => Response.json())
    .then((jsonbody) =>  jsonbody.map(convertendoClasse))
}


function PaisDetalhe(name){
    let url = `https://restcountries.com/v3.1/name/${name}?fullText=true`

    return fetch(url)
        .then((Response) => Response.json())
        .then((jsonbody) => cvtclasse(jsonbody))
}


function convertendoClasse(array){   
    let pais = new Paises()
    if(array.capital == undefined){
        pais.capital = "undefined"
    }else{
        pais.capital = array.capital[0]
    }
        pais.nome = array.name.common
        pais.populacao = array.population
        pais.region = array.continents[0]
        pais.bandeira = array.flags.png
            return pais
}

const cvtclasse = function DetalheClasse(array){
    let html = []
    const funcao = (element,indice) => {
        html.push(`<li><h8>${pais.Languages[indice]}:</h8> ${vetor.name.nativeName[element].common}</li>`)
    }




    const vetor = array[0]

    let pais = new Paises()
    if(vetor.capital == undefined){
        pais.capital = "undefined"
    }else{
        pais.capital = vetor.capital[0]
    }
        pais.nome = vetor.name.common
        pais.populacao = vetor.population
        pais.region = vetor.continents[0]
        pais.bandeira = vetor.flags.png


        pais.subRegiao = vetor.subregion
            if(vetor.tld === undefined){
                pais.tlDomain = undefined
            }else{
            pais.tlDomain = vetor.tld[0]
            }
        let chavename = Object.keys(vetor.currencies)
        pais.Currencies = chavename.map((chave)=>vetor.currencies[chave].name).join()

        let chaveLanguage = Object.keys(vetor.languages)
        pais.Languages = chaveLanguage.map((key)=> vetor.languages[key])
       



         chavename = Object.keys(vetor.name.nativeName)
        chavename.forEach(funcao)
        pais.nativeNome = html.join('')

        if(vetor.borders === undefined){
            pais.BorderCountries = ['','','']    
        }else{
        pais.BorderCountries = vetor.borders
        }

            return pais
}
