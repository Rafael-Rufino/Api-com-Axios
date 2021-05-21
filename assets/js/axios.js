// fetch('pessoas.json')// arquivo que quero pegar
//   .then(resposta => resposta.json())// converter o dados para um arquivo json
//   .then(json => carregaElementosNaPagina(json));


// pequei o arquivo (json)
axios('pessoas.json') //utilizando axios pra fazer a requisição GET a APi
  .then(resposta => carregaElementosNaPagina(resposta.data));

const table = document.createElement('table');
// exibir usuarios na tela
function carregaElementosNaPagina(json) {
  for(let pessoa of json){
     const tr = document.createElement('tr');

     let td1 = document.createElement('td');
     td1.innerHTML = pessoa.nome;
     tr.appendChild(td1);

     let td2 = document.createElement('td');
     td2.innerHTML = pessoa.idade;
     tr.appendChild(td2);

     let td3 = document.createElement('td');
     td3.innerHTML =  pessoa.salario;
     tr.appendChild(td3);

     let td4 = document.createElement('td');
     td4.innerHTML =  pessoa.sexo;
     tr.appendChild(td4);


     table.appendChild(tr);
  }

  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table);

}