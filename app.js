//Aplicações utilizando os dados de (DADOS.JS)
function pesquisar() {

    // **Função para realizar uma pesquisa e exibir os resultados em uma seção específica.**
    // **Busca os elementos da lista de dados e os renderiza como HTML.**

    // **Obtém a seção onde os resultados serão exibidos pelo seu ID.**
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    console.log(campoPesquisa);

    //Se campoPesquisa estiver vazio
    if (!campoPesquisa){
        alert("Nada foi encontrado. Busque o nome de outro jogo!");
        return;
    }

    // **Inicializa uma string vazia para armazenar os resultados da pesquisa.**
    let resultado = "";

    // **Itera sobre cada item da lista de dados.**
    for (let dado of dados) {
        //Se titulo estiver em includes, será informado na tela 
        if (dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa)) {
            // **Cria um HTML para cada item, formatando os dados da lista.**
            resultado += `
            <div class="item-resultado">
                <h2>
                    <a href="https://www.leagueoflegends.com/pt-br/" target="_blank">${dado.titulo}</a>
                    </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
         `;
        }

    }

    // **Atribui o HTML gerado para a seção, substituindo o conteúdo anterior.**
    section.innerHTML = resultado;
}




