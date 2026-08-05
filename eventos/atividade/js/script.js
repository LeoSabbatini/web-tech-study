const dadosFilmes = {
  primata: {
    titulo: "O Primata",
    sinopse: "Uma jovem chamada Lucy volta da faculdade para férias na casa da família no Havaí. O que era para ser um descanso com o pai, a irmã e o chimpanzé de estimação Ben vira um pesadelo quando o animal contrai raiva após uma mordida, forçando todos a se esconderem na piscina.",
    imagem: "./css/images/primata.jpg",
    corFundo: "#660909"
  },
  patrulha: {
    titulo: "Patrulha Canina",
    sinopse: "Em Patrulha Canina - O Filme (2021), o líder Ryder e os filhotes vão para Adventure City para impedir que o prefeito Humdinger cause grandes problemas. Com a ajuda da nova aliada Liberty, eles usam muita tecnologia para salvar os moradores.",
    imagem: "./css/images/pawpt.jpg",
    corFundo: "#2b4c6b"
  },
  obssessao: {
    titulo: "Obsessão",
    sinopse: "Um jovem chamado Bear, apaixonado por sua amiga de infância Nikki, usa um objeto sobrenatural chamado 'Salgueiro dos Desejos' para fazer com que ela o ame. O pedido é atendido, mas ele logo descobre que o amor obsessivo dela se torna um pesadelo aterrorizante e sufocante.",
    imagem: "./css/images/ob.jpg",
    corFundo: "#0b0013"
  }
};  

const botoes = document.querySelectorAll('.btn-filme');
const conteiner = document.getElementById('conteudo-filme');
const titulo = document.getElementById('titulo');
const capa = document.getElementById('capa');
const sinopse = document.getElementById('sinopse');
const card = document.querySelector('.card');

const corPadrao = "#0a0f16";
const tituloPadrao = "Filmes";
let filmeAtual = null;

for (const botao of botoes) {
  botao.addEventListener('click', () => {
    const chaveFilme = botao.getAttribute('data-filme');

    if (filmeAtual === chaveFilme) {
      conteiner.classList.remove('ativo');
      card.style.backgroundColor = corPadrao;
      titulo.innerText = tituloPadrao;
      filmeAtual = null;
      return;
    }

    conteiner.classList.remove('ativo');

    const filme = dadosFilmes[chaveFilme];

    titulo.innerText = filme.titulo;
    capa.src = filme.imagem;
    sinopse.innerText = filme.sinopse;
    card.style.backgroundColor = filme.corFundo;

    conteiner.classList.add('ativo');
    filmeAtual = chaveFilme;
  });
}