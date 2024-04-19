import bodyParser = require('body-parser');
import 'dotenv/config';
import * as express from 'express';
import * as cors from 'cors';
import router from './routes/routes';
import { authMiddlerWare } from './helpers/authHelper';

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(authMiddlerWare);
app.use(router);

const host:string = process.env.HOST;
const port:number = parseInt(process.env.PORT) || 3000;

app.listen(port,host,()=>{
 console.log(`Server started on port : ${port}`);
});

