//import do Appolo e gql(gql é uma tagged de template é uma função que faz tratamento de string)
const {AppoloServer, gql} = require('apollo-server')

//Definições de Tipos
const typeDefs = gql``

//
const resolvers={}

//Sempre usar typeDef e resolvers como nome das consts, padrão de desenvolvimento
const server = new AppoloServer({
    typeDefs,
    resolvers
})

//Start do servidor, da para personalizar a porta dentro do parametro do listen()
server.listen().then(({url})=>{
    console.log(`Executando em ${url}`)
})