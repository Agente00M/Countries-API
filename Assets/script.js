const lista = document.getElementById("listaPaises") 
const btn = document.getElementById("changebackground")
const arrowleft = document.getElementById("voltar")
const lihtml = document.getElementsByClassName("item")
const detalhe = document.getElementsByClassName('detail')



btn.addEventListener('click', ()=>{
    let cordosElementos = getComputedStyle(document.body).getPropertyValue('--corElement');
    if(cordosElementos === 'hsl(0, 0%, 100%)'){
        document.documentElement.style.setProperty('--textColor', 'hsl(0, 0%, 100%)')
        document.documentElement.style.setProperty('--boxShadowColor', 'hsl(200, 15%, 8%)')
        document.documentElement.style.setProperty('--boxShadowColor', 'hsl(200, 15%, 8%)')
        document.documentElement.style.setProperty('--corElement', 'hsl(209, 23%, 22%)' );
        document.documentElement.style.setProperty('--corbackground', 'hsl(207, 26%, 17%)');
    }else{
       
        document.documentElement.style.setProperty('--boxShadowColor', 'hsl(0deg 4.59% 54.51% / 38%)')
        document.documentElement.style.setProperty('--corElement', 'hsl(0, 0%, 100%)');
        document.documentElement.style.setProperty('--corbackground', 'hsl(0, 0%, 98%)');
        document.documentElement.style.setProperty('--textColor', 'hsl(200, 15%, 8%)')
    }     
})


function AdicionandoLista(classe){
    return `<li  onclick="teste('${classe.nome}')"class="item">
    <img class="bandeira"src="${classe.bandeira}"/>
    
    <ul class="Ulistainfo">
    <li><h2>${classe.nome}</h2></li>
    <li><h5 class="infoLista">Population:</h5> ${classe.populacao}</li>
    <li><h5 class="infoLista">Region:</h5> ${classe.region}</li>
    <li><h5 class="infoLista">Capital:</h5> ${classe.capital}</li>
    </ul>
    </li>`
}


function AdicionarHTML(){
    CreateListaPrincipal().then((paises = []) =>{
        const newHtml = paises.map(AdicionandoLista).join('')
        lista.innerHTML += newHtml
    })
}

    function DetailPais(classe){
        return `
                <div class="bandeiraDetail">
                    <img src="${classe.bandeira}"/>
                </div>
                <div class="detalhesPais">
                    <ul>
                    <li><h1 class="detailheTitulo">${classe.nome}</h1></li>
                    <li id="liNativeName"><h6>Native name:</h6> <ul class="UlNative">${classe.nativeNome}</ul></li>
                    <li><h6>Population:</h6> <p>${classe.populacao}</p></li>
                    <li><h6>Region:</h7> <p>${classe.region}</p></li>
                    <li><h6>Sub Region:</h6> <p>${classe.subRegiao}</p></li>
                    <li><h6>Capital:</h6> <p>${classe.capital}</p></li>

                    <div>
                        <li><h6>Top Level Domain:</h6> <p>${classe.tlDomain}</p></li>
                        <li><h6>Currencies:</h6> <p>${classe.Currencies}</p></li>
                        <li><h6>Languages:</h6> <p>${classe.Languages}</p></li>
                    </div>

                    <footer>
                        <li><h6>Border Countries</h6>${classe.BorderCountries.map((vetor) => {
                            if(vetor === '' || vetor === undefined){
                                return ' '
                            }else return`<button class="BCountries">${vetor}</button>`})
                    .join('')}</li>
                    </footer>
                    </ul>
                </div>`
    }


function teste(nome){
    PaisDetalhe(nome).then((pais = {}) =>{
        const detailHTML = DetailPais(pais)
       detalhe[1].innerHTML = detailHTML
        for (const element of detalhe) {
            element.style.display = 'block'
        }
    

        const main = document.getElementsByTagName('main')
        
        main[0].style.display = 'none' // ideia é criar uma function chamada para criar o html e adicionar na div
    })
    
   
}

function voltarPaginaInicial(){
    const main = document.getElementsByTagName('main')
    for (const element of detalhe) {
        element.style.display = 'none'
    }
    main[0].style.display = 'block'
}

AdicionarHTML()
