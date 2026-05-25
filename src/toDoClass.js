
export class ToDos{

    constructor(titleValue, categoryValue, descriptionValue, id){
        this.title=titleValue;
        this.category=categoryValue;
        this.description=descriptionValue;
        this.id=self.crypto.randomUUID();
    }



}