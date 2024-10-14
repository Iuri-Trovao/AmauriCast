import mysql from "mysql";

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Amauri1234',
    database: 'AmauriCast'
})

conexao.connect((err):void =>{
    if(err){
        console.error(`Erro ao conectar ao Banco de Dados: ${err}`)
    }else{console.log("conexão bem sucedida")}
})

export default conexao;