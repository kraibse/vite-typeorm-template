import 'reflect-metadata';
import express from 'express';
import { DataSource } from 'typeorm';
import { User } from './entities/user';

const app = express();
app.use(express.json());

const AppDataSource = new DataSource({
    type: 'postgres', // e.g., 'postgres'
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'dev',
    entities: [User],
    synchronize: true, // Be careful with this in production
});

AppDataSource.initialize().then(() => {
    console.log('Connected to database');

    app.get('/users', async (req, res) => {
        const users = await AppDataSource.manager.find(User);
        res.json(users);
    });

    app.post('/users', async (req, res) => {
        try {
            console.log("Received request:", req.body);

            const user = new User();
            user.username = req.body.username;
            user.password = req.body.password;
            
            await AppDataSource.manager.save(user);
            res.send('User saved');
        }
        catch (error) {
            console.error('Error saving user:', error);
            res.status(500).send('Error saving user');
        }
    });

    app.listen(3000, () => {
        console.log('Server is listening on port 3000');
    });
    
    app.get('/', (req, res) => {
        res.send('Hello, world!');
    });
    
}).catch(error => console.log('Error connecting to database:', error));