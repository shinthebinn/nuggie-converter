import { Request, Response } from 'express'
import * as express from 'express'
import * as path from 'path';
const app = require('express')();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req: Request, res: Response) => {
	res.sendFile('./public/index.html');
});

export const start = () => app.listen(port, () => {
	console.log('listening!');
});