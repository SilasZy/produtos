/* 
exemplo de criacao 
let novoParagrafo = document.createElement('li');
novoParagrafo.href ='/servicos';

let criarA = document.createElement('a')
criarA.textContent = 'SERVICE'
criarA.href = '/foi'
criarA.setAttribute('href', '#');


let nav = document.querySelector('.nav-logo')
nav.children[1].appendChild(novoParagrafo);
novoParagrafo.appendChild(criarA)
console.log(nav.children[1]);

//problema resolvido pelo indice//

//criando novo card //
const section = document.createElement('section');
const img = document.createElement('img');
const div = document.createElement('div');
const paragrafo = document.createElement('p')
const h5 = document.createElement('h5');
img.src = 'https://i.pinimg.com/236x/93/85/a6/9385a69850b069447e25938af196b6de.jpg?nii=t'
img.alt ='...'
img.height = '200'

h5.textContent = 'Vest Polo';
paragrafo.textContent = 'primary before'
div.classList.add('card-body');

section.appendChild(div);
section.appendChild(img);
section.appendChild(h5);
section.appendChild(paragrafo)
console.log(section);

//colocando section no meu main//

const container = document.querySelector('.container-card');


const primeiroElemento = container.lastElementChild;


if (primeiroElemento) {
    container.insertBefore(section, primeiroElemento);
} else {
    
    container.appendChild(section);
    colocando dentro de um section
}

console.log(container);

*/
//await é aguarde a te a chamada ser executada //

/* exemplo  

const h1 = document.createElement('h1');
h1.classList.add('h1');
console.log(h1);

h1.textContent = 'finalmente';

*/

/*exemplo de criar
const div = document.createElement('div');
const h1 = document.createElement('h1');
console.log(div);
*/

const consumindo = async () => {
  try {
    const endpoint = await fetch("https://dummyjson.com/products");
    const dados = await endpoint.json();

    console.log(dados);
    if (!endpoint) {
      console.error("erro ao enviar dados");
    }
    let vazio = "";

    dados.products.forEach((lista, index) => {
      vazio += ` <div class="card  bg-secondary m-5" style="width: 25rem;">
        <img src="${lista.thumbnail}" class="card-img-top" alt="esmalte">
        <div class="card-body bg-primary d-grid justify-content-center align-items-center">
          <h5 class="card-title ">  ${ `titulo: `+ lista.title}</h5>
          <p class="card-descricao">${ `Descricao: `+ lista.description}</p>
          <p class="card-preco bg-white text-dark ">${ ` preco: ${lista.price} R$ `}</p>
          <a href="#" class="btn btn-dark fs-small">comprar</a>
        </div>
      </div>>
       `;

      //tava tudo fora da div mas e bom manipular //
      document.querySelector("#card-container").innerHTML = vazio;
      //aplicar em todos os elementos container//

      console.log(lista.title, index);
      if (lista.title == "Essence Mascara Lash Princess") {
        console.log("tem esse titulo na minha lista:", lista.title);
      } else {
        console.log("nao existe:", lista.title);
      }
    });
  } catch (error) {
    console.error("erro na mensagem:", error);
  }
};
consumindo();

/*
div.classList.add('div-conteudo');

h1.textContent = 'meu conteudo';
div.appendChild(h1);
  exemplo */

/* debaixo pra cima tambem funciona */
