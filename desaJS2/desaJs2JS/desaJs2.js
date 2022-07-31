
window.onload = function(){
    const busca = document.querySelector("#busca");
    const cep    = document.querySelector("#cep");
    const logradouro = document.querySelector("#logradouro");
    const bairro = document.querySelector("#bairro");
    const localidade = document.querySelector("#localidade");
    const uf = document.querySelector("#uf");
        
let selCep = async function(c){
    let viaCep = `https://viacep.com.br/ws/${c}/json/`
        try{
            let retornoFetch = await fetch(viaCep)
            let dadosRet = await retornoFetch.json();
            logradouro.value = dadosRet.logradouro
            bairro.value = dadosRet.bairro
            localidade.value = dadosRet.localidade
            uf.value = dadosRet.uf
        
        }catch(erro){
            alert("DIGITE SEU CEP!")
         }
}
       busca.addEventListener('click', ()=>{
         selCep(cep.value)
       })  
}