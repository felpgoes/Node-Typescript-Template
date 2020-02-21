import { Router } from "express";

import sample from "./sample";

const routes = Router();

routes.get('/status', (req:any, res:any) => {
    res.status(200).send();
})

routes.use('/', sample);

export default routes;