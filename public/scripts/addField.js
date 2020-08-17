//procurar o botão
document.querySelector("#add-time")
//Quando clicar no botão
.addEventListener('click', cloneField)
//Executar uma ação
function cloneField(){
   //Duplicar os campos. Quais campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    //Limpar os campos. Que Campos?
    const fields = newFieldContainer.querySelectorAll('input');
    //para cada campo, limpar
    fields.forEach((field) => {
        //pegar o field do momento e limpa ele 
            field.value = "";
    });
    //Colocar na página: Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}
    