//import do Appolo e gql(gql é uma tagged de template é uma função que faz tratamento de string)
const {ApolloServer, gql} = require('apollo-server')

//Definições de Tipos
const typeDefs = gql`

    #Criar tipos de dados personalizados para o GraphQL
    scalar Date

    #Ponto de entrada da API
    type Query{
        ola:String
        horaAtual:Date
    }

`
//Resolve os dados que foram solicitados pelo typeDefs
const resolvers={
    Query:{
        ola(){
            return 'Bom Dia'
        },
        horaAtual(){
            return new Date
        }
        
    }


}

//Sempre usar typeDef e resolvers como nome das consts, padrão de desenvolvimento
const server = new ApolloServer({
    typeDefs,
    resolvers
})

//Start do servidor, da para personalizar a porta dentro do parametro do listen()
server.listen().then(({ url })=>{
    console.log(`Executando em ${url}`)
})