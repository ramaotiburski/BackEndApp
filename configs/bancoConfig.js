var sequelize = require("sequelize")

var conexao = new sequelize("progweb","root","123456",{
    host: "localhost",
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