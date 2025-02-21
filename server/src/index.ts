import express, { json, urlencoded } from 'express';
import router from './router';
import cors from 'cors';
import { CLIENT_URL, PORT } from './config';

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors({
    origin: CLIENT_URL,
    methods: ["PUT", "POST"]
}));

app.use('/api', router);

app.listen(PORT, () => {
    console.log("started");
});