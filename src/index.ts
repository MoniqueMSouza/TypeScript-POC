import express from 'express'
import router from './routes/index-routes';

const server = express();
server.use(express.json())
server.use(router);



const port: number = parseInt(process.env.PORT) || 5000;
server.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})