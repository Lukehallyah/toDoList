let addPopUp = ()=>{

    let main = document.querySelector('main');
    let popUp = document.createElement('div');
        if(popUp){
            popUp.classList.add('popUp');
            main.appendChild(popUp);

        }



    const buttonHolder = document.createElement('div');
        if(buttonHolder){
            buttonHolder.classList.add('buttonHolder');
            popUp.appendChild(buttonHolder);
        }
    const removeButton = document.createElement('div');
        if(removeButton){
            removeButton.classList.add('removeButton');
            buttonHolder.appendChild(removeButton);
        }

    const title = document.createElement('p')
        if(title){
            title.classList.add('title');
            title.textContent='Add a New Task!';
            popUp.appendChild(title);
        }

}


export{addPopUp}