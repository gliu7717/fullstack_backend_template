import express from "express";
import {routes} from './routes'

const app = express()
routes.forEach(route => {
    app[route.method] (route.path,route.handler)
})
/*
app.get('/hello', (req,res) =>{
    res.send("Hello  world!")
})
*/

app.listen(8080, () => {
    console.log('Server is listening on port 8080')
})