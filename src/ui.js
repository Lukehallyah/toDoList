export {ui};

let ui = ()=>{
    let main = document.querySelector('main');

    let sidebar = document.createElement('div');
        if(sidebar){
            sidebar.classList.add('sidebar');
            main.appendChild(sidebar);
            
        }

    let contentBox = document.createElement('div');
        if(contentBox){
            contentBox.classList.add('contentBox');
            main.appendChild(contentBox);
        }

    let titleBox = document.createElement('div');
        if(titleBox){
            titleBox.classList.add('titleBox');
            contentBox.appendChild(titleBox);
        }

    let taskHoldingBox = document.createElement('div');
        if(taskHoldingBox){
            taskHoldingBox.classList.add('taskHoldingBox');
            contentBox.appendChild(taskHoldingBox);
        }
        


}

