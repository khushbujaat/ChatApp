
import mongoose from 'mongoose';

import dotenv from 'dotenv';

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
     const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-smkhpc6-shard-00-00.3dzilpq.mongodb.net:27017,ac-smkhpc6-shard-00-01.3dzilpq.mongodb.net:27017,ac-smkhpc6-shard-00-02.3dzilpq.mongodb.net:27017/?ssl=true&replicaSet=atlas-8lmqut-shard-0&authSource=admin&retryWrites=true&w=majority`;
     try { 
      await mongoose.connect(URL, { useUnifiedTopology: true });
      console.log('DataBase connected successfully');
     } catch (error) {
        console.log('Error while connecting with the DataBase', error.message);
    }
}

export default Connection;

