import express from "express";
import routes from "./routers";

const app = express();
const port = 3333;

app.use(routes);

app.listen(port, () => {
    console.log(`It works on port ${port}`)
})

module.exports = app;