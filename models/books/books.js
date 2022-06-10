import { ManagerFs } from '../../managers/manager-fs.js';

class Books {

    constructor() {
        this.mgfl = new ManagerFs();
    
    }
   
    async getBookByIsbn(id) {
        console.log(`---> books::getBookByIsbn  = ${id}`);

        return await this.mgfl.getData(id);
    }


   async removeBook(id) {
        console.log(`---> books::removeBook = ${id}`);
        await this.mgfl.removeData(id);
    }

   async createBook(data) {
        console.log(`---> books::createBook = ${data._id}`);
        await this.mgfl.createData(data);
        
    }

   async updateBook(id,data) {
        console.log(`---> books::updateBook`);
        await this.mgfl.updateData(id,data);

     
    }
    async getAlquiler(id,isbn,data) {
        console.log(`---> books::getAlquiler  = ${id,isbn,data}`);

        return await this.mgfl.getData(id,isbn,data);
    }

    async javaCat(){
        console.log(`---> books::javaCatBook`);
        return await this.mgfl.categoryJava();
    }

}

export default new Books()