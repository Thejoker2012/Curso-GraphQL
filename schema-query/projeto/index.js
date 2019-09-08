//import do Appolo e gql(gql é uma tagged de template é uma função que faz tratamento de string)
const {ApolloServer, gql} = require('apollo-server')
const {importSchema} = require('graphql-import')
const resolvers = require('./resolvers')
const schemaPath = './schema/index.graphql'


//Definições de Tipos
//Resolve os dados que foram solicitados pelo typeDefs
//Sempre usar typeDef e resolvers como nome das consts, padrão de desenvolvimento
const server = new ApolloServer({
    typeDefs: importSchema(schemaPath),
    resolvers
})

//Start do servidor, da para personalizar a porta dentro do parametro do listen()
server.listen().then(({ url })=>{
    console.log(`Executando em ${url}`)
})

/*usuario(id:3){
    ...usuarioCompleto
  }
  usuarios{
    ...usuarioCompleto
  }
}

fragment usuarioCompleto on Usuario {
  id nome email idade salario vip
  perfil {nome id}
  
}
*/