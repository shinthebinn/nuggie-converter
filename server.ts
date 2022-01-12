import { Request, Response } from 'express'
import * as express from 'express'
import * as path from 'path';

import { nuggiesToUSD, USDToNuggies } from './nuggies';
const manifest = require('./restaurants.json')

const app = require('express')();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req: Request, res: Response) => {
	res.sendFile('./public/index.html');
});

//app.get('/api/manifest/', (req: Request, res: Response) => {
//	res.json(manifest)
//});

app.get('/api/mainfest/:chain?/', (req: Request, res: Response) => {
	if (req.params.chain) {
		res.json(manifest[req.params.chain]);
	} else {
		res.json(manifest);
	}
})

export const start = () => app.listen(port, () => {
	console.log('listening!');
});