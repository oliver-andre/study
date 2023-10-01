const shoppingList = ['Andre' , 'Silmara' , 'Millena' , 'Valentina' , 'Melissa'] //CRIAÇÃO DA NAMELIST

const listEl = document.getElementById('list'); //Pega elementos do input e do ul através dos id's
const searchField = document.getElementById('searchField');
searchField.addEventListener('input' , inputHandler); //Observa se o campo input sofreu alguma alteração, para filtrar na lista

this.fillList(); //No início da execução chamamos o fillList

    function fillList(list = shoppingList) { // Método fillList pra atualizar a DOM. Caso não receba parâmetro, utilizará shoppingList
        listEl.innerHTML = ""; // Quando a lista é atualizada, limpar e colocar novos itens

        for(let i=0; i < list.length; i++) { //FOR para cada elemento da lista shoppingList
                let listItem = document.createElement("li"); // Um LI para cada item
                listItem.innerHTML = list[i]; // Criado elemento LI, colocar como texto do elemento o item array
                listEl.appendChild(listItem); // Adiciona LI na UL
        }
    }

function inputHandler() {
    const filteredList = shoppingList.filter(el => { //Método filter para filtrar a lista
        const listItem = el.toLowerCase(); // LowerCase() para letras maiúsculas e minúsculas
        const searchWord = searchField.value.toLowerCase();
        return listItem.includes(searchWord);  //Compara se o item da lista possuí a palavra digitada 
    });

    fillList(filteredList); // A cada que o campo de busca muda, chame fillList novamente
}

