import express from "express";
import conexao  from "./database/DataBaseConection"
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get('/', (req, res)=>{
    res.send('trovao gostoso')
})

app.listen(3333, ()=>{console.log("server running!")})