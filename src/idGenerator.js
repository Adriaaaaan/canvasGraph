class IdGenerator {
    constructor(){
        this.ids=0;
    }

    generateId(){
        this.ids=this.ids+1;
        return this.ids;
    }
}

export default new IdGenerator();