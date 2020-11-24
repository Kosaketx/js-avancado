// variavel que varre a lista procurando os valores 

var campo = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor'),
];



var tbody = document.querySelector(' table tbody'); // pega o campo da tabela para incluir os valores, como se fosse uma especie de cash


document.querySelector('.form').addEventListener('submit', function(event) {

    // padrao quando se envia um formulario é recarregar a pagina 
    // prevenção de carregamento 

    event.preventDefault(); // não deixa submeter o envio do formulario

    var tr = document.createElement('tr');

    campo.forEach(function(campo) {

        var td = document.createElement('td'); // cria uma td dinamica no form
        td.textContent = campo.value;          // atribui o valor do conteudo a td dinamica
        tr.appendChild(td);                    // adiciona o campo como filho da TD

    });

    var tdVolume = document.createElement('td')
    tdVolume.textContent = campo[1].value * campo[2].value;

    tr.appendChild(tdVolume);

    tbody.appendChild(tr); // inclui a tr dentro do tbody dinamicamente

    // limpa o formulario 
    campo[0].value = '';  // limpa o valor da data  
    campo[1].value = 1;   // zera o campo da quantidade e atribui 1 como padrao     
    campo[2].value = 0;   // zera o valor do campo.
    
    campo[0].focus();
     
});