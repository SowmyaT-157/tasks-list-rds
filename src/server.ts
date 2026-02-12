
import express from 'express'
import sequelize from './config/dbConnection';
import { taskRouter } from './routers/taskRouter';



const app = express();
app.use(express.json());

const PORT = process.env.PORT
app.use('/',taskRouter)

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});

const authentication = async() =>{
    try {
       await sequelize.authenticate();
       console.log('Connection has been established successfully.');
    }catch (error) {
       console.error('Unable to connect to the database:', error);
    }
}
authentication()

    
