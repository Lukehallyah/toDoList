export {titleBoxUi};

let titleBoxUi = ()=>{

    let titleBox = document.querySelector('.titleBox');
    titleBox.style.backgroundColor='yellow';

    let projectTitle = document.createElement('div');
        if(projectTitle){
            projectTitle.classList.add('projectTitle');
            projectTitle.textContent='Project Title Here'
            titleBox.appendChild(projectTitle);
        }

    let addButton = document.createElement('div');
        if(addButton){
            addButton.classList.add('addButton');
            addButton.textContent='+';
            titleBox.appendChild(addButton);
        }

}