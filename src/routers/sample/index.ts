import { Router } from "express";

const sample = Router() ;

sample.get('/sample', (req: any, res: any) => {
    console.log('/sample endpoint');
    res.status(200).send({message: 'Sample Works'})
})

export default sample;