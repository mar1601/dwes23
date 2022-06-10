import fs from 'fs';

// or as an es module:
import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://mar:Holapaola@cluster0.7uvve.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);


// Database Name
const dbName = 'bddmar';
const db = client.db(dbName);
const collection = db.collection('books');

export class ManagerFs {

    async getData(id) {
        await client.connect();
        console.log('Connected successfully to server');
      
        const findResult = await collection.findOne({isbn:id});
        console.log('Found documents =>', findResult);
        
        return findResult;
        
        
    }
  

    async removeData(id) {
        await client.connect();
        const deleteResult = await collection.deleteMany({isbn:id});
        console.log('Deleted documents =>', deleteResult);

    }


    async createData(data) {
        await client.connect();
        const insertResult = await collection.insertOne({_id:data._id, title:data.title, isbn:data.isbn, categories:data.categories});
        console.log('Inserted documents =>', insertResult);      

    }

    async updateData(id,data){
        await client.connect();
        const updateResult = await collection.updateOne({ isbn: id }, { $set: { title: data.title } });
        console.log('Updated documents =>', updateResult);
    }


    async categoryJava(){

        await client.connect();
        console.log('Connected successfully to server');
      
        const findResult = await collection.find({categories:["Java"]}).toArray();
        console.log('Found documents =>', findResult);

        return findResult;
    }

}




