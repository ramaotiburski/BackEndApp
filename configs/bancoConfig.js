var sequelize = require("sequelize")

var conexao = new sequelize("progweb","root","12345678",{
    host: "progweb2021.cp5qv0kwic5o.us-east-2.rds.amazonaws.com",
    dialect: "mysql"
})

conexao.authenticate().then(
    function(){
        console.log("Conectado ao banco com sucesso!")
    }
).catch(
    function(erro){
        console.log("Erro ao conectar: "+erro)
    }
)

module.exports = conexao